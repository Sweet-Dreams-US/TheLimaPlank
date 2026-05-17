# The Lima Plank

The marketing site for **The Lima Plank** — a collective of eleven independently owned businesses on a single boardwalk-style block in downtown Lima, Ohio.

A main directory homepage links to individual editorial pages for each storefront. Each business page links out to its own external website.

## Stack

- **Next.js 15 / App Router** — static-by-default, generates a page per business
- **React 19** + **TypeScript** strict
- **Tailwind CSS 3** with a custom palette (paper / plank / moss / ember / brass)
- **Motion** (Framer Motion v12) for scroll parallax + reveals
- Fonts: **Fraunces** (display), **Inter** (body), **Caveat** (script), **JetBrains Mono** (mono)

## Project structure

```
app/
  layout.tsx          # Root layout w/ fonts, nav, footer
  page.tsx            # Home — hero, marquee, portfolio grid, block map, CTA
  globals.css         # Tailwind layers + design tokens
  not-found.tsx       # 404 with directory teaser
  sitemap.ts          # SEO sitemap (1 per business)
  robots.ts
  businesses/
    page.tsx          # Editorial index of all businesses
  [slug]/
    page.tsx          # Individual business detail page
  about/
    page.tsx          # District story + roster

components/
  site/               # SiteNav, SiteFooter, Reveal, Marquee, Grain
  home/               # HomeHero, PortfolioGrid
  business/           # BusinessTile (placeholder imagery), BusinessHero

data/
  businesses.ts       # Single source of truth for 11 storefronts

lib/
  fonts.ts
  utils.ts            # cn() helper
```

## Adding or editing a business

All storefront content lives in [`data/businesses.ts`](data/businesses.ts). Edit the array, push, and the home grid, `/businesses`, sitemap, and `/[slug]` pages all update automatically.

Each entry needs:

- `slug` — URL segment, e.g. `pinball` → `/pinball`
- `name`, `shortName`, `category`, `tagline`, `blurb`, `longCopy`
- `address`, `city`, `hours[]`, optional `phone` / `email` / `website`
- `features[]` and `highlights[]` for the stats strip
- `accent` (primary hex) and `accentSoft` (light hex) — used everywhere from the tile gradient to the per-page chrome
- `status: 'open' | 'coming-soon' | 'seasonal'`
- `order` — controls grid placement and prev/next navigation

## Real imagery

Until storefront photography exists, each business is rendered with a **monogram tile** — large display letter washed in the business accent over a plank-textured gradient. Swap the inner of `BusinessTile` (or the hero in `business-hero.tsx`) for a `<Image>` once you have shots.

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck    # tsc --noEmit
npm run build        # next build (generates static [slug] pages)
```

## Deployment

Standard Next.js deploy on Vercel — no env vars required for the marketing site. Set `NEXT_PUBLIC_SITE_URL` once a domain is wired up so the sitemap and OG metadata point at the right host.

## Inspiration

Page structure follows our [BroadwayArtsDistrict](https://github.com/Sweet-Dreams-US/BroadwayArtsDistrict) repo (Next.js App Router, `[slug]` per business). Visual language follows [DonHallsRestaurants](https://github.com/Sweet-Dreams-US/DonHallsRestaurants) — editorial typography, scroll parallax, per-business accent colors, grain texture, marquee ribbon.
