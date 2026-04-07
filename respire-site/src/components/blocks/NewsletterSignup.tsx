import { useState } from "react";
import type { FormEvent } from "react";

const PLACEHOLDER =
  "Connect your newsletter provider (Mailchimp, ConvertKit, etc.) to this form.";

export function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="newsletter surface-card">
      <h2 className="newsletter__title">Subscribe to the newsletter</h2>
      <p className="newsletter__hint">{PLACEHOLDER}</p>
      <form className="newsletter__form" onSubmit={handleSubmit}>
        <label className="newsletter__field">
          <span className="sr-only">Name</span>
          <input name="name" type="text" placeholder="Name" autoComplete="name" />
        </label>
        <label className="newsletter__field">
          <span className="sr-only">Email</span>
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            autoComplete="email"
          />
        </label>
        <button type="submit" className="btn btn--primary">
          Subscribe
        </button>
      </form>
      {submitted && (
        <p className="newsletter__thanks" role="status">
          Thanks—your provider integration will handle the next step.
        </p>
      )}
    </div>
  );
}
