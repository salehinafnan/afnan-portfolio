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

## Notes

- Sections are server components; the only client JavaScript is the scroll-reveal observer, the project screenshot lightbox, the CV viewer and the contact form.
- The contact form posts to [FormSubmit](https://formsubmit.co) in the background, and falls back to a normal form post without JavaScript.
- Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://example.com`) when deploying outside Vercel so the sitemap, robots.txt and social previews use the right domain. On Vercel the production URL is picked up automatically.
- Security headers (CSP, HSTS, frame protection, etc.) are configured in `next.config.ts`.
