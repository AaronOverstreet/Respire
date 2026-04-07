import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";

export function DisclaimerPage() {
  return (
    <Section>
      <Container>
        <h1 className="page-title">Disclaimer</h1>
        <div className="prose legal-page">
          <p>
            This page is a placeholder for your disclaimer. Replace with the
            text from your current website or legal advisor. Breathwork and
            related services are not a substitute for medical or mental health
            treatment; your disclaimer should clarify scope of practice and
            limitations.
          </p>
        </div>
      </Container>
    </Section>
  );
}
