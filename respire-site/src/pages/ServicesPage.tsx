import { ServiceAccordion } from "../components/blocks/ServiceAccordion";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { CALENDLY } from "../constants/site";
import { SERVICE_SECTIONS } from "../data/services";

export function ServicesPage() {
  const items = SERVICE_SECTIONS.map((s) => ({
    id: s.id,
    title: s.title,
    summary: s.summary,
    body: s.body,
    featured: s.id === "rebirthing",
  }));

  return (
    <Section tone="cool" className="section--services-page">
      <Container>
        <header className="services-page__masthead" aria-labelledby="services-page-heading">
          <div className="services-page__masthead-deco" aria-hidden />
          <p className="services-page__eyebrow">Sessions & support</p>
          <h1 id="services-page-heading" className="services-page__title">
            Services
          </h1>
          <p className="services-page__lede">
            Aaron offers sessions in-person in the Portland, Oregon area and
            worldwide via Zoom. For a free 15 minute meet and greet or to
            schedule, use Calendly or <a href="/contact">contact Aaron</a>{" "}
            directly.
          </p>
          <p className="services__book-row">
            <a className="btn btn--primary" href={CALENDLY} id="book">
              Book with Calendly
            </a>
            <a className="btn btn--ghost" href={`${CALENDLY}#consult`} id="consult">
              15 minute consult
            </a>
          </p>
        </header>

        <div className="services-page__accordion-wrap">
          <ServiceAccordion items={items} />
        </div>
      </Container>
    </Section>
  );
}
