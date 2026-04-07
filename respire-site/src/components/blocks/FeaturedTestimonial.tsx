import type { Testimonial } from "../../data/testimonials";

export function FeaturedTestimonial({ t }: { t: Testimonial }) {
  const paragraphs = t.quote.split("\n\n").filter(Boolean);
  return (
    <div className="featured-testimonial">
      <div className="featured-testimonial__inner surface-card">
        {t.imageSrc && (
          <img
            className="featured-testimonial__img"
            src={t.imageSrc}
            alt={`Portrait of ${t.name}`}
            width={160}
            height={160}
            loading="eager"
            decoding="async"
          />
        )}
        <div>
          <p className="sr-only">Featured testimonial</p>
          <blockquote className="featured-testimonial__quote">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </blockquote>
          <p className="featured-testimonial__name">
            {t.name}
            {t.role ? (
              <span className="featured-testimonial__role"> — {t.role}</span>
            ) : null}
          </p>
        </div>
      </div>
    </div>
  );
}
