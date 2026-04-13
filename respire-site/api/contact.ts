import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

function setCors(res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res);

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const inbox = process.env.CONTACT_INBOX_EMAIL;

  if (!apiKey || !from || !inbox) {
    return res.status(503).json({
      error:
        "Contact form is not configured on the server. Add RESEND_API_KEY, RESEND_FROM_EMAIL, and CONTACT_INBOX_EMAIL in the Vercel project settings.",
    });
  }

  let body: Record<string, unknown>;
  try {
    const raw = req.body;
    body =
      raw && typeof raw === "object" && !Array.isArray(raw)
        ? (raw as Record<string, unknown>)
        : {};
  } catch {
    return res.status(400).json({ error: "Invalid JSON body." });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const subject = String(body.subject ?? "").trim() || "Message from Respire website";
  const message = String(body.message ?? "").trim();
  const wantsMailingList = Boolean(body.wantsMailingList);

  if (!name || !email || !message) {
    return res.status(400).json({
      error: "Name, email, and message are required.",
    });
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }

  const resend = new Resend(apiKey);

  const internalText = [
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    `Mailing list (offers, updates, events): ${wantsMailingList ? "Yes" : "No"}`,
    "",
    message,
  ].join("\n");

  const [toInbox, toSender] = await Promise.all([
    resend.emails.send({
      from,
      to: inbox,
      replyTo: email,
      subject: `[Respire contact] ${subject}`,
      text: internalText,
    }),
    resend.emails.send({
      from,
      to: email,
      subject: "We received your message — Respire",
      text: [
        `Hi ${name},`,
        "",
        "Thanks for reaching out. This is an automatic confirmation that we received your message and will get back to you soon.",
        "",
        "— Respire",
      ].join("\n"),
    }),
  ]);

  if (toInbox.error || toSender.error) {
    const err = toInbox.error ?? toSender.error;
    console.error("Resend error:", err);
    const hint =
      err && typeof err === "object" && "message" in err
        ? String((err as { message: unknown }).message)
        : undefined;
    return res.status(502).json({
      error:
        "Could not send your message. Check that RESEND_FROM_EMAIL uses a domain verified in Resend.",
      ...(hint ? { hint } : {}),
    });
  }

  return res.status(200).json({ ok: true });
}
