import type { Testimonial } from "../../data/testimonials";

export function TestimonialCard({ t }: { t: Testimonial }) {
  const paragraphs = t.quote.split("\n\n").filter(Boolean);
  return (
    <article className="testimonial-card surface-card">
      {t.imageSrc && (
        <img
          className="testimonial-card__img"
          src={t.imageSrc}
          alt={`Portrait of ${t.name}`}
          width={120}
          height={120}
          loading="lazy"
          decoding="async"
        />
      )}
      <blockquote className="testimonial-card__quote">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </blockquote>
      <p className="testimonial-card__name">
        {t.name}
        {t.role ? <span className="testimonial-card__role"> — {t.role}</span> : null}
      </p>
    </article>
  );
}
