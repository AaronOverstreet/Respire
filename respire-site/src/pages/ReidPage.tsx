import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";

const experience = [
  {
    period: "2025 — present",
    role: "Founder & Integration Consultant",
    organisation: "Idunn",
    detail:
      "Building an AI-first compliance and operations platform that links grower field data with packing-house traceability across 2,000+ acres.",
  },
  {
    period: "2025 — 2026",
    role: "Digital Marketing Consultant",
    organisation: "Independent",
    detail:
      "Created AI chatbots, automations and websites for hospitality, retail and service businesses—helping clients grow bookings and reduce admin work.",
  },
  {
    period: "2019 — 2026",
    role: "Orchard Manager",
    organisation: "Dog River Ranch",
    detail:
      "Coordinated a 100+ person harvest crew across a fifth-generation 1,500-acre apple and pear operation, improving packout and managing key relationships.",
  },
  {
    period: "Summer 2024",
    role: "Credit Underwriting Analyst",
    organisation: "AgWest Farm Credit",
    detail:
      "Analysed repayment capacity for agricultural borrowers with $10M–$50M credit exposures and supported portfolio-risk reporting.",
  },
];

const capabilities = [
  "AI & automation",
  "Product strategy",
  "UX/UI design",
  "PostgreSQL & SQL",
  "Financial modelling",
  "Stakeholder management",
];

export function ReidPage() {
  return (
    <Section className="section--reid" tone="cool">
      <Container>
        <article className="reid-page">
          <header className="reid-hero">
            <div className="reid-hero__content">
              <p className="reid-hero__eyebrow">Meet Reid</p>
              <h1>Building useful systems for real-world work.</h1>
              <p className="reid-hero__lede">
                Reid Blaine is a founder and integration consultant with a
                background in financial economics, agriculture and AI-enabled
                product development.
              </p>
              <div className="reid-hero__actions">
                <a
                  className="btn btn--fill-ocean reid-hero__cv"
                  href="/documents/reid-blaine-cv-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View CV
                </a>
                <a
                  className="reid-hero__linkedin"
                  href="https://www.linkedin.com/in/reidblaine"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn <span aria-hidden>↗</span>
                </a>
              </div>
            </div>

            <figure className="reid-hero__portrait-wrap">
              <div className="reid-hero__portrait-frame">
                <img
                  src="/images/reid-blaine.jpeg"
                  alt="Portrait of Reid Blaine"
                  className="reid-hero__portrait"
                  width={800}
                  height={800}
                  loading="eager"
                  decoding="async"
                />
              </div>
              <figcaption>London, United Kingdom</figcaption>
            </figure>
          </header>

          <section className="reid-introduction" aria-labelledby="reid-approach">
            <p className="reid-introduction__label">The through-line</p>
            <div>
              <h2 id="reid-approach">From the orchard to the interface.</h2>
              <p>
                Reid works where people, operations and technology meet. His
                experience ranges from managing a large-scale family orchard to
                analysing agricultural credit and building software that removes
                friction from complex, compliance-heavy work.
              </p>
              <p>
                Today, he brings that practical perspective to AI, automation and
                product design—turning everyday expertise into tools that make
                work clearer, faster and more connected.
              </p>
            </div>
          </section>

          <section className="reid-experience" aria-labelledby="reid-experience">
            <div className="reid-section-heading">
              <p>Selected experience</p>
              <h2 id="reid-experience">A record of building and improving.</h2>
            </div>
            <ol className="reid-timeline">
              {experience.map((item) => (
                <li key={`${item.role}-${item.organisation}`}>
                  <p className="reid-timeline__period">{item.period}</p>
                  <div className="reid-timeline__body">
                    <h3>{item.role}</h3>
                    <p className="reid-timeline__organisation">
                      {item.organisation}
                    </p>
                    <p>{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="reid-details">
            <div className="reid-education" aria-labelledby="reid-education">
              <p className="reid-details__label">Education</p>
              <h2 id="reid-education">Economics with a local lens.</h2>
              <div className="reid-education__entry">
                <p>2026 — 2027</p>
                <h3>London School of Economics and Political Science</h3>
                <p>MSc Local Economic Development · Graduating 2027</p>
              </div>
              <div className="reid-education__entry">
                <p>2021 — 2025</p>
                <h3>University of St Andrews</h3>
                <p>MA (Hons) Financial Economics · High 2:1</p>
              </div>
            </div>

            <div className="reid-capabilities" aria-labelledby="reid-capabilities">
              <p className="reid-details__label">Capabilities</p>
              <h2 id="reid-capabilities">Comfortable across the whole picture.</h2>
              <ul>
                {capabilities.map((capability) => (
                  <li key={capability}>{capability}</li>
                ))}
              </ul>
              <p className="reid-capabilities__note">
                Also: Bloomberg ESG, FINRA SIE, Spanish (professional working)
                and PADI Advanced Open Water certification.
              </p>
            </div>
          </section>

          <footer className="reid-page__footer">
            <p>Interested in Reid&rsquo;s work?</p>
            <a href="mailto:reidgorham@gmail.com">reidgorham@gmail.com</a>
          </footer>
        </article>
      </Container>
    </Section>
  );
}
