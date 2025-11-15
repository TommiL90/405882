# Repository Guidelines

## Project Structure & Module Organization
- `html/` holds the production site: `css/` for global styling, `js/` for interaction (`script.js`, Swiper, WOW), `fonts/` and `images/` for bundled assets, plus SEO aides (`robots.txt`, `sitemap.xml`, `recomendaciones-seo.txt`).
- `documentation/` mirrors the site shell for reference drafts; keep synced only when marketing copy changes.
- `screenshots/` stores UI captures required in pull requests and release notes.
- Root files such as `vercel.json` and `package.json` control routing, headers, and the Vercel workflow; update them in tandem with asset or path changes.

## Build, Test, and Development Commands
- `npm install` installs the Vercel CLI locally so `npm` scripts resolve.
- `npm run dev` launches `vercel dev` (default: `http://localhost:3000`) serving the static assets with rewrite rules applied.
- `npm run build` is a safeguard step; it validates that no build tooling is needed and should exit cleanly.
- `npm run deploy` runs `vercel --prod`; ensure previews pass before executing.

## Coding Style & Naming Conventions
- HTML in `html/index.html` uses semantic sections, lowercase tags, and tab indentation; keep class names in kebab-case (`header-mobile-wrap`) and avoid inline styles.
- CSS favors modular blocks scoped by section (`.services`, `.testimonials`); extend with existing custom properties or add new ones at the top of `style.css`.
- JavaScript is browser-side only; wrap logic inside `DOMContentLoaded`, prefer `const`/`let`, and group jQuery interactions by feature with clear comments.
- Assets should remain optimized WebP/SVG; replicate directory patterns when introducing new media.

## Testing Guidelines
- There is no automated suite; perform manual smoke tests in Chromium and WebKit via `npm run dev`, covering navigation menu, counters, sliders, and contact anchors.
- Run Lighthouse or PageSpeed snapshots on critical pages before merging significant layout or SEO changes and attach results when deviations exceed ±5%.

## Commit & Pull Request Guidelines
- Follow the existing Conventional Commit style (`type: summary`), e.g. `fix: actualizar URL de imagen para metadatos` or `feat: agregar iconos de favicon`.
- Write pull requests with: purpose summary, linked issue (if any), deployment checklist (`npm run dev`, Lighthouse), and updated screenshots stored under `screenshots/` for UI changes.
