import { Link } from "react-router-dom";
import { AboutTeaser } from "../components/blocks/AboutTeaser";
import { BookingStrip } from "../components/blocks/BookingStrip";
import { DictionaryDefinition } from "../components/blocks/DictionaryDefinition";
import { FeaturedTestimonial } from "../components/blocks/FeaturedTestimonial";
import { Hero } from "../components/blocks/Hero";
import { NewsletterSignup } from "../components/blocks/NewsletterSignup";
import { RebirthingExplainer } from "../components/blocks/RebirthingExplainer";
import { TaglineStrip } from "../components/blocks/TaglineStrip";
import { TestimonialCard } from "../components/blocks/TestimonialCard";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { TESTIMONIALS } from "../data/testimonials";

const previewIds = ["jenna-eckert", "malcolm-smith", "constantine-waes"];

export function HomePage() {
  const featured = TESTIMONIALS.find((t) => t.featured);
  const previews = TESTIMONIALS.filter((t) => previewIds.includes(t.id));
  return (
    <>
      <Hero />
      <Section tone="warm">
        <Container>
          <DictionaryDefinition />
        </Container>
      </Section>
      <Section tone="cool">
        <Container>
          <AboutTeaser />
        </Container>
      </Section>
      <Section tone="sunset">
        <Container>
          <RebirthingExplainer />
        </Container>
      </Section>
      <Section>
        <Container>
          <BookingStrip />
        </Container>
      </Section>
      <Section tone="soft" className="section--home-clients">
        <Container>
          <TaglineStrip />
          <NewsletterSignup />
          <h2 className="home-preview__title">What clients say</h2>
          {featured ? (
            <div className="home-testimonials__featured">
              <FeaturedTestimonial t={featured} />
            </div>
          ) : null}
          <div className="home-preview__grid">
            {previews.map((t) => (
              <TestimonialCard key={t.id} t={t} />
            ))}
          </div>
          <p className="home-preview__more">
            <Link className="btn btn--ghost" to="/testimonials">
              More testimonials
            </Link>
          </p>
        </Container>
      </Section>
    </>
  );
}
