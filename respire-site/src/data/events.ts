export type EventItem = {
  id: string;
  /** ISO date used for display order (not always strict chronology for open-ended listings) */
  sortKey: string;
  /** Pinned events are listed ahead of the chronological run */
  pinned?: boolean;
  headline: string;
  description: string | string[];
  href: string;
  external?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  accent?: "sun" | "sea" | "coral" | "bloom";
};

export const EVENTS: EventItem[] = [
  {
    id: "nov-1-group-breathe",
    sortKey: "2026-11-01",
    headline: "Online Rebirthing Breathwork Journey",
    description:
      "Sunday, Nov 1st — 10:00 a.m.–12:30 p.m. PST via Zoom. Sliding scale donation $2–$22. Include your email with payment when you register. Rebirthing breathwork is a gentle, conscious connected breathing method that helps dislodge tension and old trauma patterns.",
    href: "https://buy.stripe.com/eVqbJ2aRff1T2WF95e6kg00",
    external: true,
    imageSrc: "/images/online-rebirthing-breathwork-journey-nov-1.png",
    imageAlt: "November 1st online rebirthing breathwork journey flyer",
    accent: "bloom",
  },
  {
    id: "rbi-one-year",
    sortKey: "2026-12-31",
    headline: "One-year seminar (RBI)",
    description:
      "A monthly rhythm of community, connection, and deepening in the work—third Sunday of every month. Follow the link for curriculum and how to get involved.",
    href: "https://elviorr.wixsite.com/rebirthingbreathwork/one-year-seminar",
    external: true,
    imageSrc: "/images/One_Year_Seminar.jpeg",
    imageAlt: "One Year Seminar with Rebirthing Breathwork International",
    accent: "coral",
  },
];

export function eventsChronological(): EventItem[] {
  return [...EVENTS].sort((a, b) => {
    if (Boolean(a.pinned) !== Boolean(b.pinned)) return a.pinned ? -1 : 1;
    return a.sortKey.localeCompare(b.sortKey);
  });
}
