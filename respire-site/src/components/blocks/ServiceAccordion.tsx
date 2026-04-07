import { useId, useState } from "react";
import type { ReactNode } from "react";

export type ServiceItem = {
  id: string;
  title: string;
  summary: string;
  body: ReactNode;
};

export function ServiceAccordion({ items }: { items: ServiceItem[] }) {
  const baseId = useId();
  const [open, setOpen] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="service-accordion">
      {items.map((item) => {
        const isOpen = open === item.id;
        const panelId = `${baseId}-${item.id}-panel`;
        const headerId = `${baseId}-${item.id}-header`;
        return (
          <div key={item.id} className="service-accordion__item surface-card">
            <button
              type="button"
              id={headerId}
              className="service-accordion__trigger"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : item.id)}
            >
              <span>{item.title}</span>
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
