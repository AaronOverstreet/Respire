import { ContactForm } from "../components/blocks/ContactForm";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { CALENDLY } from "../data/services";

export function ContactPage() {
  return (
    <>
      <Section>
        <Container>
          <h1 className="page-title">Contact</h1>
          <p className="prose" style={{ maxWidth: "52rem" }}>
            Reach out for questions, scheduling, or a conversation about what
            might serve you best. You can also book directly through Calendly.
          </p>
          <p className="contact-page__actions">
            <a className="btn btn--primary" href={CALENDLY}>
              Book with Calendly
            </a>
          </p>
        </Container>
      </Section>
      <Section tone="soft">
        <Container>
          <ContactForm />
        </Container>
      </Section>
    </>
  );
}
