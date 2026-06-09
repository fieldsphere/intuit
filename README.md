# Intuit Landing Demo

A lightweight Next.js App Router demo that replicates the current Intuit landing-page flow for an internal conference demo. The upper page is polished around the promo bar, nav, hero, and four product sections; the lower sections are intentionally lightweight stubs to preserve the full page rhythm.

## Stack

- Next.js App Router with TypeScript
- Tailwind CSS
- Framer Motion for subtle reveal animations
- One backend route: `POST /api/subscribe`

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verify

```bash
npm run typecheck
npm run build
```

To test the backend directly:

```bash
curl -X POST http://localhost:3000/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"demo@example.com"}'
```

## Assets

All page assets live in `public/assets`. TurboTax and Credit Karma logos were already present; the remaining logos and product illustrations are local SVG fallbacks named to match the manifest so they can be swapped with official brand/CDN assets later.
