export type EventItem = {
  id: string;
  /** ISO date used for display order (not always strict chronology for open-ended listings) */
  sortKey: string;
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
    id: "aug-9-group-breathe",
    sortKey: "2026-08-09",
    headline: "Online Rebirthing Breathwork Journey",
    description:
      "Sunday, Aug 9th — 10:00 a.m.–12:30 p.m. PDT via Zoom. Sliding scale donation $2–$22. Include your email with payment when you register. Rebirthing breathwork is a gentle, conscious connected breathing method that helps dislodge tension and old trauma patterns.",
    href: "https://buy.stripe.com/eVqbJ2aRff1T2WF95e6kg00",
    external: true,
    imageSrc: "/images/online-rebirthing-breathwork-journey-aug-9.png",
    imageAlt: "August 9th online rebirthing breathwork journey flyer",
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
  {
    id: "aug-22-fasting-with-intention",
    sortKey: "2026-08-22",
    headline: "Fasting with Intention, Awareness and Support",
    description: [
      "Fasting is a great way to restore your body and improve health. It helps with repair and detoxification. Participants will be invited to fast for 36 hours (from Fri night to Sun morning). During our time together we will give attention to ourselves through meditation, gentle breathwork, easy stretching, writing exercises, journaling, and more. You will experience being supported while fully present with your body mind and emotions during the fast. The day will close with a guided rebirthing breathwork journey.",
      "You are welcome to fast in whatever way works for you, dry fast, water fast, juice fast etc.. Please contact Aaron if you would like assistance deciding what is best for you.",
      "You can also fast from technology (aside for our Zoom time) during the 36 hours.",
      "Click on the image for Stripe registration. For other payment options, please contact Aaron: overstreetaaron@yahoo.com or text 503 290 6496.",
    ],
    href: "https://buy.stripe.com/14A5kE3oN6vncxfchq6kg01",
    external: true,
    imageSrc: "/images/fasting-with-intention-aug-22.png",
    imageAlt:
      "Fasting with Intention, Awareness and Support online workshop flyer",
    accent: "sea",
  },
];

export function eventsChronological(): EventItem[] {
  return [...EVENTS].sort((a, b) => a.sortKey.localeCompare(b.sortKey));
}
