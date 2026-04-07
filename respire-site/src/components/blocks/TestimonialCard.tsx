import type { Testimonial } from "../../data/testimonials";

export function TestimonialCard({
  t,
  variant = "default",
}: {
  t: Testimonial;
  variant?: "default" | "wide";
}) {
  const paragraphs = t.quote.split("\n\n").filter(Boolean);
  const isWide = variant === "wide";

  return (
    <article
      className={`testimonial-card surface-card${isWide ? " testimonial-card--wide" : ""}`}
    >
      {isWide ? (
        <div className="testimonial-card__wide-inner">
          {t.imageSrc ? (
            <img
              className="testimonial-card__img testimonial-card__img--wide"
              src={t.imageSrc}
              alt={`Portrait of ${t.name}`}
              width={160}
              height={160}
              loading="lazy"
              decoding="async"
            />
          ) : null}
          <div className="testimonial-card__wide-body">
            <blockquote className="testimonial-card__quote testimonial-card__quote--wide">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </blockquote>
            <p className="testimonial-card__name testimonial-card__name--wide">
              {t.name}
              {t.role ? (
                <span className="testimonial-card__role"> — {t.role}</span>
              ) : null}
            </p>
          </div>
        </div>
      ) : (
        <>
          {t.imageSrc ? (
            <img
              className="testimonial-card__img"
              src={t.imageSrc}
              alt={`Portrait of ${t.name}`}
              width={120}
              height={120}
              loading="lazy"
              decoding="async"
            />
          ) : null}
          <blockquote className="testimonial-card__quote">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </blockquote>
          <p className="testimonial-card__name">
            {t.name}
            {t.role ? (
              <span className="testimonial-card__role"> — {t.role}</span>
            ) : null}
          </p>
        </>
      )}
    </article>
  );
}
