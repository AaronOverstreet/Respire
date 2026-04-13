import { useState } from "react";
import type { FormEvent } from "react";

type StatusTone = "idle" | "pending" | "success" | "error";

export function NewsletterSignup() {
  const [tone, setTone] = useState<StatusTone>("idle");
  const [statusText, setStatusText] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setSubmitting(true);
    setTone("pending");
    setStatusText("Subscribing…");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
        }),
      });

      const payload = (await res.json().catch(() => ({}))) as {
        error?: string;
        alreadySubscribed?: boolean;
      };

      if (!res.ok) {
        setTone("error");
        setStatusText(
          payload.error || "Something went wrong. Please try again.",
        );
        return;
      }

      setTone("success");
      setStatusText(
        payload.alreadySubscribed
          ? "You are already on the list—thanks for your interest."
          : "You are subscribed. Watch your inbox for updates.",
      );
      form.reset();
    } catch {
      setTone("error");
      setStatusText(
        "Could not reach the server. Check your connection or try again later.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  const toneAttr =
    tone === "idle"
      ? undefined
      : tone === "pending"
        ? "pending"
        : tone === "success"
          ? "success"
          : "error";

  return (
    <div className="newsletter surface-card">
      <h2 className="newsletter__title">Subscribe to the newsletter</h2>
      <p className="newsletter__hint">
        Occasional updates on sessions, events, and breathwork offerings.
      </p>
      <form className="newsletter__form" onSubmit={handleSubmit}>
        <label className="newsletter__field">
          <span className="sr-only">Name</span>
          <input
            name="name"
            type="text"
            placeholder="Name"
            autoComplete="name"
            disabled={submitting}
          />
        </label>
        <label className="newsletter__field">
          <span className="sr-only">Email</span>
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            autoComplete="email"
            disabled={submitting}
            aria-describedby="newsletter-status"
          />
        </label>
        <button type="submit" className="btn btn--primary" disabled={submitting}>
          {submitting ? "Subscribing…" : "Subscribe"}
        </button>
      </form>
      <p
        id="newsletter-status"
        className="newsletter__status"
        {...(toneAttr ? { "data-tone": toneAttr } : {})}
        role="status"
        aria-live="polite"
      >
        {tone === "idle" ? "" : statusText}
      </p>
    </div>
  );
}
