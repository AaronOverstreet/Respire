/** Shared site URLs and identifiers. */

/**
 * Canonical production origin (no trailing slash). Used for SEO, sharing, and
 * structured data. Keep in sync with `public/robots.txt`, `public/sitemap.xml`,
 * and absolute URLs in `index.html` (og:image, JSON-LD).
 */
export const SITE_ORIGIN = "https://respirebreathwork.com";

/**
 * Historical WordPress testimonial photos (still on the previous host until those
 * files are copied under `public/` or the same paths exist on SITE_ORIGIN).
 * Not used for canonical SEO — sitemap, Open Graph, and JSON-LD use SITE_ORIGIN.
 */
export const TESTIMONIAL_IMAGE_ORIGIN = "https://www.respirepdx.com";

export const CALENDLY = "https://calendly.com/overstreetaaron";

/** Aaron — shown on Contact and used for tel: links */
export const PHONE_DISPLAY = "+1 (503) 290-6496";
export const PHONE_HREF = "tel:+15032906496";
