import { Link } from "react-router-dom";

export function AboutTeaser() {
  return (
    <div className="about-teaser">
      <div className="about-teaser__text">
        <h2 className="about-teaser__title">About Aaron</h2>
        <p>
          As a leader in the breathwork community, Aaron has developed his own
          unique style and approach. His intimate relationship with the breath
          has led him to a deep understanding of its healing powers—with a
          specialty in{" "}
          <strong>rebirthing breathwork</strong>, grounded in the teachings of
          Leonard Orr.
        </p>
        <Link className="btn btn--ghost" to="/about">
          Read more
        </Link>
      </div>
    </div>
  );
}
