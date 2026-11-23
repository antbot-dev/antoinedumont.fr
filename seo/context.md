# Context — antoinedumont.fr

Built from the repo (`index.html`, commit 412cd48) and the live site on 2026-11-23. Every fact names its source.

## What the site is
- One-page personal CV site (Vite + React shell, static HTML in `index.html`, deployed to OVH Apache by `.github/workflows/deploy.yml` on push to `main`). Source: repo.
- One extra page, `/innovorder/`, a private application letter with `noindex, nofollow`. Keep it out of the sitemap. Source: `public/innovorder/index.html`.
- All main content is in the server HTML (no client-only rendering). Source: `curl https://antoinedumont.fr/`.

## The person (only what the page states)
- Antoine Dumont, Head of Marketing & Applied AI, Paris. Head of Marketing at Go1 since 2022 (Marketing + SDR, SEMEA). Source: `index.html` hero and timeline.
- Before: CMO Coorpacademy 2017–2022 (ARR 1M to 10M), Laureate 2012–2017, agency/traffic/startup 2001–2012. Source: `index.html` #experience.
- ESIEA engineering degree, Montpellier Business School MBA. Source: `index.html` #education.
- AntBot.dev: his agent harness; AntBot Podcast, a 5-minute AI briefing in WhatsApp. Source: `index.html` #ai.
- 14k+ LinkedIn followers, AI & Tech Trends newsletter. Source: `index.html` hero and metrics.

## Buyer and conversion
- Recruiters, founders and teams looking for a Head of Marketing / applied-AI GTM profile in Paris.
- Conversion: contact (email copy button in #contact) or a click to LinkedIn. No analytics on the site, so neither is measured today.

## Competitors (who occupies the queries)
See `competitors/README.md`.
