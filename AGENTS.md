# TALISMAN, online store of pneumatic spearguns

Static Astro 5 site **without a backend**. Content comes from the Sanity headless CMS
(project `786bstzj`, dataset `production`); without the env vars the build falls back
to mock data. Communication with the client is in Russian; all files (code, comments,
docs) are in English. Russian appears only in site content and locale dictionaries.

## Writing style

- Follow industry best practices in code and docs; keep them looking like an
  experienced human engineer wrote them, with no AI-typical tells.
- No em dashes ("—") in code, comments, docs, or commit messages: use a plain
  hyphen or rephrase. Site content (pages, dictionaries, mock data) keeps normal
  Russian typography and is exempt.

## Key decisions (do not change without discussion)

- **Stack:** Astro (static output), no UI frameworks; interactivity via vanilla `<script>` in components.
- **CMS:** Sanity. Single data access point is `src/lib/data.ts`: when
  `PUBLIC_SANITY_PROJECT_ID` is set (see `.env.example`), data comes from Sanity (GROQ),
  otherwise from `src/data/products.json` and `src/data/posts.json`. Mock data structure
  matches the schemas in `studio/schemaTypes/` 1:1; when changing fields, update both places.
- **Sanity Studio:** a separate app in `studio/` (own package.json; `npm run dev`
  inside the folder). No Russian strings in Studio code: field labels live in
  `studio/locales/` dictionaries (ru by default, switch via `SANITY_STUDIO_LOCALE`).
- **i18n:** RU is primary, no prefix; EN is `/en/...` via fallback rewrite
  (astro.config.mjs). UI strings live in `src/lib/i18n.ts` dictionaries; EN content is still Russian.
- **Cart:** localStorage (`talisman_cart_v1`), a global script in `src/layouts/Base.astro`
  exposes `window.TalismanCart`. Checkout is a form on `/cart`: POST to
  `PUBLIC_ORDER_ENDPOINT`; when the endpoint is empty, mailto to info@talisman.by.
- **Product art:** parametric SVG `src/components/GunSvg.astro`
  (barrel length scales with `lengthMm`, separate variants for parts/accessories).
- **Design:** the whole design system is in `src/styles/global.css` (CSS variables, light theme,
  green accent #1a7a52, Playfair Display + DM Sans fonts). The reference mockup is a
  single-file `talisman-shop.html` (kept by the client); build new pages from existing
  global.css classes.

## Structure

- `src/pages/`: index, catalog/index, catalog/[slug], about, service, news/index, news/[slug], cart
- `src/components/`: Topbar, Footer, ProductCard, GunSvg, Features, Cta
- `src/lib/`: data.ts (content access), sanity.ts, i18n.ts, types.ts
- `studio/`: Sanity Studio with `schemaTypes/` (product, post) and `locales/` (ru/en label dictionaries)

## Development

Run the dev server in the background:

```
astro dev --background
```

Manage it with `astro dev stop`, `astro dev status`, `astro dev logs`.
Pre-commit check: `npm run build` (should generate ~34 pages, including /en).

## Upcoming tasks (status as of July 2026)

1. ~~Create the Sanity project, deploy Studio, copy schemas, fill in content~~ Done:
   project `786bstzj`, content imported, the build reads from the CMS.
2. Set up order intake from the cart (`PUBLIC_ORDER_ENDPOINT`).
3. Deploy to static hosting (Netlify/Cloudflare Pages) + rebuild webhook from Sanity.
4. Translate content to EN (now that the CMS is connected).

## Documentation

Full documentation: https://docs.astro.build

- [Routing](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Internationalization](https://docs.astro.build/en/guides/internationalization/)
