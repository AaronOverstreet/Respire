import { FeaturedTestimonial } from "../components/blocks/FeaturedTestimonial";
import { TestimonialCard } from "../components/blocks/TestimonialCard";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { TESTIMONIALS } from "../data/testimonials";

export function TestimonialsPage() {
  const featured = TESTIMONIALS.find((t) => t.featured);
  const rest = TESTIMONIALS.filter((t) => !t.featured);
  const last = rest.length > 0 ? rest[rest.length - 1] : null;
  const others = rest.length > 1 ? rest.slice(0, -1) : [];

  return (
    <>
      <Section>
        <Container>
          <h1 className="page-title">Testimonials</h1>
          <p className="prose" style={{ maxWidth: "52rem" }}>
            Gratitude to everyone who has shared their experience. Leonard
            Orr&apos;s words are highlighted first.
          </p>
        </Container>
      </Section>
      {featured && (
        <Section tone="soft">
          <Container>
            <FeaturedTestimonial t={featured} />
          </Container>
        </Section>
      )}
      <Section>
        <Container>
          <div className="testimonials-grid">
            {others.map((t) => (
              <TestimonialCard key={t.id} t={t} />
            ))}
            {last ? (
              <TestimonialCard key={last.id} t={last} variant="wide" />
            ) : null}
          </div>
        </Container>
      </Section>
    </>
  );
}
