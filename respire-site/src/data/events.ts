export type EventItem = {
  id: string;
  /** ISO date used for display order (not always strict chronology for open-ended listings) */
  sortKey: string;
  headline: string;
  description: string;
  href: string;
  external?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  accent?: "sun" | "sea" | "coral" | "bloom";
};

export const EVENTS: EventItem[] = [
  {
    id: "may-10-group-breathe",
    sortKey: "2026-05-10",
    headline: "May 10th — Group breathe",
    description:
      "A monthly offering. Breathe from the comfort of your own home.",
    href: "https://buy.stripe.com/eVqbJ2aRff1T2WF95e6kg00",
    external: true,
    imageSrc: "/images/F76737EC-D57C-429A-9CA5-C8D45BFB3E8F.png",
    imageAlt: "May 10th group breathe event flyer",
    accent: "bloom",
  },
  {
    id: "may-20-24-rbi-training",
    sortKey: "2026-05-20",
    headline: "May 20th–24th Rebirthing Breathwork International online training",
    description:
      "Five-day online rebirthing breathwork training. Follow the link for curriculum, logistics, and enrollment.",
    href: "https://elviorr.wixsite.com/rebirthingbreathwork",
    external: true,
    imageSrc: "/images/Online_Birthing_Training.png",
    imageAlt:
      "5-Day Online Rebirthing Breathwork Training, May 20th–24th, 2026",
    accent: "sea",
  },
  {
    id: "rbi-one-year",
    sortKey: "2026-05-21",
    headline: "One-year seminar (RBI)",
    description:
      "A monthly rhythm of community, connection, and deepening in the work—third Sunday of every month. Follow the link for curriculum and how to get involved.",
    href: "https://www.rebirthingbreathwork.com/one-year-seminar",
    external: true,
    imageSrc: "/images/One_Year_Seminar.jpeg",
    imageAlt: "One Year Seminar with Rebirthing Breathwork International",
    accent: "coral",
  },
  {
    id: "july-22-27-sierraville-training",
    sortKey: "2026-07-22",
    headline: "July 22nd–27th — Sierra Hot Springs training",
    description:
      "We gather together as community for deep healing at the beautiful Sierra Hot Springs in CA. All experience levels welcome.",
    href: "https://www.rebirthingbreathworktraining.com/sierraville-training",
    external: true,
    imageSrc: "/images/2A6E8A68-59FE-4B98-A52E-527469331F60.png",
    imageAlt:
      "Rebirthing breathwork training at Sierra Hot Springs, July 22–27",
    accent: "sun",
  },
];

export function eventsChronological(): EventItem[] {
  return [...EVENTS].sort((a, b) => a.sortKey.localeCompare(b.sortKey));
}
