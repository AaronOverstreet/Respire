import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";

export function DisclaimerPage() {
  return (
    <Section>
      <Container>
        <h1 className="page-title">Disclaimer</h1>
        <div className="prose legal-page">
          <p>
            Rebirthing Breathwork is a natural method of energy balancing, but
            is not meant as a substitute for medical, or psychological,
            diagnosis and treatment.
          </p>
          <p>
            Breathwork practitioners do not diagnose conditions, nor do they
            perform medical treatment, prescribe substances, or interfere with
            the treatment of a licensed medical professional.
          </p>
          <p>
            Breathwork or any other natural healing therapy should not compete
            with medical doctors and their treatments.
          </p>
          <p>
            All therapies are meant to complement medical treatments.
          </p>
          <p>
            In no event can Aaron Overstreet be liable in any way directly or
            indirectly for damages resulting from Breathwork.
          </p>
          <p>
            NEVER DISREGARD PROFESSIONAL MEDICAL ADVICE OR DELAY SEEKING
            MEDICAL TREATMENT BECAUSE OF SOMETHING YOU HAVE READ ON OR ACCESSED
            THROUGH THIS WEB SITE.
          </p>
        </div>
      </Container>
    </Section>
  );
}
