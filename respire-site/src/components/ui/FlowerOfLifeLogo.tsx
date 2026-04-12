import { useId } from "react";

type FolVariant = "brand" | "hero" | "header";

const PALETTE = {
  default: {
    sunset: ["#ff7f50", "#ffc107", "#6ec6ff"] as const,
    warm: ["#ffd54f", "#ff7518", "#ffcba4"] as const,
    ocean: ["#1ca3ec", "#6495ed", "#87ceeb"] as const,
    peach: ["#6ec6ff", "#ff7f50"] as const,
  },
  /** More saturated + lighter mid-tones so the nav mark reads vivid on frosted chrome */
  vivid: {
    sunset: ["#ff5a3c", "#ffd54a", "#40c4ff"] as const,
    warm: ["#ffeb3b", "#ff6d00", "#ffc4a8"] as const,
    ocean: ["#00a8ff", "#5c9dff", "#7fdbff"] as const,
    peach: ["#4fc3f7", "#ff5722"] as const,
  },
} as const;

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
  const brandBoost = variant === "brand" ? 1.22 : 1;
  const headerBoost = variant === "header" ? 1.24 : 1;
  /** Nav mark: thick strokes for clarity at small size */
  const headerLineBoost = variant === "header" ? 2.25 : 1;
  const sw = (n: number) => n * heroBoost * brandBoost * headerBoost * headerLineBoost;

  const o =
    variant === "hero"
      ? {
          a: 0.34,
          b: 0.3,
          c: 0.28,
          mid: 0.2,
          outer: 0.16,
        }
      : variant === "header"
        ? {
            a: 1,
            b: 1,
            c: 1,
            mid: 0.98,
            outer: 0.9,
          }
        : {
            a: 0.95,
            b: 0.9,
            c: 0.88,
            mid: 0.68,
            outer: 0.55,
          };

  const colors = variant === "header" ? PALETTE.vivid : PALETTE.default;

  const modClass =
    variant === "hero"
      ? "flower-of-life--hero"
      : variant === "header"
        ? "flower-of-life--header"
        : "";

  return (
    <svg
      className={`flower-of-life ${modClass} ${className}`.trim()}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={gSunset} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.sunset[0]} />
          <stop offset="45%" stopColor={colors.sunset[1]} />
          <stop offset="100%" stopColor={colors.sunset[2]} />
        </linearGradient>
        <linearGradient id={gWarm} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={colors.warm[0]} />
          <stop offset="50%" stopColor={colors.warm[1]} />
          <stop offset="100%" stopColor={colors.warm[2]} />
        </linearGradient>
        <linearGradient id={gOcean} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={colors.ocean[0]} />
          <stop offset="55%" stopColor={colors.ocean[1]} />
          <stop offset="100%" stopColor={colors.ocean[2]} />
        </linearGradient>
        <linearGradient id={gPeach} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor={colors.peach[0]} />
          <stop offset="100%" stopColor={colors.peach[1]} />
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
