# Artisan hub

A directory for finding skilled members in the community, viewing their past work, and chatting directly on WhatsApp — no sign-up required.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- lucide-react (icons)
- Self-hosted fonts via @fontsource (Playfair Display + Inter) — no external font requests at runtime

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Project structure

```
src/
  app/
    page.tsx                 → homepage (hero + search/filter/grid)
    artisan/[id]/page.tsx    → individual profile page
  components/
    Header.tsx
    BrowseSection.tsx        → search bar + category pills + filtered grid (client component)
    ArtisanCard.tsx
    CategoryIcon.tsx
    WhatsappButton.tsx
  data/
    artisans.ts               → all artisan records — edit this to add/remove people
    categories.ts              → category list — edit this to add/remove categories
  lib/
    whatsapp.ts               → builds the wa.me chat link + prefilled message
  types/
    artisan.ts
scripts/
  gen-placeholders.mjs        → regenerates the placeholder SVGs under public/images
```

## Adding a real artisan

1. Add an entry to `src/data/artisans.ts` with a unique `id` (used in the URL, e.g. `/artisan/your-id`).
2. Drop their real photos into `public/images/artisans/<id>/` — a portrait and up to 10 work photos.
3. Point `portrait` and `gallery` in the data entry at those file paths (any image format is fine — jpg, png, webp).
4. Set `whatsappNumber` in international format, digits only, no `+` or spaces (e.g. `2348012345678`).

## Adding a category

Add an entry to `src/data/categories.ts` with a `slug`, display `name`, and a `icon` name from [lucide-react](https://lucide.dev/icons) (must also be added to the `ICONS` map in `src/components/CategoryIcon.tsx`).

## Placeholder images

Every artisan currently uses a generated placeholder SVG (a simple icon on a dark tile) so the site looks complete before you have real photos. Regenerate them any time with:

```bash
node scripts/gen-placeholders.mjs
```

Replace them with real photos by pointing the data entries at new files — no code changes needed.

## Deploying

This is a standard Next.js app — it deploys cleanly to Vercel, Netlify, or any Node host:

```bash
npm run build
npm start
```
