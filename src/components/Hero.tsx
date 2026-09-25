import Image from "next/image";
import { FiArrowRight, FiFileText } from "react-icons/fi";
import profilePic from "../assets/afnanProfile.webp";
import { HERO_CONTENT, NAME, RESUME_PDF, ROLE } from "../constants";

// Hero lines all start on the first frame (nothing waits to paint, which keeps
// LCP fast) and cascade in through increasing durations instead of delays.
const duration = (ms: number, delay = 0) =>
  ({ "--duration": `${ms}ms`, "--delay": `${delay}ms` }) as React.CSSProperties;

const secondaryButton =
  "inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-5 py-3 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-300 hover:bg-white sm:px-6";

const Hero = () => {
  return (
    <section aria-label="Introduction" className="flex min-h-[70vh] items-center pb-4 lg:mb-16">
      <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1
            className="enter-left pb-5 text-[clamp(2.5rem,11vw,3.5rem)] leading-[1.05] font-semibold tracking-[-0.035em] text-neutral-950 sm:text-6xl lg:text-[clamp(3.25rem,4.6vw,4.5rem)]"
            style={duration(700)}
          >
            Mushfiqus Salehin{" "}
            <span className="text-gradient pr-[0.08em] font-serif text-[1.12em] font-normal tracking-normal italic">
              Afnan
            </span>
          </h1>
          <p
            className="enter-left text-gradient-alt text-lg font-medium tracking-tight sm:text-xl lg:text-2xl"
            style={duration(900)}
          >
            {ROLE}
          </p>
          <p
            className="enter-left mt-6 mb-10 max-w-xl text-left text-base leading-7 text-neutral-600 lg:text-[1.0625rem] lg:leading-[1.8]"
            style={duration(1100)}
          >
            {HERO_CONTENT}
          </p>
          <div className="enter-left flex flex-wrap justify-center gap-3 lg:justify-start" style={duration(1300)}>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white shadow-[0_8px_20px_-8px_rgba(0,0,0,0.5)] transition-colors hover:bg-neutral-800 sm:px-6"
            >
              View Work
              <FiArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>
            <a href="#contact" className={secondaryButton}>
              Contact Me
            </a>
            <a
              href={RESUME_PDF}
              target="_blank"
              rel="noopener"
              data-resume
              aria-haspopup="dialog"
              className={secondaryButton}
            >
              <FiFileText aria-hidden="true" className="size-4" />
              View CV
            </a>
          </div>
        </div>
        <div className="relative flex justify-center lg:p-8">
          <div
            aria-hidden="true"
            className="glow absolute top-1/2 left-1/2 size-80 -translate-x-1/2 -translate-y-1/2 sm:size-[28rem]"
          />
          <div
            className="enter-zoom glass-card relative w-full max-w-109 rounded-[1.75rem] p-2"
            style={duration(1000, 150)}
          >
            <Image
              src={profilePic}
              alt={NAME}
              sizes="(max-width: 500px) calc(100vw - 64px), 420px"
              placeholder="blur"
              loading="eager"
              fetchPriority="high"
              className="w-full rounded-[1.25rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
