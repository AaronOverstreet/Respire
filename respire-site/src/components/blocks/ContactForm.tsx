import { useState } from "react";
import type { FormEvent } from "react";

type MessageTone = "idle" | "pending" | "success" | "error";

export function ContactForm({ embedded = false }: { embedded?: boolean }) {
  const [messageTone, setMessageTone] = useState<MessageTone>("idle");
  const [messageStatus, setMessageStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const wantsMailingList = data.get("mailing-list-opt-in") === "yes";

    setSending(true);
    setMessageTone("pending");
    setMessageStatus("Sending your message…");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("your-name"),
          email: data.get("your-email"),
          subject: data.get("subject") || "Message from website",
          message: data.get("your-message"),
          wantsMailingList,
        }),
      });

      const payload = (await res.json().catch(() => ({}))) as {
        error?: string;
        hint?: string;
        confirmationSent?: boolean;
      };

      if (!res.ok) {
        setMessageTone("error");
        const base = payload.error || "Something went wrong. Please try again.";
        setMessageStatus(
          payload.hint ? `${base} (${payload.hint})` : base,
        );
        return;
      }

      setMessageTone("success");
      setMessageStatus(
        payload.confirmationSent === false
          ? "Sent. We received your message and will get back to you soon."
          : "Sent. Check your inbox—we also emailed you a quick confirmation.",
      );
      form.reset();
    } catch {
      setMessageTone("error");
      setMessageStatus(
        "Could not reach the server. Check your connection or try again later.",
      );
    } finally {
      setSending(false);
    }
  }

  const formClass = [
    "contact-form",
    embedded ? "contact-form--embedded" : "surface-card",
  ]
    .filter(Boolean)
    .join(" ");

  const statusToneAttr =
    messageTone === "idle"
      ? undefined
      : messageTone === "pending"
        ? "pending"
        : messageTone === "success"
          ? "success"
          : "error";

  return (
    <form className={formClass} onSubmit={handleSubmit}>
      <label className="contact-form__field">
        Your name (required)
        <input name="your-name" required autoComplete="name" disabled={sending} />
      </label>
      <label className="contact-form__field">
        Your email (required)
        <input
          name="your-email"
          type="email"
          required
          autoComplete="email"
          disabled={sending}
        />
      </label>
      <label className="contact-form__field">
        Subject
        <input name="subject" type="text" disabled={sending} />
      </label>
      <label className="contact-form__field">
        Your message
        <div className="contact-form__message-block">
          <textarea
            name="your-message"
            rows={6}
            maxLength={2000}
            required
            disabled={sending}
            aria-describedby="contact-message-status"
          />
          <p
            id="contact-message-status"
            className="contact-form__message-status"
            {...(statusToneAttr ? { "data-tone": statusToneAttr } : {})}
            role="status"
            aria-live="polite"
          >
            {messageTone === "idle" ? "" : messageStatus}
          </p>
        </div>
      </label>
      <label className="contact-form__checkbox">
        <input
          type="checkbox"
          name="mailing-list-opt-in"
          value="yes"
          disabled={sending}
        />
        <span>Email me about future offers, updates, and events.</span>
      </label>
      <button type="submit" className="btn btn--primary" disabled={sending}>
        {sending ? "Sending…" : "Send message"}
      </button>
      <p className="contact-form__note">
        Your message is delivered by email. We never share your details without
        permission.
      </p>
    </form>
  );
}
