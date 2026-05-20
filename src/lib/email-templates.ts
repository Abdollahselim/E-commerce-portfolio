import type { ContactFormData } from "./contact-schema";

// ─── Owner notification email ──────────────────────────────────────────────

export function buildOwnerEmail(data: ContactFormData): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Lead — Abdullah Selim Portfolio</title>
</head>
<body style="margin:0;padding:0;background:#090d16;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#090d16;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#0f172a;border:1px solid rgba(255,255,255,0.08);border-radius:12px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="padding:32px 40px;background:linear-gradient(135deg,#0f172a 0%,#1e293b 100%);border-bottom:1px solid rgba(16,185,129,0.3);">
              <p style="margin:0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#10b981;font-weight:600;">New Lead Received</p>
              <h1 style="margin:8px 0 0;font-size:24px;font-weight:700;color:#f0ece4;line-height:1.3;">Store Audit Request</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">
              ${row("Name", data.name)}
              ${row("Email", `<a href="mailto:${data.email}" style="color:#10b981;text-decoration:none;">${data.email}</a>`)}
              ${row("Phone", data.phone)}
              ${row("Business", data.business)}
              ${row("Platform", data.platform)}
              ${row("Budget Range", data.budget)}
              ${data.url ? row("Store URL", `<a href="${data.url}" style="color:#10b981;text-decoration:none;" target="_blank">${data.url}</a>`) : ""}
              
              <!-- Goal -->
              <div style="margin-top:24px;">
                <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#64748b;font-weight:600;">Project Goal / Core Bottleneck</p>
                <div style="background:#090d16;border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:16px;font-size:15px;color:#cbd5e1;line-height:1.7;">${escapeHtml(data.goal)}</div>
              </div>
            </td>
          </tr>

          <!-- Quick Actions -->
          <tr>
            <td style="padding:0 40px 36px;border-top:1px solid rgba(255,255,255,0.06);">
              <p style="margin:24px 0 16px;font-size:13px;color:#64748b;">Quick reply actions:</p>
              <a href="mailto:${data.email}?subject=Re: Your Store Audit Request" style="display:inline-block;margin-right:12px;padding:10px 20px;background:#10b981;color:#090d16;border-radius:6px;font-size:13px;font-weight:700;text-decoration:none;letter-spacing:0.05em;">Reply via Email</a>
              <a href="https://wa.me/${data.phone.replace(/\D/g, "")}?text=Hi%20${encodeURIComponent(data.name)}%2C%20I%27ve%20reviewed%20your%20request%20and%20would%20love%20to%20discuss%20further." style="display:inline-block;padding:10px 20px;background:#25d366;color:#fff;border-radius:6px;font-size:13px;font-weight:700;text-decoration:none;letter-spacing:0.05em;">WhatsApp</a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;background:#080c14;border-top:1px solid rgba(255,255,255,0.05);">
              <p style="margin:0;font-size:12px;color:#334155;text-align:center;">Abdullah Selim Portfolio · Lead Notification System</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── Auto-reply email ──────────────────────────────────────────────────────

export function buildClientEmail(data: ContactFormData): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>We Received Your Request</title>
</head>
<body style="margin:0;padding:0;background:#090d16;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#090d16;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#0f172a;border:1px solid rgba(255,255,255,0.08);border-radius:12px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="padding:40px;background:linear-gradient(135deg,#0f172a 0%,#1e293b 100%);border-bottom:1px solid rgba(16,185,129,0.3);text-align:center;">
              <div style="width:48px;height:48px;background:rgba(16,185,129,0.15);border:1px solid rgba(16,185,129,0.4);border-radius:50%;margin:0 auto 20px;display:flex;align-items:center;justify-content:center;">
                <span style="font-size:22px;">✓</span>
              </div>
              <h1 style="margin:0;font-size:26px;font-weight:700;color:#f0ece4;">Request Received</h1>
              <p style="margin:10px 0 0;font-size:14px;color:#64748b;">Your audit request is in good hands.</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <p style="margin:0 0 20px;font-size:16px;color:#cbd5e1;line-height:1.7;">Hi <strong style="color:#f0ece4;">${escapeHtml(data.name)}</strong>,</p>
              <p style="margin:0 0 20px;font-size:15px;color:#94a3b8;line-height:1.8;">Thank you for reaching out. I've received your store audit request and will personally review the details you've shared.</p>

              <div style="background:#090d16;border-left:3px solid #10b981;border-radius:0 8px 8px 0;padding:20px 24px;margin:28px 0;">
                <p style="margin:0;font-size:14px;color:#10b981;font-weight:600;letter-spacing:0.05em;">What happens next?</p>
                <ul style="margin:12px 0 0;padding:0 0 0 18px;color:#94a3b8;font-size:14px;line-height:2;">
                  <li>I'll review your platform, goals, and bottlenecks</li>
                  <li>You'll receive a personalised response within <strong style="color:#f0ece4;">24 hours</strong></li>
                  <li>We'll schedule a brief call to align on next steps</li>
                </ul>
              </div>

              <p style="margin:0;font-size:14px;color:#64748b;line-height:1.7;">In the meantime, if anything is urgent, feel free to reach me directly:</p>
              <p style="margin:16px 0 0;">
                <a href="https://wa.me/201551747510" style="display:inline-block;padding:12px 24px;background:#25d366;color:#fff;border-radius:6px;font-size:14px;font-weight:600;text-decoration:none;">WhatsApp — Quick Reply</a>
              </p>
            </td>
          </tr>

          <!-- Summary -->
          <tr>
            <td style="padding:0 40px 36px;">
              <p style="margin:0 0 16px;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#334155;font-weight:600;border-top:1px solid rgba(255,255,255,0.05);padding-top:28px;">Your Submission Summary</p>
              ${miniRow("Platform", data.platform)}
              ${miniRow("Budget Range", data.budget)}
              ${data.url ? miniRow("Store URL", data.url) : ""}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;background:#080c14;border-top:1px solid rgba(255,255,255,0.05);text-align:center;">
              <p style="margin:0 0 6px;font-size:13px;color:#334155;">Abdullah Selim · E-Commerce Systems Engineer</p>
              <p style="margin:0;font-size:12px;color:#1e293b;">Saudi Arabia & GCC Market Specialist</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── Helpers ───────────────────────────────────────────────────────────────

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function row(label: string, value: string): string {
  return `
    <div style="margin-bottom:16px;padding-bottom:16px;border-bottom:1px solid rgba(255,255,255,0.05);">
      <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#64748b;font-weight:600;">${label}</p>
      <p style="margin:0;font-size:15px;color:#e2e8f0;">${value}</p>
    </div>`;
}

function miniRow(label: string, value: string): string {
  return `
    <div style="display:flex;gap:8px;margin-bottom:8px;font-size:13px;">
      <span style="color:#475569;min-width:100px;">${label}:</span>
      <span style="color:#cbd5e1;">${escapeHtml(value)}</span>
    </div>`;
}
