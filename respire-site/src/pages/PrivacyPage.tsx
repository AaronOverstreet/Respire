import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";

export function PrivacyPage() {
  return (
    <Section>
      <Container>
        <h1 className="page-title">Privacy Policy</h1>
        <div className="prose legal-page">
          <p>
            This page is a placeholder for your privacy policy. Replace this
            text with the policy from your live site or legal counsel. It should
            describe what data you collect (e.g., contact form submissions,
            newsletter signups, analytics), how it is used, and how visitors can
            request changes or deletion.
          </p>
          <p>
            When you deploy, paste your full Privacy Policy here and update the
            last-reviewed date.
          </p>
        </div>
      </Container>
    </Section>
  );
}
