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
    id: "april-30-sound-breath-bath",
    sortKey: "2026-04-30",
    headline:
      "April 30th Sound and Breath Bath, NW Sound Healing Instruments, Vancouver, WA",
    description:
      "Breath and sound with Aaron—gentle calming breath with crystal bowls and relaxing guitar soundscapes. 7:30–9pm; suggested donation $15–30. 6531 NE Hwy 99, Vancouver, WA.",
    href: "https://www.nwsoundhealing.com/",
    external: true,
    imageSrc: "/images/NW_Sound_Healing.png",
    imageAlt:
      "Flyer: Breath and Sound Bath with Aaron Overstreet at NW Sound Healing",
    accent: "bloom",
  },
  {
    id: "may-20-24-rbi-training",
    sortKey: "2026-05-20",
    headline: "May 20th–24th Rebirthing Breathwork International online training",
    description:
      "Five-day online rebirthing breathwork training with RBI. Follow the link for curriculum, logistics, and enrollment.",
    href: "https://www.rebirthingbreathwork.com/general-6",
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
    id: "rbi-trainings-ongoing",
    sortKey: "2026-12-31",
    headline: "Rebirthing Breathwork International trainings (calendar)",
    description:
      "Browse additional seminars, intensives, and community offerings from RBI as new dates are announced.",
    href: "https://www.rebirthingbreathwork.com/general-6",
    external: true,
    imageSrc: "/images/rebirthing-breathwork-international-logo.png",
    imageAlt: "Rebirthing Breathwork International logo",
    accent: "coral",
  },
];

export function eventsChronological(): EventItem[] {
  return [...EVENTS].sort((a, b) => a.sortKey.localeCompare(b.sortKey));
}
