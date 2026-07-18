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
    id: "july-29-prana-portal",
    sortKey: "2026-07-29",
    headline: "Prana Portal — Breath, Movement & Music Workshop",
    description: [
      "Wednesday, July 29th, 7:30–9 p.m. — FREE. NW Sound Healing Instruments, 6531 NW Highway 99, Vancouver, WA.",
      "\"Prana Portal\" is an hour long music, movement and breath workshop. Designed to harmonize your breath, heartbeat, and mind. It is a guided exploration into fun and play with Pranayama, dance and original music.",
    ],
    href: "https://www.google.com/maps/search/?api=1&query=NW+Sound+Healing+Instruments+6531+NW+Highway+99+Vancouver+WA",
    external: true,
    imageSrc: "/images/prana-portal-july-29.png",
    imageAlt: "Prana Portal breath, movement and music workshop flyer, July 29th",
    accent: "bloom",
  },
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
    id: "sept-18-20-theta-portal",
    sortKey: "2026-09-18",
    headline: "Theta Portal Gathering — September 18th–20th",
    description: [
      "September 18th–20th in St Helens, OR. Join us for a day or the whole weekend.",
      "This special event is a heartfelt endeavor to nurture our vibrant community through breath, sound, and synergy. Theta Portal harnesses the transformative power of expertly facilitated rebirthing breathwork in a large group setting, where dynamic soundscapes and the shared field of consciousness exponentially amplify the individual capacity for healing.",
      "Come for a day, or stay the whole weekend and camp under the stars. Day guests are welcome to join us for breathwork sessions, sound journeys, and the evening fire circle; weekend campers get the full arc — shared meals, unstructured time in nature, and the kind of depth that only comes from staying present together over time.",
      "No performance, no pretense — just breath, sound, and space to be human. This event will be extra special, as it is Adina's final Theta Portal as facilitator and event producer.",
    ],
    href: "https://thetaportalevents.com/events",
    external: true,
    imageSrc: "/images/theta-portal-sept-18-20.png",
    imageAlt:
      "Theta Portal Gathering flyer, September 18–20 in St Helens, OR",
    accent: "sea",
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
