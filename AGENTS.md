# AGENTS.md

## Project overview

Intuit Landing Demo — a single Next.js 15 App Router application (not a monorepo). No database, Docker, or environment variables required.

## Cursor Cloud specific instructions

### Services

| Service | Port | Command |
|---------|------|---------|
| Next.js dev server | 3000 | `npm run dev` |

Only the Next.js dev server must run for local development and E2E testing. The `POST /api/subscribe` route is served by the same process.

### Standard commands

See `README.md` and `package.json` scripts:

- **Install:** `npm install`
- **Dev:** `npm run dev` → http://localhost:3000
- **Typecheck:** `npm run typecheck`
- **Build:** `npm run build`
- **Production:** `npm run start` (after build)

### Testing the subscribe API

The `SubscribeForm` component exists in `components/SubscribeForm.tsx` but is not currently rendered on the page. Test the backend directly:

```bash
curl -X POST http://localhost:3000/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"demo@example.com"}'
```

Expected response: `{"ok":true,"message":"Thanks for subscribing to Intuit updates.","email":"demo@example.com"}`

### Notes

- Remote images from `www.intuit.com` may fail to load without outbound network access; the app still runs.
- No lint script is defined in `package.json`; use `npm run typecheck` and `npm run build` for validation.
