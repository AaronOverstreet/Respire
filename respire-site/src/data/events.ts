export type EventItem = {
  id: string;
  title: string;
  description: string;
  href?: string;
  external?: boolean;
  ctaLabel?: string;
};

export const EVENTS: EventItem[] = [
  {
    id: "online-group",
    title: "Online group rebirthing breathwork",
    description:
      "Join group sessions online—check back for dates and registration details.",
  },
  {
    id: "rbi-general",
    title: "Rebirthing Breathwork International trainings",
    description: "General training and seminar listings from RBI.",
    href: "https://www.rebirthingbreathwork.com/general-6",
    external: true,
    ctaLabel: "View RBI trainings",
  },
  {
    id: "one-year",
    title: "One-year seminar",
    description: "Long-form training opportunities through RBI.",
    href: "https://www.rebirthingbreathwork.com/one-year-seminar",
    external: true,
    ctaLabel: "Seminar details",
  },
  {
    id: "mysticmag",
    title: "Experts on breathwork",
    description: "Feature on breathwork experts including Aaron.",
    href: "https://www.mysticmag.com/online-therapy/experts-breathwork/",
    external: true,
    ctaLabel: "Read the feature",
  },
];
