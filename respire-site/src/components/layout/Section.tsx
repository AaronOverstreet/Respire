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
  tone?: "default" | "soft";
}) {
  const toneClass =
    tone === "soft" ? "section section--soft" : "section";
  return (
    <section id={id} className={`${toneClass} ${className}`.trim()}>
      {children}
    </section>
  );
}
