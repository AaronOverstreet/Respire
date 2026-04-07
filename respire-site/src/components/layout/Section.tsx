import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "soft" | "warm" | "cool" | "sunset";
}) {
  const toneClass =
    tone === "default"
      ? "section"
      : `section section--${tone}`;
  return (
    <section id={id} className={`${toneClass} ${className}`.trim()}>
      {children}
    </section>
  );
}
