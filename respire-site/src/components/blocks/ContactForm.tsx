import { useState } from "react";
import type { FormEvent } from "react";

export function ContactForm({ embedded = false }: { embedded?: boolean }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(String(data.get("subject") || "Message from website"));
    const body = encodeURIComponent(
      `Name: ${data.get("your-name")}\nEmail: ${data.get("your-email")}\n\n${data.get("your-message")}`,
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const formClass = [
    "contact-form",
    embedded ? "contact-form--embedded" : "surface-card",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <form className={formClass} onSubmit={handleSubmit}>
      <label className="contact-form__field">
        Your name (required)
        <input name="your-name" required autoComplete="name" />
      </label>
      <label className="contact-form__field">
        Your email (required)
        <input name="your-email" type="email" required autoComplete="email" />
      </label>
      <label className="contact-form__field">
        Subject
        <input name="subject" type="text" />
      </label>
      <label className="contact-form__field">
        Your message
        <textarea name="your-message" rows={6} maxLength={2000} />
      </label>
      <button type="submit" className="btn btn--primary">
        Send via email
      </button>
      <p className="contact-form__note">
        This opens your email app with a pre-filled message. Replace with
        Formspree, Netlify Forms, or another backend when ready.
      </p>
      {sent && (
        <p className="contact-form__sent" role="status">
          If your mail client did not open, check your browser settings.
        </p>
      )}
    </form>
  );
}
