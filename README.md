# Mushfiqus Salehin Afnan — Portfolio

Personal portfolio built with Next.js (App Router), React, TypeScript and Tailwind CSS.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

Site content (bio, experience, education, certifications, publications, projects, contact details) lives in `src/constants/index.ts`.

## CV

The CV is kept in Google Drive (`RESUME_DRIVE_ID` in `src/constants/index.ts`) and opens in an in-page viewer instead of a new tab.

- `/cv.pdf` fetches the file from Drive and serves it from the site's own domain, cached for an hour. To update the CV, upload a new version of the same Drive file (Manage versions) and the site shows it within the hour. If you use a different file, change `RESUME_DRIVE_ID`. The file must be shared as "Anyone with the link".
- The viewer draws the pages with [pdf.js](https://mozilla.github.io/pdf.js/), keeps the PDF's links clickable, and offers download and open-in-new-tab. pdf.js is only downloaded when someone hovers over or opens a CV link.

## Project screenshots

Projects with a live link keep their screenshots up to date on their own. Every morning `.github/workflows/screenshots.yml` runs `scripts/capture-screenshots.mjs`, which opens each live site in Chrome at 1920 × 960 and compares it with the screenshot in `src/assets/projects/`. When more than 1.5% of it changed, the new screenshot is committed, which redeploys the site; smaller differences, like a clock or today's date on the page, are ignored. A site that fails to load keeps its old screenshot and fails the run, which GitHub notifies you about.

- To refresh now, open the Actions tab, pick Screenshots and click Run workflow. `npm run screenshots` does the same locally (Node 22.18 or newer and Google Chrome); commit the files it changes.
- `capture` on a project in `src/constants/index.ts` sets how its site is loaded: the colour scheme, a sleeping backend to wake first, `localStorage` entries to set before the page loads, such as sample data for an app that starts empty, and `waitFor`, a selector the page must show before its screenshot counts. Sepia waits for a post, so while its feed is empty the old screenshot stays and the run fails, telling you the live demo has nothing to show.
- A new project imports its screenshot like the others. With a live link, run `npm run screenshots` to create the file; without one, add a screenshot yourself.

## Notes

- Sections are server components; the only client JavaScript is the theme toggle, the scroll-reveal observer, the project screenshot lightbox, the CV viewer and the contact form.
- Light and dark themes: the toggle in the header stores the choice in `localStorage` (`theme`), and until a visitor picks one the site follows the system setting. Colours are defined once as CSS variables in `src/app/globals.css` (light on `:root`, dark under `[data-theme="dark"]`), and an inline script in `src/app/layout.tsx` applies the theme before the first paint.
- The contact form posts to [FormSubmit](https://formsubmit.co) in the background, and falls back to a normal form post without JavaScript.
- Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://example.com`) when deploying outside Vercel so the sitemap, robots.txt and social previews use the right domain. On Vercel the production URL is picked up automatically.
- Security headers (CSP, HSTS, frame protection, etc.) are configured in `next.config.ts`.
