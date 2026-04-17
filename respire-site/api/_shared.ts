import type { VercelRequest, VercelResponse } from "@vercel/node";

/** Parse JSON bodies from Vercel (object, raw string, or Buffer). */
export function parseJsonBody(req: VercelRequest): Record<string, unknown> | null {
  const raw = req.body;
  if (raw && typeof raw === "object" && !Array.isArray(raw)) {
    return raw as Record<string, unknown>;
  }
  if (typeof raw === "string" && raw.trim()) {
    try {
      const parsed: unknown = JSON.parse(raw);
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        return parsed as Record<string, unknown>;
      }
    } catch {
      return null;
    }
  }
  if (Buffer.isBuffer(raw) && raw.length > 0) {
    try {
      const parsed: unknown = JSON.parse(raw.toString("utf8"));
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        return parsed as Record<string, unknown>;
      }
    } catch {
      return null;
    }
  }
  return {};
}

export function setCors(res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

/** RFC 9110 — include Allow when returning 405 for API routes. */
export function respondMethodNotAllowed(res: VercelResponse) {
  res.setHeader("Allow", "POST, OPTIONS");
  return res.status(405).json({ error: "Method not allowed" });
}

/** Data center suffix from Marketing API key (e.g. `xxx-us17` → `us17`). */
export function mailchimpMarketingDc(apiKey: string): string | null {
  const parts = apiKey.split("-");
  const dc = parts[parts.length - 1];
  return dc && /^[a-z]{2}\d+$/i.test(dc) ? dc : null;
}
