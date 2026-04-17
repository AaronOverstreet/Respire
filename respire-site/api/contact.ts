import type { VercelRequest, VercelResponse } from "@vercel/node";
import { parseJsonBody, respondMethodNotAllowed, setCors } from "./_shared.js";

/** Mailchimp Transactional (mandrillapp.com) — same product family as Mailchimp Marketing but a separate API key. */
const TRANSACTIONAL_SEND_URL = "https://mandrillapp.com/api/1.3/messages/send.json";

type MandrillRecipientResult = {
  email: string;
  status: string;
  reject_reason?: string | null;
};

type MandrillErrorBody = {
  status: "error";
  message?: string;
  name?: string;
};

type TransactionalMessage = {
  text: string;
  subject: string;
  from_email: string;
  from_name?: string;
  to: Array<{ email: string; type: "to" | "cc" | "bcc"; name?: string }>;
  headers?: Record<string, string>;
  tags?: string[];
};

async function sendTransactional(params: {
  apiKey: string;
  message: TransactionalMessage;
}): Promise<{ ok: true } | { ok: false; detail: string }> {
  const res = await fetch(TRANSACTIONAL_SEND_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      key: params.apiKey,
      message: params.message,
      async: false,
    }),
  });

  let data: unknown;
  try {
    data = await res.json();
  } catch {
    return { ok: false, detail: "Invalid JSON from Mailchimp Transactional." };
  }

  if (!res.ok) {
    const msg =
      data && typeof data === "object" && "message" in data
        ? String((data as { message?: unknown }).message)
        : `HTTP ${res.status}`;
    return { ok: false, detail: msg };
  }

  if (data && typeof data === "object" && (data as MandrillErrorBody).status === "error") {
    const err = data as MandrillErrorBody;
    return { ok: false, detail: err.message ?? err.name ?? "Mailchimp Transactional rejected the request." };
  }

  if (!Array.isArray(data)) {
    return { ok: false, detail: "Unexpected response from Mailchimp Transactional." };
  }

  const results = data as MandrillRecipientResult[];
  const failed = results.find((r) => r.status !== "sent" && r.status !== "queued");
  if (failed) {
    const reason = failed.reject_reason?.trim() || `${failed.status} (${failed.email})`;
    return { ok: false, detail: reason };
  }

  return { ok: true };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res);

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return respondMethodNotAllowed(res);
  }

  const apiKey = process.env.MAILCHIMP_TRANSACTIONAL_API_KEY?.trim();
  const fromEmail = process.env.MAILCHIMP_TRANSACTIONAL_FROM_EMAIL?.trim();
  const fromName = process.env.MAILCHIMP_TRANSACTIONAL_FROM_NAME?.trim() || "Respire";
  const inbox = process.env.CONTACT_INBOX_EMAIL?.trim();

  if (!apiKey || !fromEmail || !inbox) {
    return res.status(503).json({
      error:
        "Contact form is not configured on the server. Add MAILCHIMP_TRANSACTIONAL_API_KEY, MAILCHIMP_TRANSACTIONAL_FROM_EMAIL, and CONTACT_INBOX_EMAIL in the Vercel project settings.",
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

  const internalText = [
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    `Mailing list (offers, updates, events): ${wantsMailingList ? "Yes" : "No"}`,
    "",
    message,
  ].join("\n");

  const toInbox = await sendTransactional({
    apiKey,
    message: {
      text: internalText,
      subject: `[Respire contact] ${subject}`,
      from_email: fromEmail,
      from_name: fromName,
      to: [{ email: inbox, type: "to" }],
      headers: { "Reply-To": email },
      tags: ["contact-form", "site-inquiry"],
    },
  });

  if (!toInbox.ok) {
    console.error("Mailchimp Transactional error (inbox):", toInbox.detail);
    return res.status(502).json({
      error:
        "Could not send your message. Verify MAILCHIMP_TRANSACTIONAL_FROM_EMAIL uses a domain with DKIM/SPF set up in Mailchimp Transactional, and your API key is valid (Transactional → SMTP & API Info).",
      hint: toInbox.detail,
    });
  }

  const toSender = await sendTransactional({
    apiKey,
    message: {
      text: [
        `Hi ${name},`,
        "",
        "Thanks for reaching out. This is an automatic confirmation that we received your message and will get back to you soon.",
        "",
        "— Respire",
      ].join("\n"),
      subject: "We received your message — Respire",
      from_email: fromEmail,
      from_name: fromName,
      to: [{ email, type: "to" }],
      tags: ["contact-form", "visitor-confirmation"],
    },
  });

  if (!toSender.ok) {
    console.warn("Mailchimp Transactional: visitor confirmation failed (inbox already sent):", toSender.detail);
    return res.status(200).json({ ok: true, confirmationSent: false });
  }

  return res.status(200).json({ ok: true, confirmationSent: true });
}
