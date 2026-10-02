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
    id: "oct-14-18-rbi-online-training",
    sortKey: "2026-10-14",
    pinned: true,
    headline:
      "Oct 14th–18th Online Rebirthing Breathwork International Training/Retreat",
    description: [
      "Join Rebirthing Breathwork International trainers Aaron Overstreet, Deanna Reiter, Kalyani Buckman and Susan Shehata for a deep dive into the practice, the physiology, the psychology, and the philosophy of rebirthing breathwork. We strive to keep rebirthing breathwork traditional and true to Leonard Orr's teachings while staying up to date with modern information about the breath and trauma healing. We are all direct students of Leonard Orr and are honored to continue this powerful work.",
      "We'll meet you where you're at on your breathwork journey. New to breathwork? Need a personal healing retreat? Have you been doing breathwork for years and feel ready to teach others this amazing transformative practice? Have you taken a past RBI workshop and are ready to continue your training or complete your certification?",
      "Participants will receive four rebirthing breathwork sessions. One on each of the four full days. Each of those days will also include morning and afternoon classes. We will meet for introductions and basics on Wed Oct 14th from 4–6 p.m. PDT. Thurs through Sun the schedule will be 9 a.m. to 4:30 p.m. PDT with a break for lunch. All classes will be recorded and participants will receive a link.",
      "Connect with community and treat yourself to some deep healing. Please contact Aaron with any questions: overstreetaaron@yahoo.com or 503 290 6496.",
      "Click on the image to register via Stripe. Contact Aaron for Venmo, Zelle, or Paypal.",
    ],
    href: "https://buy.stripe.com/3cI5kEgbzg5XgNvchq6kg02",
    external: true,
    imageSrc: "/images/rbi-online-training-oct-14-18.png",
    imageAlt:
      "Rebirthing Breathwork International online training flyer, October 14–18",
    accent: "sun",
  },
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
