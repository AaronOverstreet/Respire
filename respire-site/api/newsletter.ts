import type { VercelRequest, VercelResponse } from "@vercel/node";
import { mailchimpMarketingDc, parseJsonBody, setCors } from "./_shared.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res);

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_LIST_ID?.trim();

  if (!apiKey || !listId) {
    return res.status(503).json({
      error:
        "Newsletter signup is not configured. Add MAILCHIMP_API_KEY and MAILCHIMP_LIST_ID (Audience ID) in Vercel environment variables.",
    });
  }

  const dc = mailchimpMarketingDc(apiKey);
  if (!dc) {
    return res.status(503).json({
      error:
        "Mailchimp API key looks wrong (expected a suffix like -us17). Regenerate the key in Mailchimp and update Vercel.",
    });
  }

  let body: Record<string, unknown>;
  try {
    const parsed = parseJsonBody(req);
    if (parsed === null) {
      return res.status(400).json({ error: "Invalid JSON body." });
    }
    body = parsed;
  } catch {
    return res.status(400).json({ error: "Invalid JSON body." });
  }

  const email = String(body.email ?? "").trim();
  const name = String(body.name ?? "").trim();

  if (!email) {
    return res.status(400).json({ error: "Email is required." });
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }

  const auth = Buffer.from(`anystring:${apiKey}`).toString("base64");
  const url = `https://${dc}.api.mailchimp.com/3.0/lists/${encodeURIComponent(listId)}/members`;

  const memberPayload: Record<string, unknown> = {
    email_address: email,
    status: "subscribed",
  };
  if (name) {
    memberPayload.merge_fields = { FNAME: name };
  }

  const mcRes = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(memberPayload),
  });

  if (mcRes.ok) {
    return res.status(200).json({ ok: true });
  }

  let detail: { title?: string; detail?: string } = {};
  try {
    detail = (await mcRes.json()) as { title?: string; detail?: string };
  } catch {
    /* ignore */
  }

  if (detail.title === "Member Exists") {
    return res.status(200).json({ ok: true, alreadySubscribed: true });
  }

  console.error("Mailchimp error:", mcRes.status, detail);

  if (mcRes.status === 400 && detail.detail) {
    return res.status(400).json({
      error: detail.detail,
    });
  }

  return res.status(502).json({
    error:
      detail.detail ||
      "Could not subscribe right now. Confirm MAILCHIMP_LIST_ID matches your audience and the API key has list write access.",
  });
}
