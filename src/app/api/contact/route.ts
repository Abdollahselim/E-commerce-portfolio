import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { checkRateLimit } from "@/lib/rate-limiter";
import { buildOwnerEmail, buildClientEmail } from "@/lib/email-templates";
import { sendTelegramAlert } from "@/lib/telegram";

// ─── Helpers ───────────────────────────────────────────────────────────────

function getIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

// ─── POST /api/contact ─────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  // Initialize Resend inside handler to avoid build-time initialization errors
  const resend = new Resend(process.env.RESEND_API_KEY);
  // ── 1. Rate Limiting ────────────────────────────────────────────────────
  const ip = getIp(req);
  const rateCheck = await checkRateLimit(ip);

  if (!rateCheck.ok) {
    return NextResponse.json(
      { error: "Too many requests. Please wait and try again." },
      {
        status: 429,
        headers: {
          "X-RateLimit-Limit": String(rateCheck.limit),
          "X-RateLimit-Remaining": String(rateCheck.remaining),
          "X-RateLimit-Reset": String(rateCheck.reset),
          "Retry-After": String(rateCheck.retryAfter ?? 60),
        },
      }
    );
  }

  // ── 2. Parse JSON body ──────────────────────────────────────────────────
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // ── 3. Honeypot check ───────────────────────────────────────────────────
  if (typeof raw === "object" && raw !== null && "_hp" in raw) {
    const hp = (raw as Record<string, unknown>)._hp;
    if (hp && String(hp).length > 0) {
      // Silently accept to confuse bots, but don't send emails
      return NextResponse.json({ ok: true });
    }
  }

  // ── 4. Zod schema validation ────────────────────────────────────────────
  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", issues: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const data = parsed.data;

  // ── 5. Check Resend config ──────────────────────────────────────────────
  const fromAddress = process.env.RESEND_FROM_ADDRESS ?? "onboarding@resend.dev";
  const ownerEmail  = process.env.OWNER_EMAIL;

  if (!process.env.RESEND_API_KEY || !ownerEmail) {
    console.error("[Contact API] Missing RESEND_API_KEY or OWNER_EMAIL env vars.");
    return NextResponse.json(
      { error: "Server configuration error. Please contact us via WhatsApp." },
      { status: 500 }
    );
  }

  // ── 6. Send emails in parallel + Telegram alert ─────────────────────────
  const [ownerResult, clientResult] = await Promise.allSettled([
    resend.emails.send({
      from: `Abdullah Selim Portfolio <${fromAddress}>`,
      to:   [ownerEmail],
      subject: `🔔 New Lead: ${data.name} — ${data.platform} / ${data.budget}`,
      html: buildOwnerEmail(data),
      replyTo: data.email,
    }),
    resend.emails.send({
      from:    `Abdullah Selim <${fromAddress}>`,
      to:      [data.email],
      subject: "Your Audit Request Has Been Received ✓",
      html:    buildClientEmail(data),
    }),
    // Telegram runs fully independently — failure never blocks form success
    sendTelegramAlert(data).catch((err) =>
      console.error("[Telegram] Notification failed:", err)
    ),
  ]);

  // ── 7. Handle email failures ────────────────────────────────────────────
  if (ownerResult.status === "rejected") {
    console.error("[Resend] Owner email failed:", ownerResult.reason);
    // Return WhatsApp fallback URL so the client can redirect
    const waMessage = encodeURIComponent(
      `Hi Abdullah, I just filled your contact form but the email failed.\n` +
      `Name: ${data.name}\nEmail: ${data.email}\nPlatform: ${data.platform}\nBudget: ${data.budget}\n\n${data.goal}`
    );
    return NextResponse.json(
      {
        error: "email_failed",
        whatsappFallback: `https://wa.me/201551747510?text=${waMessage}`,
      },
      { status: 502 }
    );
  }

  if (clientResult.status === "rejected") {
    // Owner email succeeded; client auto-reply failed — not a fatal error
    console.warn("[Resend] Client auto-reply failed:", clientResult.reason);
  }

  // ── 8. Success ──────────────────────────────────────────────────────────
  return NextResponse.json({ ok: true }, { status: 200 });
}

// Block all other methods
export function GET()    { return NextResponse.json({ error: "Method not allowed" }, { status: 405 }); }
export function PUT()    { return NextResponse.json({ error: "Method not allowed" }, { status: 405 }); }
export function DELETE() { return NextResponse.json({ error: "Method not allowed" }, { status: 405 }); }
