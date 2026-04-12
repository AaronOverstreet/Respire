import { Link } from "react-router-dom";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";

export function AboutPage() {
  return (
    <>
      <Section tone="sunset" className="section--about">
        <Container>
          <article className="about-card">
            <header className="about-card__masthead">
              <h1 className="page-hub-title">About Aaron</h1>
            </header>

            <div className="about-card__split">
              <div className="about-card__media">
                <figure className="about-card__figure">
                  <div className="about-card__img-wrap">
                    <img
                      src="/images/Aaron_Beach.jpeg"
                      alt="Aaron Overstreet on the coast at sunset, arms crossed, smiling"
                      className="about-card__img"
                      width={802}
                      height={601}
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                  <figcaption className="about-card__photo-cap">
                    <span className="about-card__name">Aaron Overstreet</span>
                    <span className="about-card__role">
                      Respire Breathwork · Portland, Oregon
                    </span>
                  </figcaption>
                </figure>

                <div className="about-card__photo-card">
                  <div className="about-card__photo-card-frame">
                    <img
                      src="/images/Aaron_Meditating.jpeg"
                      alt="Aaron Overstreet seated in meditation outdoors, eyes closed, hands resting in his lap"
                      className="about-card__img about-card__img--meditation"
                      width={768}
                      height={1024}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>

              <div className="about-card__split-main">
                <section
                  className="about-card__block about-card__block--intro"
                  aria-labelledby="about-intro"
                >
                  <h2 id="about-intro" className="about-card__heading">
                    Introduction
                  </h2>
                  <p>
                    Aaron has been assisting people in self empowerment and
                    spiritual healing for over three decades. He believes that we
                    can attain ownership and mastery over our lives and experiences
                    while working in conjunction with our higher selves.
                  </p>
                  <p className="about-card__aside">
                    For a written interview, read{" "}
                    <a
                      href="https://www.mysticmag.com/psychic-reading/interview-aaron-overstreet/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      MysticMag&rsquo;s conversation with Aaron
                    </a>
                    .
                  </p>
                </section>

                <section
                  className="about-card__block about-card__block--in-split"
                  aria-labelledby="about-breathwork"
                >
                  <h2 id="about-breathwork" className="about-card__heading">
                    Breathwork &amp; lineage
                  </h2>
                  <p>
                    Respire Breathwork is based on the teachings of Leonard Orr. It
                    encompasses Aaron&apos;s deep understanding of the breath and his
                    work as a healer and spiritual guide. His ongoing dedication to
                    discovering the healing powers of the breath have led to this
                    gentle yet powerful style of breathwork—with a focus on{" "}
                    <strong>rebirthing breathwork</strong>.
                  </p>
                  <p>
                    Aaron studied directly with Leonard and has led trainings and
                    workshops in Portland, Oregon, Virginia, and India. He has also
                    co-facilitated the annual Breathwork training, &quot;Return To The
                    Sacred,&quot; in Sierraville, CA since 2003. Aaron is certified by{" "}
                    <a
                      href="https://rebirthingbreathwork.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Rebirthing Breathwork International
                    </a>
                    .
                  </p>
                </section>

                <section
                  className="about-card__block about-card__block--in-split"
                  aria-labelledby="about-sessions"
                >
                  <h2 id="about-sessions" className="about-card__heading">
                    Sessions &amp; groups
                  </h2>
                  <p>
                    Aaron finds this work to be most effective through{" "}
                    <Link to="/services">private one-on-one sessions</Link>. He also
                    enjoys facilitating group sessions at yoga studios, wellness
                    centers, and individual homes.
                  </p>
                </section>
              </div>
            </div>

            <section
              className="about-card__block"
              aria-labelledby="about-experience"
            >
              <h2 id="about-experience" className="about-card__heading">
                The Respire experience
              </h2>
              <p>
                As part of the Respire experience Aaron assists clients to
                identify and release limiting beliefs through the use of positive
                affirmations. He also specializes in spiritual purification
                practices through the sacred use of earth, air, water, and fire.
              </p>
              <p className="about-card__closing">
                Aaron welcomes you to experience him as your guide in this
                transformational process.
              </p>
            </section>
          </article>
        </Container>
      </Section>
    </>
  );
}
