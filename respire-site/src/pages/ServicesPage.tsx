import { ServiceAccordion } from "../components/blocks/ServiceAccordion";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { CALENDLY, SERVICE_SECTIONS } from "../data/services";

export function ServicesPage() {
  const items = SERVICE_SECTIONS.map((s) => ({
    id: s.id,
    title: s.title,
    summary: s.summary,
    body: s.body,
  }));

  return (
    <>
      <Section tone="warm">
        <Container>
          <h1 className="page-title">Services</h1>
          <p className="prose" style={{ maxWidth: "52rem" }}>
            Explore each offering below. Aaron offers sessions in person in the
            Portland area and worldwide via Zoom. For a free 15-minute
            meet-and-greet or to schedule, use Calendly or{" "}
            <a href="/contact">contact Aaron</a> directly.
          </p>
          <p className="services__book-row">
            <a className="btn btn--primary" href={CALENDLY} id="book">
              Book with Calendly
            </a>
            <a className="btn btn--ghost" href={`${CALENDLY}#consult`} id="consult">
              15-minute consult
            </a>
          </p>
        </Container>
      </Section>
      <Section tone="cool">
        <Container>
          <ServiceAccordion items={items} />
        </Container>
      </Section>
      <Section tone="sunset">
        <Container>
          <div className="surface-card services-location">
            <h2 className="services-location__title">Location &amp; modalities</h2>
            <p>
              Currently offering both Zoom and in-person sessions. Aaron&apos;s
              home office is in SW Portland near the Terwilliger and Taylors Ferry
              intersection. House calls are also an option in the Portland area.
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+15032906496">+1 (503) 290-6496</a>
            </p>
            <p>
              Use the <a href="/contact">contact form</a> for questions and
              scheduling support.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
