import { useEffect, useState } from "react";

const WORDS = [
  "Resolve",
  "Repair",
  "Restore",
  "Reclaim",
  "Rebirth",
  "Renew",
  "Revive",
  "Rebuild",
];

export function ReWordsBanner() {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <div className="re-words re-words--static" aria-label="Themes related to respire">
        <span className="re-words__label">Themes:</span> {WORDS.join(" · ")}
      </div>
    );
  }

  return (
    <div className="re-words" aria-live="polite">
      <span className="sr-only">Rotating themes: {WORDS.join(", ")}</span>
      <span className="re-words__track" aria-hidden>
        {WORDS.map((w, i) => (
          <span
            key={w}
            className={`re-words__word ${i === index ? "is-visible" : ""}`}
          >
            {w}
          </span>
        ))}
      </span>
    </div>
  );
}
