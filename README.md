# TALISMAN, online store of pneumatic spearguns

Static site built with [Astro](https://astro.build), no backend. Content comes from the
[Sanity](https://sanity.io) headless CMS; without Sanity env vars the build falls back to
mock data in `src/data/*.json` (its structure matches the Sanity schemas 1:1).

## Commands

| Command           | Action                                        |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Dev server at `localhost:4321`                |
| `npm run build`   | Build the site into `./dist/`                 |
| `npm run preview` | Preview the built site locally                |

## Structure

```text
src/
├── components/     Topbar, Footer, ProductCard, GunSvg (product art), Features, Cta
├── layouts/        Base.astro, the shared shell + cart script (localStorage)
├── lib/
│   ├── data.ts     Single content access point (Sanity or mock)
│   ├── sanity.ts   Sanity client (enabled via env vars)
│   ├── i18n.ts     RU/EN dictionaries and locale helpers
│   └── types.ts    Product and Post types
├── data/           Mock data (products, news), build fallback when CMS is off
├── pages/          Home, catalog, product page, about, service, news, cart
└── styles/         global.css, the project design system
studio/             Sanity Studio: schemaTypes/ (product, post), locales/ (ru/en UI strings)
```

## Localization

- Russian is the primary language, no prefix: `/catalog`, `/news`
- English uses a prefix: `/en/catalog` (until content is translated in the CMS,
  EN pages show Russian content with an English interface)

## Cart and orders

The cart lives in `localStorage`, no backend required. Checkout:

- with `PUBLIC_ORDER_ENDPOINT` set (Formspree/Basin/own webhook) the order is sent as a POST request;
- otherwise an email draft to `info@talisman.by` opens with the order summary.

## Sanity

Project `786bstzj`, dataset `production` (managed at https://www.sanity.io/manage).

- Content editing: `cd studio && npm run dev` → `localhost:3333`.
- Site build reads the CMS when `PUBLIC_SANITY_PROJECT_ID` is set (copy `.env.example` → `.env`).
- Studio field labels are localized via dictionaries in `studio/locales/`
  (Russian by default, switch with `SANITY_STUDIO_LOCALE`).

## Deploy

The build output is static files in `dist/`. Any static hosting works: Netlify, Vercel,
Cloudflare Pages. After content updates in Sanity the site must be rebuilt (set up a
"Sanity to rebuild" webhook on the hosting).
