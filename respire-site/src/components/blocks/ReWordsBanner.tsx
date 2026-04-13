import { useEffect, useMemo, useState, type CSSProperties } from "react";

/** Full words for accessibility + static fallback; suffix is the part after "Re". */
const ENTRIES = [
  { full: "Resolve", suffix: "solve" },
  { full: "Repair", suffix: "pair" },
  { full: "Restore", suffix: "store" },
  { full: "Reclaim", suffix: "claim" },
  { full: "Rebirth", suffix: "birth" },
  { full: "Renew", suffix: "new" },
  { full: "Revive", suffix: "vive" },
  { full: "Rebuild", suffix: "build" },
] as const;

const INTERVAL_MS = 3850;
const FADE_MS = 3400;
const INITIAL_ADVANCE_MS = 1000;

type ExitTo = "left" | "right";

type AnimState = {
  current: number;
  exiting: number | null;
  /** After a transition, flipped for the *next* exit; infer this transition’s exit side from it. */
  exitTo: ExitTo;
};

function suffixMotionClass(i: number, anim: AnimState): string {
  const { current, exiting, exitTo } = anim;
  /** Direction the outgoing word is sliding toward (opposite of the next scheduled exitTo). */
  const exitingToward: ExitTo | null =
    exiting === null ? null : exitTo === "left" ? "right" : "left";

  if (i === exiting && exitingToward === "left") return "is-exit-left";
  if (i === exiting && exitingToward === "right") return "is-exit-right";
  if (i === current && exiting !== null && exitingToward !== null) {
    const enterFrom: ExitTo = exitingToward === "left" ? "right" : "left";
    return enterFrom === "left" ? "is-enter-from-left" : "is-enter-from-right";
  }
  if (i === current && exiting === null) return "is-settled";
  return "is-idle";
}

export function ReWordsBanner() {
  const [anim, setAnim] = useState<AnimState>({
    current: 0,
    exiting: null,
    exitTo: "left",
  });
  const [reduceMotion, setReduceMotion] = useState(false);

  const fullList = useMemo(() => ENTRIES.map((e) => e.full), []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const advance = () => {
      setAnim((prev) => ({
        exiting: prev.current,
        current: (prev.current + 1) % ENTRIES.length,
        exitTo: prev.exitTo === "left" ? "right" : "left",
      }));
    };
    let intervalId: ReturnType<typeof window.setInterval> | undefined;
    const firstId = window.setTimeout(() => {
      advance();
      intervalId = window.setInterval(advance, INTERVAL_MS);
    }, INITIAL_ADVANCE_MS);
    return () => {
      window.clearTimeout(firstId);
      if (intervalId !== undefined) window.clearInterval(intervalId);
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (anim.exiting === null) return;
    const id = window.setTimeout(() => {
      setAnim((a) => ({ ...a, exiting: null }));
    }, FADE_MS);
    return () => window.clearTimeout(id);
  }, [anim.exiting]);

  if (reduceMotion) {
    return (
      <div className="re-words re-words--static" aria-label="Themes related to respire">
        <span className="re-words__label">Themes:</span> {fullList.join(" · ")}
      </div>
    );
  }

  return (
    <div className="re-words">
      <p className="re-words__line">
        <span className="sr-only" aria-live="polite">
          Current theme: {ENTRIES[anim.current].full}
        </span>
        <span className="re-words__surface" aria-hidden>
          <span className="re-words__prefix">Re</span>
          <span
            className="re-words__suffix-track"
            style={
              {
                "--re-words-fade-ms": `${FADE_MS}ms`,
              } as CSSProperties
            }
          >
            {ENTRIES.map((e, i) => (
              <span key={e.full} className={`re-words__suffix ${suffixMotionClass(i, anim)}`}>
                {e.suffix}
              </span>
            ))}
          </span>
        </span>
      </p>
    </div>
  );
}
