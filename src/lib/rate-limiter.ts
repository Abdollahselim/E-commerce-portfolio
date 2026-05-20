/**
 * Lightweight in-memory rate limiter.
 * Works well on Vercel because each serverless invocation shares the same
 * warm instance during its lifetime. For high-traffic sites, swap the Map
 * for an Upstash Redis client — the interface stays the same.
 */

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateLimitRecord>();

const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 5;   // max 5 submissions per IP per minute

export function checkRateLimit(ip: string): { ok: boolean; retryAfter?: number } {
  const now = Date.now();
  const record = store.get(ip);

  if (!record || now > record.resetAt) {
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true };
  }

  if (record.count >= MAX_REQUESTS) {
    const retryAfter = Math.ceil((record.resetAt - now) / 1000);
    return { ok: false, retryAfter };
  }

  record.count += 1;
  return { ok: true };
}
