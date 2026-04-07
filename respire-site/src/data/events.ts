export type EventItem = {
  id: string;
  title: string;
  description: string;
  href?: string;
  external?: boolean;
  ctaLabel?: string;
  accent?: "sun" | "sea" | "coral" | "bloom";
};

export const EVENTS: EventItem[] = [
  {
    id: "online-group",
    title: "Online group rebirthing breathwork",
    description:
      "Join group sessions online—check back for dates and registration details. Group breaths are a supportive way to experience the work alongside others, often leaving people refreshed and deeply relaxed.",
    accent: "sun",
  },
  {
    id: "rbi-general",
    title: "Rebirthing Breathwork International trainings",
    description:
      "General training and seminar listings from RBI. These offerings connect you with the wider rebirthing community, continuing education, and structured paths to deepen your relationship with the breath.",
    href: "https://www.rebirthingbreathwork.com/general-6",
    external: true,
    ctaLabel: "View RBI trainings",
    accent: "sea",
  },
  {
    id: "one-year",
    title: "One-year seminar",
    description:
      "Long-form training opportunities through RBI for those ready to commit to a sustained immersion in the work. Follow the link for curriculum notes and how to get involved.",
    href: "https://www.rebirthingbreathwork.com/one-year-seminar",
    external: true,
    ctaLabel: "Seminar details",
    accent: "coral",
  },
  {
    id: "mysticmag",
    title: "Experts on breathwork",
    description:
      "A media feature on breathwork experts including Aaron—context on how breathwork fits into wellness conversations today and how practitioners approach this work with clients.",
    href: "https://www.mysticmag.com/online-therapy/experts-breathwork/",
    external: true,
    ctaLabel: "Read the feature",
    accent: "bloom",
  },
];
