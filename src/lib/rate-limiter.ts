import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

interface RateLimitResult {
  ok: boolean;
  limit: number;
  remaining: number;
  reset: number;
  retryAfter?: number;
}

const store = new Map<string, RateLimitRecord>();

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

const upstashEnabled =
  Boolean(process.env.UPSTASH_REDIS_REST_URL) &&
  Boolean(process.env.UPSTASH_REDIS_REST_TOKEN);

const upstashRateLimit = upstashEnabled
  ? new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(MAX_REQUESTS, "60 s"),
      analytics: true,
      prefix: "portfolio:contact",
    })
  : null;

function checkMemoryRateLimit(ip: string): RateLimitResult {
  const now = Date.now();
  const record = store.get(ip);

  if (!record || now > record.resetAt) {
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return {
      ok: true,
      limit: MAX_REQUESTS,
      remaining: MAX_REQUESTS - 1,
      reset: now + WINDOW_MS,
    };
  }

  if (record.count >= MAX_REQUESTS) {
    return {
      ok: false,
      limit: MAX_REQUESTS,
      remaining: 0,
      reset: record.resetAt,
      retryAfter: Math.max(1, Math.ceil((record.resetAt - now) / 1000)),
    };
  }

  record.count += 1;
  return {
    ok: true,
    limit: MAX_REQUESTS,
    remaining: Math.max(0, MAX_REQUESTS - record.count),
    reset: record.resetAt,
  };
}

export async function checkRateLimit(ip: string): Promise<RateLimitResult> {
  if (!upstashRateLimit) {
    return checkMemoryRateLimit(ip);
  }

  const result = await upstashRateLimit.limit(ip);
  return {
    ok: result.success,
    limit: result.limit,
    remaining: result.remaining,
    reset: result.reset,
    retryAfter: result.success
      ? undefined
      : Math.max(1, Math.ceil((result.reset - Date.now()) / 1000)),
  };
}
