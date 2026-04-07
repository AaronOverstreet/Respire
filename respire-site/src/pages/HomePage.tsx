import { Link } from "react-router-dom";
import { AboutTeaser } from "../components/blocks/AboutTeaser";
import { BookingStrip } from "../components/blocks/BookingStrip";
import { DictionaryDefinition } from "../components/blocks/DictionaryDefinition";
import { Hero } from "../components/blocks/Hero";
import { NewsletterSignup } from "../components/blocks/NewsletterSignup";
import { QuoteBlock } from "../components/blocks/QuoteBlock";
import { RebirthingExplainer } from "../components/blocks/RebirthingExplainer";
import { TaglineStrip } from "../components/blocks/TaglineStrip";
import { TestimonialCard } from "../components/blocks/TestimonialCard";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import {
  LEONARD_HOME_ATTR,
  LEONARD_HOME_QUOTE,
  TESTIMONIALS,
} from "../data/testimonials";

const previewIds = ["jenna-eckert", "malcolm-smith", "constantine-waes"];

export function HomePage() {
  const previews = TESTIMONIALS.filter((t) => previewIds.includes(t.id));
  return (
    <>
      <Hero />
      <Section>
        <Container>
          <TaglineStrip />
        </Container>
      </Section>
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
      <Section>
        <Container>
          <QuoteBlock quote={LEONARD_HOME_QUOTE} attribution={LEONARD_HOME_ATTR} />
        </Container>
      </Section>
      <Section tone="soft">
        <Container>
          <h2 className="home-preview__title">What clients say</h2>
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
      <Section tone="warm">
        <Container>
          <NewsletterSignup />
        </Container>
      </Section>
    </>
  );
}
