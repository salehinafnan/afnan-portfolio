# Mushfiqus Salehin Afnan — Portfolio

Personal portfolio built with Next.js (App Router), React, TypeScript and Tailwind CSS.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

Site content (bio, experience, publications, projects, contact details) lives in `src/constants/index.ts`.

## Notes

- Sections are server components; the only client JavaScript is the scroll-reveal observer, the project screenshot lightbox and the contact form.
- The contact form posts to [FormSubmit](https://formsubmit.co) in the background, and falls back to a normal form post without JavaScript.
- Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://example.com`) when deploying outside Vercel so the sitemap, robots.txt and social previews use the right domain. On Vercel the production URL is picked up automatically.
- Security headers (CSP, HSTS, frame protection, etc.) are configured in `next.config.ts`.
