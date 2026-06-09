---
name: Intuit landing redesign demo
overview: A lightweight Next.js (App Router + TypeScript + Tailwind) full-stack demo that faithfully replicates the current intuit.com landing page (same sections, copy, brand colors, and clickable links), backed by a single subscribe API route.
todos:
  - id: scaffold
    content: Scaffold Next.js + TypeScript + Tailwind + Framer Motion project in workspace root
    status: completed
  - id: backend
    content: "Add content data in lib/ (products, stories) + single API route handler: /api/subscribe"
    status: completed
  - id: layout-nav
    content: Build root layout, Intuit brand tokens/globals, promo bar, and sticky top Nav with mega-menu items
    status: completed
  - id: hero
    content: Build hero ("Outdo your financial goals—all in one place") with CTA matching intuit.com
    status: completed
  - id: assets
    content: Fetch real Intuit + product logos/imagery into public/ for max fidelity
    status: completed
  - id: products
    content: Build the four product feature sections (TurboTax, Credit Karma, QuickBooks, Mailchimp) with real copy + outbound links
    status: completed
  - id: footer
    content: Build the full footer (product columns, company links, legal row) and email capture
    status: completed
  - id: stubs
    content: Add lightweight stubs for value tabs, segment tabs, customer stories, news cards, and 'Driving success together'
    status: completed
  - id: verify
    content: Add README, run build/dev, and verify sections render, links work, and API calls succeed
    status: completed
isProject: false
---

# Intuit.com Landing Page Replica — Conference Demo

## Goal (revised)

First pass = **faithful replica** of the current [intuit.com](https://www.intuit.com/), not a redesign. Match its section order, real copy, brand colors, and clickable outbound links as closely as practical. Heavy bespoke animations (scroll-scrubbed video, complex transitions) won't be replicated 1:1 — that's acceptable; we'll approximate with light fades/hover. Still a lightweight **Next.js** full-stack app so the dev-conference audience sees a real frontend↔backend.

## Tech stack

- **Next.js 15 (App Router) + TypeScript** — single app serves UI and API.
- **Tailwind CSS** for styling, **Framer Motion** for light scroll-reveal/hover only.
- **Backend = a single Next.js Route Handler** under `app/api/subscribe` (in-memory, no DB).

## Brand fidelity (from Intuit brand guidelines)

- **Intuit Blue** `#365ebf` (primary), **Super Blue** `#236CFF` (accent), near-black text, white/very-light section backgrounds — matching the real site's mostly-white, blue-accented look.
- Product accents: TurboTax blue, Credit Karma (green), QuickBooks (green), Mailchimp (yellow/black).
- Clean sans-serif (Avenir/Helvetica-like; use a close system/Google font such as Inter or similar).

## Scope (first pass = CORE, upper half built fully)

Build sections 1–4 + 10 **fully and polished**; sections 5–9 are **lightweight stubs** (correct headings/structure present, minimal styling) so the page reads top-to-bottom but effort concentrates on the high-impact upper half. A later pass can flesh out the stubs.

## Page structure to replicate (top → bottom, matching intuit.com)

1. **Promo bar** [BUILD] — "Power your business with the Intuit Business Credit Card. Learn more".
2. **Top nav** [BUILD] — Intuit logo + product/menu items + "See it in action" / sign-in style CTAs (sticky, blurred).
3. **Hero** [BUILD] — "Outdo your financial goals—all in one place." / sub: "The Intuit platform puts a team of AI agents and trusted experts by your side." / CTA "See it in action".
4. **Product feature sections** [BUILD] (in site order), each with its eyebrow label, heading, body, and outbound link:
  - **TurboTax** — "Expertise that helps you file smarter" → `https://turbotax.intuit.com/`
  - **Credit Karma** — "Personalized guidance for your next money moves" / "Go to Credit Karma" → `https://www.creditkarma.com/`
  - **QuickBooks** — "Everything you need to power your business" → `https://quickbooks.intuit.com/`
  - **Mailchimp** — "Turn your emails and SMS into revenue" → `https://mailchimp.com/`
5. **Value tabs row** [STUB] — "Your taxes done right / Make financial progress / Run your business / Grow your business".
6. **"How Intuit drives success for"** [STUB] — segment tabs: **Small Businesses / Individuals / Mid-Market Businesses**.
7. **Customer stories** [STUB] — Kris (handcrafted saunas), Anna (cacao), Howard (SMS deals).
8. **"Innovation, action, and impact"** [STUB] — news/press cards (Anthropic/Claude, OpenAI, Fast Company, QuickBooks, "Meet your virtual team", Investor Day, agentic AI) + "See all stories".
9. **"Driving success together"** [STUB] — three CTAs: **Work with us / Learn about us / Build with us**.
10. **Footer** [BUILD] — product columns (TurboTax, Credit Karma, QuickBooks, Mailchimp), company links (About, Careers, Press, Investors), legal row.

## Backend (minimal — one real endpoint)

Page content is static, so it's imported directly by **server components** (no fetch/API hop). The only backend route is the form submission, which is a real, visible frontend→backend round trip.

- `app/api/subscribe/route.ts` — `POST { email }` validates + returns success (footer email capture).
- Content source of truth in `lib/` (`products.ts`, `stories.ts`) imported directly where rendered, so copy/links live in one place.

## Files to create

- `package.json`, `tsconfig.json`, `next.config.ts`, Tailwind + `postcss.config`
- `app/layout.tsx`, `app/page.tsx`, `app/globals.css`
- `app/api/subscribe/route.ts`
- `lib/products.ts`, `lib/stories.ts`
- `components/`: `PromoBar.tsx`, `Nav.tsx`, `Hero.tsx`, `ProductSection.tsx`, `ValueTabs.tsx`, `SegmentTabs.tsx`, `CustomerStories.tsx`, `NewsCards.tsx`, `SuccessTogether.tsx`, `Footer.tsx`
- `README.md` (run instructions)

## Assets — use REAL Intuit/product brand assets (max fidelity)

- Pull the real **Intuit logo** and **TurboTax / Credit Karma / QuickBooks / Mailchimp** logos and representative hero/product imagery, saved into `public/assets/` (see `public/assets/ASSETS.md` for the manifest of filenames + usage).
- Reference them via `next/image` as `/assets/<filename>`. Note: this is for an **internal Intuit conference demo**; fine for that context.
- Asset hosts: `www.intuit.com` serves images fine; `quickbooks.intuit.com` (logo SVGs) sits behind a WAF that blocks plain `curl` — it only succeeds with full browser headers (`Accept`, `Accept-Language`, `Referer: https://quickbooks.intuit.com/`, `Sec-Fetch-*`, `--compressed`). Fall back to an inline SVG wordmark/placeholder for any single asset that still can't be fetched.

## Notes / decisions I'll make myself

- Replicate **layout, copy, colors, links, and real brand imagery**; approximate (not reproduce) the heavy scroll/video animations with simple fades + hover states.
- All external links use `target="_blank" rel="noopener noreferrer"`.
- Subscribe is mocked server-side (offline-safe for a live demo).
- Will run `npm run build`/`dev` to verify it compiles before handing off.

## Verification

- `npm run dev`; confirm sections appear in intuit.com order, all four product links + footer links navigate out correctly, and the email form hits the backend.
