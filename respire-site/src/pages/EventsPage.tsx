import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { EVENTS } from "../data/events";

export function EventsPage() {
  return (
    <>
      <Section tone="warm">
        <Container>
          <h1 className="page-title">Events</h1>
          <p className="prose" style={{ maxWidth: "52rem" }}>
            Upcoming group breaths, trainings, and features. Dates and details
            are updated as new offerings are added—subscribe to the newsletter on
            the home page for announcements.
          </p>
        </Container>
      </Section>
      <Section tone="cool">
        <Container>
          <ul className="events-list">
            {EVENTS.map((ev) => (
              <li key={ev.id} className="surface-card events-list__card">
                <h2 className="events-list__title">{ev.title}</h2>
                <p className="events-list__desc">{ev.description}</p>
                {ev.href && (
                  <div className="events-list__actions">
                    <a
                      className="btn btn--primary btn--external"
                      href={ev.href}
                      {...(ev.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {ev.ctaLabel ??
                        (ev.external ? "Open link" : "Learn more")}
                    </a>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
