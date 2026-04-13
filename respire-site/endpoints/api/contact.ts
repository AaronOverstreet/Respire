import { Resend } from "resend";

const jsonHeaders = { "Content-Type": "application/json" };

function cors(methods: string) {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": methods,
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: cors("POST, OPTIONS") });
  }

  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...jsonHeaders, ...cors("POST, OPTIONS") },
    });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const inbox = process.env.CONTACT_INBOX_EMAIL;

  if (!apiKey || !from || !inbox) {
    return new Response(
      JSON.stringify({ error: "Contact form is not configured on the server." }),
      { status: 503, headers: { ...jsonHeaders, ...cors("POST, OPTIONS") } },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body." }), {
      status: 400,
      headers: { ...jsonHeaders, ...cors("POST, OPTIONS") },
    });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const subject = String(body.subject ?? "").trim() || "Message from Respire website";
  const message = String(body.message ?? "").trim();
  const wantsMailingList = Boolean(body.wantsMailingList);

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ error: "Name, email, and message are required." }),
      { status: 400, headers: { ...jsonHeaders, ...cors("POST, OPTIONS") } },
    );
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return new Response(JSON.stringify({ error: "Please enter a valid email address." }), {
      status: 400,
      headers: { ...jsonHeaders, ...cors("POST, OPTIONS") },
    });
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
    return new Response(
      JSON.stringify({
        error: "Could not send your message. Please try again or call us directly.",
      }),
      { status: 502, headers: { ...jsonHeaders, ...cors("POST, OPTIONS") } },
    );
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { ...jsonHeaders, ...cors("POST, OPTIONS") },
  });
}
