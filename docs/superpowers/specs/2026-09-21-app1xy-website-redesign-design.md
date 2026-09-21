# app1xy Website Redesign Design

Date: 2026-09-21

## Intent

Remake app1xy.com as a light, approachable, search-friendly digital studio site for specialist businesses. Keep the existing portfolio facts and destinations, but replace the terminal/hacker presentation with a practical editorial-industrial identity.

## Audience and success criteria

The primary audience is a business owner or specialist operator looking for a useful website, data tool, or digital support. A visitor should understand what app1xy does, see credible examples, and know how to start a conversation within the first screen and a short scroll.

Success means:

- The page reads naturally in UK English and avoids technical theatre.
- The main proposition, services, work, and contact route are easy to find.
- Existing project information and links remain available.
- The site is usable on mobile, keyboard-accessible, and does not depend on animation or a preloader.
- Search engines receive descriptive metadata, semantic headings, internal navigation, and supported structured data.

## Visual direction

- Warm light background, near-black text, muted clay/orange accent, and restrained blue-green detail.
- A readable contemporary sans for body and navigation, with a distinctive serif reserved for major editorial headings if it improves the identity.
- Square or subtly rounded controls, fine rules, generous but compact spacing, and no decorative pills.
- Varied compositions: a two-column introduction, image-free project rows with strong typographic hierarchy, a split service section, and a numbered process timeline.
- Motion limited to short hover/focus transitions. Respect `prefers-reduced-motion`.

## Page structure

1. Header with app1xy wordmark, anchor links to Work, Services, About, and Contact, plus a descriptive contact action.
2. Hero with one H1 describing useful websites and digital tools for specialist businesses, supporting explanation, and a primary email/contact action.
3. Intro/About section explaining the combination of data, design, and practical industry knowledge.
4. Selected work section showing MEWPHUB, SpiderMEWP, FindAMEWP, and DayStreetMOT as distinct rows with existing descriptions, features, technologies, and outbound links.
5. Services section covering websites and digital experiences, data tools and planning systems, and content/social support.
6. Process section using the existing four-stage idea, rewritten as Understand, Plan, Build, Improve.
7. Contact section with persistent labels and a mailto fallback. Since no form backend exists, the UI should make email the real action rather than simulate a successful submission.
8. Footer with copyright and the existing social/podcast links.

## Content rules

Use existing facts only. Preserve supported details such as the 320+ machine database, 20+ years of operational experience, the named project URLs, and the stated Day Street MOT rating. Do not add awards, customer counts, rankings, testimonials, guarantees, or claims that are not already present.

Avoid “system”, “transmission”, “decode”, “deploy”, “kernel”, “AI-powered”, “seamless”, and similar decorative technology language unless the actual content requires it. Use concrete descriptions such as “compare access platforms”, “plan a site”, and “turn technical information into a useful online tool”.

## SEO and accessibility

- Replace the current generic title and description with descriptive page metadata focused on websites, digital tools, data, and specialist businesses in South Yorkshire/UK where supported.
- Add canonical and Open Graph/Twitter metadata using the site URL.
- Add JSON-LD for a `ProfessionalService`/`Organization`-style entity with the available name, URL, location, and social links; omit fields that are not known.
- Keep one logical H1 and ordered section headings.
- Use semantic `header`, `nav`, `main`, `section`, `article`, and `footer` elements.
- Provide visible keyboard focus, useful link text, persistent form labels, and descriptive `aria-label`s for icon-only controls.
- Ensure touch targets are at least approximately 44px and avoid horizontal overflow.

## Implementation boundaries

- Keep the current Vite + React setup; do not add a framework or animation dependency.
- Replace the current Tailwind CDN configuration with local CSS tokens and component classes in `index.css` so the visual system is maintainable and the page does not depend on runtime CDN styling.
- Simplify `App.tsx` into focused sections and remove the preloader/theme state.
- Keep project and social data in `constants.ts`, updating only wording where needed.
- Use plain text and existing project links; no invented images or generated business photography.

## Verification

- Run the production build.
- Inspect the rendered page at desktop and narrow mobile widths.
- Check navigation anchors, external links, mailto action, and visible focus states.
- Check that the page contains one H1, descriptive title/description, canonical metadata, and valid JSON-LD syntax.
- Check the final result against the attached style guide: no decorative pills, no eyebrow headings, no generic repeated card grid, no hacker-style framing, and no unsupported claims.
