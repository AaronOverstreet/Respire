import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { EVENTS } from "../data/events";

export function EventsPage() {
  return (
    <>
      <Section>
        <Container>
          <h1 className="page-title">Events</h1>
          <p className="prose" style={{ maxWidth: "52rem" }}>
            Upcoming group breaths, trainings, and features. Dates and details
            are updated as new offerings are added—subscribe to the newsletter on
            the home page for announcements.
          </p>
        </Container>
      </Section>
      <Section tone="soft">
        <Container>
          <ul className="events-list">
            {EVENTS.map((ev) => (
              <li key={ev.id} className="service-accordion__item surface-card">
                <h2 className="events-list__title">{ev.title}</h2>
                <p>{ev.description}</p>
                {ev.href && (
                  <p>
                    <a
                      href={ev.href}
                      {...(ev.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {ev.external ? "Opens external site" : "Learn more"}
                    </a>
                  </p>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
