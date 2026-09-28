import About from "../components/About";
import ChapterNav from "../components/ChapterNav";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Publication from "../components/Publication";
import ResumeViewer from "../components/ResumeViewer";
import Technologies from "../components/Technologies";
import { NAME } from "../constants";

export default function Home() {
  return (
    <div className="container mx-auto flex min-h-screen flex-col px-6 md:px-10 lg:px-16">
      <a
        href="#main"
        className="sr-only rounded-full bg-btn px-4 py-2 text-sm font-medium text-btn-fg focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50"
      >
        Skip to content
      </a>
      <Navbar />
      <ChapterNav />
      <main id="main">
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Education />
        <Publication />
        <Projects />
        <Contact />
      </main>

      {/* Below lg the chapter nav floats at the bottom, so the footer leaves room under its text. */}
      <footer className="mt-auto border-t border-line-1 pt-8 pb-24 text-center text-[0.8125rem] text-fg-4 lg:pb-8">
        <p>
          © {new Date().getFullYear()} {NAME}. All rights reserved.
        </p>
      </footer>
      <ResumeViewer />
    </div>
  );
}
