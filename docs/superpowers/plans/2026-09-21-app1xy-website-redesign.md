# app1xy Website Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the terminal-inspired app1xy single-page site with a light, approachable, SEO-focused digital studio page while preserving the existing project information and destinations.

**Architecture:** Keep the existing Vite + React application and portfolio data. Rebuild `App.tsx` around semantic, focused sections and replace the Tailwind CDN/runtime styling with maintainable local CSS tokens and component classes. Update `index.html` for metadata and structured data, and add a lightweight Node verification script for the content and SEO contract.

**Tech Stack:** React 19, TypeScript, Vite, local CSS, Node built-in assertions.

**Spec:** `docs/superpowers/specs/2026-09-21-app1xy-website-redesign-design.md`

## Global Constraints

- Keep the current Vite + React setup; do not add a framework or animation dependency.
- Use existing facts only; do not add awards, customer counts, rankings, testimonials, guarantees, or unsupported claims.
- Use warm light styling, restrained shapes, clear hierarchy, and no decorative pills or eyebrow headings.
- Keep important content available without animation and respect `prefers-reduced-motion`.
- Use semantic headings, visible focus states, persistent labels, and touch-friendly controls.
- Preserve project and social links already present in `constants.ts`.

## Review Focus

- Narrow viewport: navigation, project rows, contact fields, and long headings must not overflow.
- Content truth: portfolio facts and outbound URLs must remain present after the copy rewrite.
- SEO contract: exactly one H1 plus title, description, canonical, social metadata, and valid JSON-LD.
- Interaction fallback: the contact route must work without a configured server-side form handler.
- Style-guide violations: no terminal boot screen, hacker language, decorative pills, repeated feature-card grid, or unsupported marketing claims.

### Task 1: Add a failing site contract test

**Files:**
- Create: `scripts/verify-site.mjs`
- Modify: `package.json`

**Interfaces:**
- Produces: `npm run verify:site` exits 0 only when the source contains the required structural and SEO markers.

- [ ] **Step 1: Write the failing verification script**

Create a Node script using `node:assert/strict` and `node:fs` that reads `App.tsx`, `index.html`, and `constants.ts`, then asserts:

```js
assert.match(app, /<h1[\\s\\S]*Useful websites and digital tools/);
assert.equal((app.match(/<h1\\b/g) ?? []).length, 1);
for (const phrase of ['MEWPHUB.com', 'SpiderMEWP.com', 'FindAMEWP.com', 'DayStreetMOT.co.uk']) assert.match(app, new RegExp(phrase));
assert.match(app, /mailto:info@mewphub.com/);
assert.match(html, /<link rel="canonical"/);
assert.match(html, /application\\/ld\\+json/);
assert.doesNotMatch(app, /System Online|Establish Connection|Transmission Received|INITIATE TRANSFER/);
assert.doesNotMatch(html, /cdn.tailwindcss.com|CLICK_TO_ENTER|System Boot/);
```

Also verify the existing project URLs are still present in `constants.ts`.

- [ ] **Step 2: Run it to verify it fails for the current site**

Run: `node scripts/verify-site.mjs`

Expected: FAIL because the existing app has the old H1, terminal language, missing canonical metadata, and no JSON-LD.

- [ ] **Step 3: Add the package script**

Add:

```json
"verify:site": "node scripts/verify-site.mjs"
```

- [ ] **Step 4: Commit the contract test**

```bash
git add scripts/verify-site.mjs package.json
git commit -m "test: define app1xy redesign contract"
```

### Task 2: Rebuild the page and local visual system

**Files:**
- Modify: `App.tsx`
- Modify: `index.css`
- Modify: `constants.ts`

**Interfaces:**
- Consumes: `PROJECTS` and `SOCIAL_LINKS` from `constants.ts`.
- Produces: semantic page sections with anchors `work`, `services`, `about`, and `contact`; one H1 beginning “Useful websites and digital tools”.

- [ ] **Step 1: Replace the app structure**

Implement a semantic React page with:

- A header/nav containing the app1xy wordmark, Work, Services, About, Contact, and a `mailto:info@mewphub.com` action.
- A hero with the exact proposition “Useful websites and digital tools for specialist businesses.”, supporting copy about data, design, and practical industry knowledge, and a descriptive contact link.
- About content explaining the collective without “system”, “decode”, or terminal language.
- A `work` section mapping the four existing `PROJECTS` into varied article rows, preserving names, taglines, features, technologies, and URLs.
- A `services` section with three substantial service rows, not a repeated icon-card grid.
- A numbered process section using Understand, Plan, Build, Improve.
- A `contact` section with labeled name, email, subject, and message fields, plus a real mailto action created from the form values. Do not simulate a successful backend response.
- A footer using the existing social links.

Use `aria-label`s for icon-like external link text, and keep all primary actions at least 44px tall.

- [ ] **Step 2: Replace Tailwind/CDN-dependent styling with local CSS**

Define CSS tokens for background, ink, muted text, accent, border, spacing, type sizes, and radius. Style the layout with CSS grid/flex and responsive breakpoints. Use `:focus-visible`, `prefers-reduced-motion`, and mobile-first layout rules. Do not introduce gradients, giant rounded cards, pills, or scroll-triggered animation.

- [ ] **Step 3: Update portfolio wording only where needed for clarity**

Keep all existing project names, URLs, features, and technologies. Rewrite only generic/tagline wording that conflicts with the approved copy direction, without adding new claims.

- [ ] **Step 4: Run the contract test**

Run: `npm run verify:site`

Expected: PASS with no assertion failures.

- [ ] **Step 5: Commit the page implementation**

```bash
git add App.tsx index.css constants.ts
git commit -m "feat: redesign app1xy as approachable digital studio"
```

### Task 3: Add SEO metadata and production verification

**Files:**
- Modify: `index.html`
- Modify: `metadata.json`

**Interfaces:**
- Consumes: semantic anchors and copy from `App.tsx`.
- Produces: descriptive title/description, canonical URL, Open Graph/Twitter metadata, and valid JSON-LD for app1xy.

- [ ] **Step 1: Update document metadata**

Replace the generic title and description with copy focused on websites, digital tools, data, and specialist businesses in South Yorkshire/UK. Add:

```html
<link rel="canonical" href="https://app1xy.com/" />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:url" content="https://app1xy.com/" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary" />
```

Add JSON-LD with `@type` `ProfessionalService`, name, URL, area served, and the known social URLs. Do not invent an address, telephone number, rating, price range, or image.

- [ ] **Step 2: Remove unused preloader/import-map/CDN setup**

Keep the Vite module entry and stylesheet link. Remove the preloader markup/script, Tailwind CDN/configuration, icon CDN, unused font imports, and import map. Set the document language to `en-GB` and use a simple data URI favicon if desired.

- [ ] **Step 3: Update metadata.json**

Change the description to match the new plain-English proposition and remove the old “Nerds of Data” framing.

- [ ] **Step 4: Run all verification**

Run: `npm run verify:site && npm run build`

Expected: the site contract passes and Vite completes with exit code 0.

- [ ] **Step 5: Commit metadata and verification updates**

```bash
git add index.html metadata.json
git commit -m "feat: add app1xy SEO foundations"
```

### Task 4: Final review and responsive inspection

**Files:**
- Modify: any affected implementation file if review finds a concrete issue.

**Interfaces:**
- Consumes: the complete page from Tasks 1–3.
- Produces: a verified build with no obvious mobile, accessibility, or style-guide regressions.

- [ ] **Step 1: Run the production verification**

Run: `npm run verify:site && npm run build`

Expected: both commands pass.

- [ ] **Step 2: Inspect the rendered page at desktop and mobile widths**

Start the Vite preview and inspect at approximately 1440px and 390px widths. Check header navigation, H1 wrapping, project links, contact labels, mailto behavior, focus visibility, and no horizontal overflow.

- [ ] **Step 3: Correct only concrete review findings**

If a problem is found, fix the smallest relevant CSS/React/metadata change and rerun the full verification command.

- [ ] **Step 4: Commit final fixes if needed**

```bash
git add App.tsx index.css index.html metadata.json scripts/verify-site.mjs
git commit -m "fix: polish responsive app1xy redesign"
```

