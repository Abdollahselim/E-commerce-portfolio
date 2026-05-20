/**
 * Analytics event preparation layer.
 *
 * To activate Google Analytics:
 *   1. Add NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX" to .env.local
 *   2. Add <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} /> to layout.tsx
 *
 * To activate Microsoft Clarity:
 *   1. Add NEXT_PUBLIC_CLARITY_ID="xxxxxxxxxx" to .env.local
 *   2. Add the Clarity snippet inside layout.tsx <Script> tags
 *
 * All tracking calls in the app should go through this module so
 * you can swap providers without touching component code.
 */

type EventName =
  | "contact_form_submit"
  | "contact_form_success"
  | "contact_form_error"
  | "whatsapp_click"
  | "calendly_open";

type EventPayload = Record<string, string | number | boolean>;

/**
 * Fire a client-side analytics event.
 * Safe to call before the analytics script has loaded — gtag / clarity
 * will queue events and replay them when ready.
 */
export function trackEvent(name: EventName, payload?: EventPayload): void {
  if (typeof window === "undefined") return;

  interface WindowWithGtag extends Window {
    gtag?: (command: string, eventName: string, config: EventPayload) => void;
  }

  interface WindowWithClarity extends Window {
    clarity?: (command: string, eventName: string) => void;
  }

  const windowWithGtag = window as WindowWithGtag;
  const windowWithClarity = window as WindowWithClarity;

  // Google Analytics 4
  if (typeof windowWithGtag.gtag === "function") {
    windowWithGtag.gtag("event", name, payload ?? {});
  }

  // Microsoft Clarity
  if (typeof windowWithClarity.clarity === "function") {
    windowWithClarity.clarity("event", name);
  }
}
