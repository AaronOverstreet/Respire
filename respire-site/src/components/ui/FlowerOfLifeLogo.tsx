import { useId } from "react";

type FolVariant = "brand" | "hero";

/** Flower-of-life motif with warm/cool gradient strokes (plan palette: coral, golden, ocean, serene) */
export function FlowerOfLifeLogo({
  className = "",
  variant = "brand",
}: {
  className?: string;
  variant?: FolVariant;
}) {
  const uid = useId().replace(/:/g, "");
  const gSunset = `fol-sunset-${uid}`;
  const gWarm = `fol-warm-${uid}`;
  const gOcean = `fol-ocean-${uid}`;
  const gPeach = `fol-peach-${uid}`;

  const strokeSunset = `url(#${gSunset})`;
  const strokeWarm = `url(#${gWarm})`;
  const strokeOcean = `url(#${gOcean})`;
  const strokePeach = `url(#${gPeach})`;

  const heroBoost = variant === "hero" ? 1.35 : 1;
  /** Nav bar mark: higher opacity + slightly thicker strokes so it reads clearly on light chrome */
  const brandBoost = variant === "brand" ? 1.22 : 1;
  const sw = (n: number) => n * heroBoost * brandBoost;

  const o =
    variant === "hero"
      ? {
          a: 0.55,
          b: 0.5,
          c: 0.48,
          mid: 0.35,
          outer: 0.28,
        }
      : {
          a: 0.95,
          b: 0.9,
          c: 0.88,
          mid: 0.68,
          outer: 0.55,
        };

  return (
    <svg
      className={`flower-of-life ${variant === "hero" ? "flower-of-life--hero" : ""} ${className}`.trim()}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={gSunset} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff7f50" />
          <stop offset="45%" stopColor="#ffc107" />
          <stop offset="100%" stopColor="#6ec6ff" />
        </linearGradient>
        <linearGradient id={gWarm} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffd54f" />
          <stop offset="50%" stopColor="#ff7518" />
          <stop offset="100%" stopColor="#ffcba4" />
        </linearGradient>
        <linearGradient id={gOcean} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1ca3ec" />
          <stop offset="55%" stopColor="#6495ed" />
          <stop offset="100%" stopColor="#87ceeb" />
        </linearGradient>
        <linearGradient id={gPeach} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#6ec6ff" />
          <stop offset="100%" stopColor="#ff7f50" />
        </linearGradient>
      </defs>
      <circle
        cx="100"
        cy="100"
        r="28"
        stroke={strokeSunset}
        strokeWidth={sw(1.2)}
        opacity={o.a}
      />
      <circle
        cx="100"
        cy="72"
        r="28"
        stroke={strokeWarm}
        strokeWidth={sw(1.2)}
        opacity={o.b}
      />
      <circle
        cx="100"
        cy="128"
        r="28"
        stroke={strokeOcean}
        strokeWidth={sw(1.2)}
        opacity={o.b}
      />
      <circle
        cx="76"
        cy="86"
        r="28"
        stroke={strokePeach}
        strokeWidth={sw(1.2)}
        opacity={o.c}
      />
      <circle
        cx="124"
        cy="86"
        r="28"
        stroke={strokeWarm}
        strokeWidth={sw(1.2)}
        opacity={o.c}
      />
      <circle
        cx="76"
        cy="114"
        r="28"
        stroke={strokeOcean}
        strokeWidth={sw(1.2)}
        opacity={o.c}
      />
      <circle
        cx="124"
        cy="114"
        r="28"
        stroke={strokeSunset}
        strokeWidth={sw(1.2)}
        opacity={o.c}
      />
      <circle
        cx="100"
        cy="100"
        r="58"
        stroke={strokeOcean}
        strokeWidth={sw(0.9)}
        opacity={o.mid}
      />
      <circle
        cx="100"
        cy="100"
        r="88"
        stroke={strokeWarm}
        strokeWidth={sw(0.7)}
        opacity={o.outer}
      />
    </svg>
  );
}
