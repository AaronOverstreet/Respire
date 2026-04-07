export function QuoteBlock({
  quote,
  attribution,
}: {
  quote: string;
  attribution: string;
}) {
  return (
    <figure className="quote-block">
      <blockquote className="quote-block__text">{quote}</blockquote>
      <figcaption className="quote-block__attr">{attribution}</figcaption>
    </figure>
  );
}
