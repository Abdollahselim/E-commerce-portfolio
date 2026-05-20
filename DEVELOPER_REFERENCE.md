# Lead Capture System — Developer Reference

Quick reference for developers who need to understand, modify, or extend the contact system.

## 🎯 What Each File Does

### `/src/components/sections/contact-section.tsx` — Contact Form UI

**Purpose:** Renders the contact form with React Hook Form + Zod validation

**Key Functions:**
- `ContactSection()` — Main component
- `Field()` — Reusable input wrapper with error display

**Customization:**
```tsx
// Change default values (platform, budget)
defaultValues: {
  platform: "Salla",           // ← Change default platform
  budget: "1,000-5,000 $",     // ← Change default budget
}

// Change input styling
const inputClass = "rounded-md border ...";  // ← Tailwind classes

// Add new fields
// 1. Add field to schema (contact-schema.ts)
// 2. Add input/select to form
// 3. Register with useForm hook
```

**Tracks Events:**
- `contact_form_submit` — User hit submit
- `contact_form_success` — Form succeeded
- `contact_form_error` — Form failed (reason in payload)
- `whatsapp_click` — User clicked WhatsApp link

---

### `/src/app/api/contact/route.ts` — API Endpoint

**Purpose:** Handles form submission, validation, and email/Telegram sending

**Flow:**
```
1. Check rate limit (5 req/min per IP)
   ├─ If rate limit exceeded → return 429
   
2. Parse JSON body
   ├─ If invalid JSON → return 400
   
3. Check honeypot field
   ├─ If filled → silently accept (trick bots)
   
4. Validate with Zod schema
   ├─ If invalid → return 422 with field errors
   
5. Send emails in parallel
   ├─ Owner email (lead notification)
   ├─ Client email (auto-reply)
   
6. Send Telegram alert (async, non-blocking)
   
7. Return success or WhatsApp fallback
```

**Customization:**
```tsx
// Change WhatsApp number
const waMessage = `...+201551747510?text=...`;  // ← Your number

// Change email sender name
from: `Abdullah Selim Portfolio <${fromAddress}>`,  // ← Name here

// Change email subjects
subject: `🔔 New Lead: ${data.name} — ${data.platform}`,  // ← Subject

// Add webhook integration
// Add after Telegram block:
// await fetch("https://your-webhook.com", { method: "POST", body: JSON.stringify(data) })
```

**Environment Variables Required:**
- `RESEND_API_KEY` — Resend API key
- `RESEND_FROM_ADDRESS` — Sender email
- `OWNER_EMAIL` — Where leads go
- `TELEGRAM_BOT_TOKEN` — (optional)
- `TELEGRAM_CHAT_ID` — (optional)

---

### `/src/lib/contact-schema.ts` — Validation Schema

**Purpose:** Define form validation rules with Zod

**Structure:**
```tsx
const contactSchema = z.object({
  name: z.string()
    .min(2, "error message")
    .max(100, "error message")
    .regex(/^[\p{L}\s'-]+$/u, "error message"),
  
  email: z.string()
    .email("error message")
    .max(254, "error message"),
  
  // ... other fields
});

export type ContactFormData = z.output<typeof contactSchema>;
```

**Customization:**
```tsx
// Add new field
myField: z.string()
  .min(3, "Too short")
  .max(50, "Too long")
  .optional(),

// Change validation rules
name: z.string()
  .min(1, "Required")  // ← Make required in UI only
  .max(50, "Too long"),

// Add custom validation
website: z.string()
  .refine((val) => val.startsWith("https://"), "Must use HTTPS"),
```

---

### `/src/lib/email-templates.ts` — Email HTML

**Purpose:** Generate professional HTML emails

**Functions:**
- `buildOwnerEmail(data)` — Email to you with lead details
- `buildClientEmail(data)` — Auto-reply to client
- `escapeHtml(text)` — Sanitize for HTML
- `row()` — Format label/value pair
- `miniRow()` — Compact label/value

**Customization:**
```tsx
// Change email colors
background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);  // ← Colors

// Change branding text
<h1>New Lead Alert</h1>  // ← Your heading

// Add custom fields
${data.url ? row("Store URL", `<a href="${data.url}">link</a>`) : ""}

// Change reply buttons
<a href="mailto:...">Reply</a>  // ← Add/remove action buttons
```

**HTML Structure:** Email templates use inline styles (for email client compatibility)

---

### `/src/lib/rate-limiter.ts` — Rate Limiting

**Purpose:** Prevent spam by limiting requests per IP

**Configuration:**
```tsx
const WINDOW_MS = 60_000;    // 1 minute window
const MAX_REQUESTS = 5;       // Max 5 requests per window
```

**How It Works:**
```
IP requests are tracked in-memory:
Map<ip_address> = { count: 5, resetAt: timestamp }

Each request:
1. Check if window expired → reset count
2. Check if limit reached → return 429
3. Increment count
4. Return ok
```

**Customization:**
```tsx
// More strict
const WINDOW_MS = 60_000;    // 1 minute
const MAX_REQUESTS = 2;      // Only 2 requests

// More lenient
const WINDOW_MS = 300_000;   // 5 minutes
const MAX_REQUESTS = 20;     // 20 requests per 5 min
```

**For Production at Scale:**
Replace in-memory Map with Redis:
```tsx
import { Redis } from "@upstash/redis";
const redis = new Redis({...});

// Use redis.get/set instead of Map
const count = await redis.get(`rate-${ip}`);
```

---

### `/src/lib/telegram.ts` — Telegram Notifications

**Purpose:** Send instant Telegram alerts when new leads arrive

**Configuration:**
```tsx
const botToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;
```

**How It Works:**
```
1. Format lead data as markdown message
2. POST to Telegram Bot API
3. Don't wait for response (async, non-blocking)
```

**Message Format:**
```
🔔 *New Lead — Abdullah Selim Portfolio*
👤 *Name:* John Doe
📧 *Email:* john@company.com
...
```

**Customization:**
```tsx
// Change emoji/formatting
const message = `
📬 *NEW INQUIRY*
👤 Name: ${escape(data.name)}
📧 Contact: ${escape(data.email)}
...
`;

// Add more fields
💼 *Company Size:* ${escape(data.companySize)}

// Send to different chat
chatId = process.env.TELEGRAM_SALES_TEAM_ID;
```

**Error Handling:** Telegram failures are logged but don't block form submission

---

### `/src/lib/analytics.ts` — Analytics Events

**Purpose:** Track form events for Google Analytics & Microsoft Clarity

**Events Tracked:**
```tsx
type EventName =
  | "contact_form_submit"
  | "contact_form_success"
  | "contact_form_error"
  | "whatsapp_click"
  | "calendly_open";
```

**Usage:**
```tsx
// Track form submit
trackEvent("contact_form_submit");

// Track with payload
trackEvent("contact_form_error", { reason: "validation_failed" });
```

**How It Works:**
```
1. Check if gtag (Google Analytics) exists
2. Call gtag("event", name, payload)
3. Check if clarity exists
4. Call clarity("event", name)
```

**Customization:**
```tsx
// Add new event type
type EventName =
  | "contact_form_submit"
  | "my_custom_event";

// Track new event in component
trackEvent("my_custom_event");
```

---

## 🔧 Common Modifications

### Add a New Form Field

1. **Update Schema** (`contact-schema.ts`):
```tsx
const contactSchema = z.object({
  // ... existing fields
  companySize: z.enum(["1-10", "11-50", "50+"], "Required"),
});
```

2. **Add to Form** (`contact-section.tsx`):
```tsx
<Field label="Company Size" error={errors.companySize?.message}>
  <select {...register("companySize")} className={selectClass}>
    <option>1-10</option>
    <option>11-50</option>
    <option>50+</option>
  </select>
</Field>
```

3. **Include in Emails** (`email-templates.ts`):
```tsx
${row("Company Size", data.companySize)}
```

4. **Include in Telegram** (`telegram.ts`):
```tsx
👥 *Company Size:* ${escape(data.companySize)}\n
```

---

### Change Rate Limit

**File:** `src/lib/rate-limiter.ts`

```tsx
// Current: 5 requests per 60 seconds
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

// New: 10 requests per 5 minutes
const WINDOW_MS = 300_000;    // 5 minutes
const MAX_REQUESTS = 10;
```

---

### Customize Email Template

**File:** `src/lib/email-templates.ts`

**Change colors:**
```tsx
// Owner email header
background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
border-bottom: 1px solid rgba(16, 185, 129, 0.3);
```

**Change text:**
```tsx
<h1 style="...">🔔 New Lead Received</h1>
<p>Thank you for using our system</p>
```

**Add custom section:**
```tsx
<div style="...">
  <p style="...">Your custom HTML here</p>
</div>
```

---

### Add Webhook Integration

**File:** `src/app/api/contact/route.ts`

After Telegram block, add:
```tsx
// Send to your backend/service
try {
  await fetch("https://your-api.com/webhook", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      lead: data,
      timestamp: new Date().toISOString(),
      source: "portfolio",
    }),
  });
} catch (err) {
  console.error("[Webhook] Failed:", err);
  // Don't block form if webhook fails
}
```

---

## 🧪 Testing

### Test Rate Limiting
```bash
# Submit 6 forms rapidly
# 6th should return 429 Too Many Requests
```

### Test Honeypot
```tsx
// In browser console, submit with honeypot filled:
fetch("/api/contact", {
  method: "POST",
  body: JSON.stringify({
    name: "Bot",
    email: "bot@spam.com",
    _hp: "I'm a bot!",  // ← Filled
    // ... other fields
  })
});
// Should silently succeed (no emails sent)
```

### Test Validation
```tsx
// Invalid email
{ email: "not-an-email" }  // → 422 error

// Too short
{ name: "A" }  // → 422 error

// Invalid phone
{ phone: "abc" }  // → 422 error
```

### Test Email Sending
```bash
# Local: npm run dev
# Go to http://localhost:3000/#contact
# Submit form
# Check OWNER_EMAIL inbox (should arrive in 1-5 seconds)
```

---

## 🚨 Debugging

### Enable Verbose Logging

Add to `route.ts`:
```tsx
console.log("[Contact API] Request received:", {
  ip,
  data,
  timestamp: new Date().toISOString(),
});
```

Check logs in Vercel dashboard:
```
Vercel → Project → Logs → Function Logs
```

### Check Resend Status

```tsx
// In route.ts
const ownerResult = await resend.emails.send({...});
console.log("[Resend] Owner email:", ownerResult);
// Look for: id (success) or error (failure)
```

### Check Network Request

Browser DevTools:
```
1. Open DevTools (F12)
2. Go to Network tab
3. Submit form
4. Click POST /api/contact
5. Check Response tab for errors
```

---

## 📦 Environment Variables Reference

| Variable | Required | Used In | Purpose |
|----------|----------|---------|---------|
| `RESEND_API_KEY` | ✅ | `/api/contact` | Email sending |
| `RESEND_FROM_ADDRESS` | ✅ | `/api/contact` | Sender address |
| `OWNER_EMAIL` | ✅ | `/api/contact` | Lead recipient |
| `TELEGRAM_BOT_TOKEN` | ❌ | `telegram.ts` | Telegram bot auth |
| `TELEGRAM_CHAT_ID` | ❌ | `telegram.ts` | Telegram chat ID |
| `NEXT_PUBLIC_SITE_URL` | ✅ | All | Site URL in emails |
| `NEXT_PUBLIC_GA_ID` | ❌ | `analytics.ts` | Google Analytics |
| `NEXT_PUBLIC_CLARITY_ID` | ❌ | `analytics.ts` | Microsoft Clarity |

---

## 🔒 Security Checklist

- [ ] API key stored in `.env.local` (git-ignored)
- [ ] No API keys in frontend code
- [ ] Rate limiting active
- [ ] Honeypot field present in form
- [ ] HTML sanitization in email templates
- [ ] Only POST method accepted
- [ ] Input validation before processing
- [ ] Error messages don't expose internals
- [ ] Telegram token not exposed to client

---

**Ready to customize? Start with any section above! 🚀**
