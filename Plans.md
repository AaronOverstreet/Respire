Respire Breathwork — Website Redesign Implementation Plan

This plan is the source blueprint for coding. Do not modify anything under [Old Sites Webfiles/](Old%20Sites%20Webfiles/). Copy or retype content into new files in a new project folder.



1. Goals

Purpose: Replace the legacy “Respire PDX” positioning with Respire Breathwork as an international, Zoom-capable brand, while keeping rebirthing breathwork as the core offer and making booking obvious.

Key UX and branding changes (from Respire Redesign.md):





Naming: “Respire PDX” → Respire Breathwork; hero reads Respire (large) + Breathwork (smaller).



Logo: Retain flower of life; place behind headline, beside it, or subtly layered—still recognizable.



Mood: Shift from dark / forest-heavy / burnt orange to ocean sunrise/sunset, tropical/vacation-adjacent, joyful, optimistic, energetic—calm and energized.



Motion: Animated “RE” words (Resolve, Repair, Restore, Reclaim, Rebirth, Renew, Revive, Rebuild) to feel “alive.”



Information hierarchy (homepage): Hero → dictionary definition (higher, more prominent) → About Aaron (higher; rebirthing focus) → What is rebirthing breathwork (explanation + benefits integrated) → booking (Calendly, in-person + Zoom) → newsletter (lower).



Tagline: Keep “Free your breath and your heart will follow” but not as primary hero text—use as secondary/supporting.



Services: Visually inviting (not gray); each offering clear with “more information” path; booking low-friction (Option A: Services + booking on same page vs Option B: separate booking page—decide in Open Questions).



Testimonials: Keep all; Leonard Orr featured prominently.



Remove: Dedicated Yoga page and Videos page content/embeds as currently implemented; replace imagery and video later per client.



2. Constraints and Rules







Rule



Detail





Immutable archive



Never edit, move, or delete files in [Old Sites Webfiles/](Old%20Sites%20Webfiles/). Treat as frozen reference only.





New implementation



All site code/assets live in new paths (e.g. src/, public/).





Spec priority



Respire Redesign.md overrides old site when they conflict. Raw Transcribed.md clarifies intent.





Structure



Prefer clean, minimal file and component structure; avoid WordPress/Thrive-era patterns.





Third-party



Preserve Calendly (https://calendly.com/overstreetaaron per old Services/Home). Newsletter provider TBD (see Open Questions).



3. Site Architecture

Global chrome





SiteHeader: Logo + primary nav (order below) + optional Book CTA (links to Calendly or /services#book).



SiteFooter: Copyright (“Respire Breathwork by Aaron Overstreet”), links to Privacy Policy and Disclaimer (present on old site footer—keep legal pages even if not in main nav).

Primary navigation (spec §4): Home → Services → Events → About → Testimonials → Contact.

flowchart LR
  Home[Home]
  Services[Services]
  Events[Events]
  About[About]
  Testimonials[Testimonials]
  Contact[Contact]
  Home --> Services
  Services --> Events
  Events --> About
  About --> Testimonials
  Testimonials --> Contact

Per-page sections







Page



Sections / blocks





Home



Hero (Respire / Breathwork, logo, ReWordsBanner) → TaglineStrip (secondary tagline) → DictionaryDefinition (full definition + ocean/tropical visual; optional forest image only if updated—spec prefers ocean) → AboutTeaser (rebirthing focus + link to About) → RebirthingExplainer (what it is + woven benefits) → BookingStrip (in-person + Zoom + Calendly + 15-min consult) → NewsletterSignup → optional FeaturedQuote (Leonard Orr short quote or link to Testimonials) → Footer.





Services



Page intro + persistent Book CTAs → ServiceGrid or ServiceAccordion for: Individual Rebirthing; Re-Writing Core Story; Daily Practice; Group Rebirthing; Breathworker Mentoring; Retreats (rewrite legacy “Yoga and Breath Retreats” per §7—no standalone yoga page). Each card: summary, “Learn more” anchor/detail, image placeholder for new art. → Pricing / scholarship blocks (migrate copy from old Services toggles). → Location / modalities (Portland office, Zoom, house calls). → Contact mini-form or link to Contact.





Events



Heading + event cards or image links mirroring old Respire(Events).html intent: online group breathwork, external trainings (rebirthingbreathwork.com links), MysticMag feature—implemented as editable content (CMS or static data file), not scraped from old HTML.





About



Photo + extended bio (from old About: Leonard Orr lineage, RBI certification, trainings, MysticMag interview link, private sessions + group facilitation). Emphasize rebirthing breathwork more than generic “breathwork community” if tightening copy.





Testimonials



FeaturedTestimonial (Leonard D. Orr first / hero band) → TestimonialGrid (all others from old Testimonials + Home preview: Jenna, Malcolm, Constantine, Jason, Ayesha, David, etc.). Remove embedded YouTube from default layout per “lose videos”—replace with quoted text + photo until new media exists.





Contact



Phone +1 (503) 290-6496, email if provided, Calendly links, ContactForm (name, email, subject, message), optional reCAPTCHA note for implementation.



4. Component System

Layout / chrome: SiteShell, SiteHeader, SiteFooter, Section, Container, PageTitle.

Marketing blocks: Hero, ReWordsBanner (animated RE words), TaglineStrip, DictionaryDefinition, QuoteBlock, AboutTeaser, RebirthingExplainer, BenefitsList (reuse benefit bullets from old Home), BookingStrip, NewsletterSignup, CalendlyLinkButton, ServiceCard, ServiceDetail / Accordion, PricingTable or ScholarshipCallout, EventCard, TestimonialCard, FeaturedTestimonial, ContactForm.

Shared UI: Button, Link, Prose (for long-form), Image (optimized, with alt text from migrated content).



5. Styling System

Colors — use CSS variables; map from Redesign §9:





Warm: Sunshine #FFD54F, Golden #FFC107, Canary #FFEF00; Coral #FF7F50, Tangerine #F28500, Peach #FFCBA4, Pumpkin #FF7518; Blush #F4C2C2, Pale Pink #FFD1DC.



Cool: Sky #87CEEB, Serene #6EC6FF, Powder #B0E0E6, Cornflower #6495ED, Ocean #1CA3EC.

Semantic tokens (suggested): --color-bg (light gradient or soft blue-pink wash), --color-surface, --color-text, --color-text-muted, --color-accent-warm, --color-accent-cool, --color-border. Reserve burnt orange / heavy forest for avoidance except where a single transitional image is approved.

Typography: Pair a distinct display face for “Respire” (spec does not mandate—choose one modern geometric or soft serif) with a readable body sans (e.g. system stack or Source Sans / DM Sans). Old site used Poiret One + Lato—optional nod via display font only if it fits the new palette.

Spacing: 4px base grid; section vertical rhythm 4rem–6rem desktop, 2.5rem–4rem mobile; max-width ~72–80ch for prose.

Animation — “RE” words (Respire Redesign.md §2):





Respect prefers-reduced-motion: static fallback (single word or full list without motion).



Default: subtle crossfade or marquee of the eight words; duration slow enough to read (~3–5s per word or smooth scroll); no seizure-inducing flashes.



Optional: gentle scale/opacity pop on word change; loop infinitely with pause-friendly hover on desktop.



6. Content Mapping (old site → new structure)

Source files (read-only): e.g. [Respire(Home).html](Old%20Sites%20Webfiles/Respire(Home).html), [Respire(Services).html](Old%20Sites%20Webfiles/Respire(Services).html), [Respire(About).html](Old%20Sites%20Webfiles/Respire(About).html), [Respire(Testimonials).html](Old%20Sites%20Webfiles/Respire(Testimonials).html), [Respire(Events).html](Old%20Sites%20Webfiles/Respire(Events).html), [Respire(Contact).html](Old%20Sites%20Webfiles/Respire(Contact).html).







Intent



Keep



Rewrite



Remove





Brand



Flower of life concept; business name evolution to Respire Breathwork



All “PDX” / local-only framing where it conflicts with global positioning



—





Home



Tagline copy; dictionary definition; Leonard quote; benefits list; About teaser; Calendly URL; testimonial previews



Section order per spec; hero structure



Old logo wordmark asset as primary (replace with new lockup when ready)





Services



Service titles, session descriptions, rates, scholarship/donor language, Portland location, phone



Presentation (cards vs accordion); Retreats item without “yoga page” dependency



Gray/teal-dominant styling only





About



Bio facts, certifications, MysticMag link, Leonard lineage



Emphasize rebirthing specialty



—





Events



External URLs and “what’s coming” intent



Structured cards + dates when available



Static image-only feel if replaced by clearer listings





Testimonials



All testimonial text + attributions; Leonard prominent



—



Video iframe on Testimonials page





Nav



—



Order: Home, Services, Events, About, Testimonials, Contact



Yoga nav item; Videos nav item





Legal



Privacy + Disclaimer links in footer



—



—

Logo / imagery: Export or recreate flower of life from brand assets (not from editing Old Sites Webfiles); add new ocean/tropical photography/illustration per §10.



7. File / Folder Structure (proposed)

Framework-agnostic shape (adjust if Next/Astro/Vite is chosen):

respire-site/                 # new project root (sibling or parent—not inside Old Sites Webfiles)
├── plan.md                   # this plan (user-requested filename)
├── public/
│   ├── images/               # optimized new imagery + logo
│   └── fonts/                # if self-hosting
├── src/
│   ├── components/           # Hero, ReWordsBanner, ServiceCard, ...
│   ├── layouts/              # SiteShell
│   ├── pages/ or app/        # route entries
│   ├── content/              # optional: MD/JSON for testimonials, services
│   └── styles/
│       ├── tokens.css        # CSS variables (palette, spacing, type scale)
│       └── global.css
├── package.json
└── README.md                 # dev/deploy notes only if needed



8. Build Order





Scaffold project; add tokens.css, global reset, SiteShell + placeholder routes for all six pages.



SiteHeader / Footer with correct nav order + footer legal links.



Home: Hero + ReWordsBanner + motion fallback; then DictionaryDefinition; then AboutTeaser; then RebirthingExplainer + benefits; then BookingStrip; then NewsletterSignup (stub form until provider chosen).



Services: ServiceCard grid + detail sections + pricing/scholarship blocks + Calendly CTAs.



Testimonials: Leonard-featured layout + migrate all quotes; no video embed.



About and Contact (form + Calendly + phone).



Events from structured content.



Polish: responsive behavior, accessibility (focus, contrast on yellows), performance (images).



Content pass: Replace PDX-only phrasing where inappropriate; confirm retreat copy without relying on removed Yoga page.



9. Open Questions / Assumptions





Tech stack: Not specified—choose one of Astro, Next.js, or Vite + vanilla/TS based on hosting preference (static vs SSR). Plan works for any.



Newsletter: Old Home used Thrive Leads–style posting to respirepdx.com; new site needs Mailchimp/ConvertKit/Buttondown (or similar) URL/API—confirm provider and list endpoint.



Services vs Booking page: Spec lists Option A (combined) vs B (separate). Default recommendation: single Services page with sticky/duplicate Book buttons + anchors (#book, #consult) unless analytics favor a dedicated /book.



Retreats / Bhagavati: Old “Yoga and Breath Retreats” copy should remain as retreats/movement+breath without a Yoga top-level page—confirm wording with client.



Privacy / Disclaimer: Migrate body copy from live site or legal docs—not fully visible in saved HTML; may need paste from CMS export or live URLs.



Contact form backend: Netlify Forms, Formspree, server action, or keep email-only—confirm.



Deliverable plan.md: This document should be written to the repo root as plan.md once you approve the plan (Cursor plan file is separate).

