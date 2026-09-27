# Afnan's Portfolio

This is the repository for my personal portfolio website, live at **[salehinafnan.vercel.app](https://salehinafnan.vercel.app)**.

It's a single page about me: who I am, the technologies I work with, my experience, education and research, and the projects I've built, with a contact form at the end. My CV opens right on the page too.

## How I built it

I built the site with Next.js, React and TypeScript, styled it with Tailwind CSS, and host it on Vercel. All of its text, from my bio to my project descriptions, lives in one file, [`src/constants/index.ts`](src/constants/index.ts), so keeping the site up to date mostly means editing that file.

My CV is stored in Google Drive and shown in a viewer built with pdf.js, so a new version uploaded to Drive shows up on the site without a redeploy. Every week, a GitHub Actions workflow takes fresh screenshots of most of my live projects and updates their previews on the site when something has changed. The site also has light and dark themes, and messages from the contact form are delivered through FormSubmit.
