import type { ContactFormData } from "./contact-schema";

export async function sendTelegramAlert(data: ContactFormData): Promise<void> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn("[Telegram] TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not configured — skipping alert.");
    return;
  }

  const goal = data.goal.length > 200 ? data.goal.slice(0, 200) + "…" : data.goal;

  const message = `
🔔 *New Lead — Abdullah Selim Portfolio*

👤 *Name:* ${escape(data.name)}
📧 *Email:* ${escape(data.email)}
📱 *Phone:* ${escape(data.phone)}
🏢 *Business:* ${escape(data.business)}
🛒 *Platform:* ${escape(data.platform)}
💰 *Budget:* ${escape(data.budget)}
${data.url ? `🔗 *Store URL:* ${escape(data.url)}\n` : ""}
💬 *Message:*
_${escape(goal)}_
`.trim();

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: "Markdown",
      disable_web_page_preview: true,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    console.error("[Telegram] Failed to send alert:", body);
  }
}

function escape(text: string): string {
  return text.replace(/([_*[\]()~`>#+\-=|{}.!])/g, "\\$1");
}
