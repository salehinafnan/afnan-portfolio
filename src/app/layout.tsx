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
  title: "Afnan's Portfolio",
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
    title: "Afnan's Portfolio",
    description,
    siteName: NAME,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afnan's Portfolio",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
};

// Runs before anything paints: a saved choice wins, otherwise the system setting.
// The theme lives in data-theme on <html>; ThemeToggle keeps this in step.
const themeScript = `(()=>{let t;try{t=localStorage.getItem("theme")}catch{}
if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";
document.documentElement.dataset.theme=t;
for(const m of document.querySelectorAll('meta[name="theme-color"]'))m.content=t==="dark"?"#000000":"#fafafa"})()`;

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

// Light pulses that drift along the wafer's grid lines (see .pulse in globals.css).
// --line picks the grid line; the rest vary the pace so the pattern never visibly repeats.
const PULSES = [
  { line: 22, slant: "\\", duration: 14, delay: -3, length: 11, peak: 0.7 },
  { line: 29, slant: "/", duration: 17, delay: -9, length: 13, peak: 0.6 },
  { line: 33, slant: "\\", duration: 12, delay: -7, length: 9, peak: 0.8 },
  { line: 25, slant: "/", duration: 15, delay: -1, length: 10, peak: 0.75 },
  { line: 39, slant: "\\", duration: 19, delay: -12, length: 12, peak: 0.55 },
  { line: 36, slant: "/", duration: 13, delay: -5, length: 9, peak: 0.75 },
  { line: 27, slant: "\\", duration: 16, delay: -14, length: 10, peak: 0.6 },
  { line: 42, slant: "/", duration: 18, delay: -8, length: 11, peak: 0.55 },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: the theme script above adds data-theme before React hydrates.
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased selection:bg-sel selection:text-sel-fg">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <div aria-hidden="true" className="spotlight pointer-events-none fixed inset-0 -z-10" />
        {/* Scrolls with the page, so the pattern stays behind the hero. */}
        <div aria-hidden="true" className="wafer pointer-events-none absolute inset-x-0 top-0 -z-10 h-screen">
          {PULSES.map(({ line, slant, duration, delay, length, peak }) => (
            <span
              key={`${slant}${line}`}
              className="pulse"
              data-slant={slant}
              style={
                {
                  "--line": line,
                  "--duration": `${duration}s`,
                  "--delay": `${delay}s`,
                  "--length": `${length}rem`,
                  "--peak": peak,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
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
