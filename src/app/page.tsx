import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";

const Technologies = dynamic(() => import("../components/Technologies"));
const Experience = dynamic(() => import("../components/Experience"));
const Publication = dynamic(() => import("../components/Publication"));
const Projects = dynamic(() => import("../components/Projects"));
const Contact = dynamic(() => import("../components/Contact"));

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Publication />
      <Projects />
      <Contact />
      
      <footer className="mt-20 py-8 border-t border-neutral-800 text-center text-neutral-500 text-sm">
        <p>© {new Date().getFullYear()} Mushfiqus Salehin Afnan. All rights reserved.</p>
        <p className="mt-2">Designed & Built with Next.js & Tailwind CSS</p>
      </footer>
    </div>
  );
}
