import { NewsletterSignup } from "../components/blocks/NewsletterSignup";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { eventsChronological, type EventItem } from "../data/events";

const ACCENT_CLASS: Record<NonNullable<EventItem["accent"]>, string> = {
  sun: "events-list__card--sun",
  sea: "events-list__card--sea",
  coral: "events-list__card--coral",
  bloom: "events-list__card--bloom",
};

export function EventsPage() {
  const ordered = eventsChronological();

  return (
    <>
      <Section tone="cool" className="section--events-page">
        <Container>
          <header className="events-page__masthead" aria-labelledby="events-page-heading">
            <div className="events-page__masthead-deco" aria-hidden />
            <p className="events-page__eyebrow">Up next</p>
            <h1 id="events-page-heading" className="events-page__title">
              Events
            </h1>
            <p className="events-page__lede">
              Sound baths, trainings, and community breathwork—tap a title or
              flyer for details and links.
            </p>
          </header>

          <ul className="events-list">
            {ordered.map((ev) => {
              const accent =
                ev.accent && ACCENT_CLASS[ev.accent]
                  ? ACCENT_CLASS[ev.accent]
                  : "";
              const linkProps = ev.external
                ? { target: "_blank" as const, rel: "noopener noreferrer" as const }
                : {};
              return (
                <li
                  key={ev.id}
                  className={`surface-card events-list__card ${accent}`.trim()}
                >
                  <div
                    className={`events-list__row${ev.imageSrc ? "" : " events-list__row--text-only"}`}
                  >
                    {ev.imageSrc ? (
                      <figure className="events-list__thumb">
                        <a
                          className="events-list__thumb-link"
                          href={ev.href}
                          {...linkProps}
                        >
                          <img
                            src={ev.imageSrc}
                            alt={ev.imageAlt ?? ""}
                            width={440}
                            height={330}
                            loading="lazy"
                          />
                        </a>
                      </figure>
                    ) : null}
                    <div className="events-list__body">
                      <h2 className="events-list__title">
                        <a
                          className="events-list__title-link"
                          href={ev.href}
                          {...linkProps}
                        >
                          {ev.headline}
                        </a>
                      </h2>
                      <p className="events-list__desc">{ev.description}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>
      <Section tone="warm">
        <Container>
          <NewsletterSignup />
        </Container>
      </Section>
    </>
  );
}
