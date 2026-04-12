import { ContactForm } from "../components/blocks/ContactForm";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { CALENDLY, PHONE_HREF } from "../constants/site";

export function ContactPage() {
  return (
    <Section tone="cool" className="section--contact-page">
      <Container>
        <div className="contact-page__sheet">
          <header className="contact-page__masthead" aria-labelledby="contact-heading">
            <div className="contact-page__masthead-deco" aria-hidden />
            <p className="contact-page__eyebrow">Get in touch</p>
            <h1 id="contact-heading" className="contact-page__title">
              Contact
            </h1>
            <p className="contact-page__lede">
              Reach out for questions, scheduling, or a conversation about what
              might serve you best. Call or book online—whichever is easier.
            </p>
            <div className="contact-page__cta-row">
              <a className="btn btn--ghost" href={PHONE_HREF}>
                Call Aaron
              </a>
              <a className="btn btn--primary" href={CALENDLY}>
                Book with Calendly
              </a>
            </div>
          </header>

          <div className="contact-page__lower">
            <p className="contact-page__email-lede">
              If you&rsquo;d like to send an email, use the form below.
            </p>
            <ContactForm embedded />
          </div>
        </div>
      </Container>
    </Section>
  );
}
