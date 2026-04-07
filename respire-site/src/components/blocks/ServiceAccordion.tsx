import { useId, useState } from "react";
import type { ReactNode } from "react";

export type ServiceItem = {
  id: string;
  title: string;
  summary: string;
  body: ReactNode;
  /** Highlights this row as the core / signature offering (e.g. rebirthing). */
  featured?: boolean;
};

export function ServiceAccordion({ items }: { items: ServiceItem[] }) {
  const baseId = useId();
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="service-accordion">
      {items.map((item) => {
        const isOpen = open === item.id;
        const panelId = `${baseId}-${item.id}-panel`;
        const headerId = `${baseId}-${item.id}-header`;
        return (
          <div
            key={item.id}
            className={
              item.featured
                ? "service-accordion__item service-accordion__item--featured surface-card"
                : "service-accordion__item surface-card"
            }
          >
            <button
              type="button"
              id={headerId}
              className={
                item.featured
                  ? "service-accordion__trigger service-accordion__trigger--featured"
                  : "service-accordion__trigger"
              }
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : item.id)}
            >
              <span className="service-accordion__trigger-label">
                {item.featured ? (
                  <span className="service-accordion__badge">
                    <span aria-hidden>★</span> Signature offering
                  </span>
                ) : null}
                <span className="service-accordion__title-text">{item.title}</span>
              </span>
              <span className="service-accordion__icon" aria-hidden>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              hidden={!isOpen}
              className="service-accordion__panel"
            >
              <p className="service-accordion__summary">{item.summary}</p>
              <div className="service-accordion__body prose">{item.body}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
