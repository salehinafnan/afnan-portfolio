import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import RevealObserver from "../components/RevealObserver";
import { CONTACT, NAME, ROLE, SITE_URL, SOCIAL_LINKS } from "../constants";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], display: "swap", variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], display: "swap", variable: "--font-geist-mono", preload: false });
// Only used in italic, for accent words and the wordmark.
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
  variable: "--font-instrument-serif",
});

const description =
  "Portfolio of Mushfiqus Salehin Afnan, a web developer and Clinical AI Specialist who builds fast, user-friendly apps with React, Next.js and Node.js and has published research in multimodal machine learning.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${NAME} | Portfolio`,
  description,
  authors: [{ name: NAME }],
  keywords: [
    NAME,
    "Afnan",
    "Web Developer",
    "Clinical AI Specialist",
    "React",
    "Next.js",
    "TypeScript",
    "Machine Learning",
    "Portfolio",
    "Bangladesh",
  ],
  openGraph: {
    type: "website",
    title: `${NAME} | ${ROLE}`,
    description,
    siteName: NAME,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${NAME} | ${ROLE}`,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  url: SITE_URL,
  jobTitle: ROLE,
  email: `mailto:${CONTACT.email}`,
  worksFor: { "@type": "Organization", name: "Commure Bangladesh" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "International Islamic University Chittagong" },
  knowsAbout: ["Web Development", "React", "Next.js", "Node.js", "Machine Learning", "Clinical AI"],
  sameAs: Object.values(SOCIAL_LINKS),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans antialiased selection:bg-neutral-200 selection:text-neutral-950">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.08),rgba(0,0,0,1))]"
        />
        {children}
        <RevealObserver />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
