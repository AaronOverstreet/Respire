/** Decorative flower-of-life motif (simplified) for brand continuity */
export function FlowerOfLifeLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="100" cy="100" r="28" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <circle cx="100" cy="72" r="28" stroke="currentColor" strokeWidth="1.2" opacity="0.45" />
      <circle cx="100" cy="128" r="28" stroke="currentColor" strokeWidth="1.2" opacity="0.45" />
      <circle cx="76" cy="86" r="28" stroke="currentColor" strokeWidth="1.2" opacity="0.45" />
      <circle cx="124" cy="86" r="28" stroke="currentColor" strokeWidth="1.2" opacity="0.45" />
      <circle cx="76" cy="114" r="28" stroke="currentColor" strokeWidth="1.2" opacity="0.45" />
      <circle cx="124" cy="114" r="28" stroke="currentColor" strokeWidth="1.2" opacity="0.45" />
      <circle cx="100" cy="100" r="58" stroke="currentColor" strokeWidth="0.9" opacity="0.25" />
      <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="0.7" opacity="0.18" />
    </svg>
  );
}
