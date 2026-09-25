import About from "../components/About";
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
        className="sr-only rounded-full bg-neutral-950 px-4 py-2 text-sm font-medium text-white focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50"
      >
        Skip to content
      </a>
      <Navbar />
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

      <footer className="mt-auto border-t border-neutral-200 py-8 text-center text-sm text-neutral-500">
        <p>
          © {new Date().getFullYear()} {NAME}. All rights reserved.
        </p>
      </footer>
      <ResumeViewer />
    </div>
  );
}
