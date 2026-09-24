import Image from "next/image";
import profilePic from "../assets/afnanProfile.webp";
import { HERO_CONTENT, NAME, ROLE } from "../constants";

// Hero lines all start on the first frame (nothing waits to paint, which keeps
// LCP fast) and cascade in through increasing durations instead of delays.
const duration = (ms: number, delay = 0) =>
  ({ "--duration": `${ms}ms`, "--delay": `${delay}ms` }) as React.CSSProperties;

const Hero = () => {
  return (
    <section aria-label="Introduction" className="flex min-h-[70vh] items-center pb-4 lg:mb-16">
      <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1
            className="enter-left pb-4 text-[clamp(2rem,10vw,2.75rem)] leading-tight font-light tracking-tight sm:text-5xl lg:text-[clamp(2.25rem,3.4vw,3.25rem)]"
            style={duration(700)}
          >
            Mushfiqus Salehin <span className="text-gradient">Afnan</span>
          </h1>
          <p
            className="enter-left text-gradient-alt text-xl font-medium tracking-tight sm:text-2xl lg:text-3xl"
            style={duration(900)}
          >
            {ROLE}
          </p>
          <p
            className="enter-left my-6 max-w-xl py-4 text-left text-sm leading-relaxed font-light tracking-wide text-neutral-300/90 lg:text-base"
            style={duration(1100)}
          >
            {HERO_CONTENT}
          </p>
          <div className="enter-left flex flex-wrap justify-center gap-3 sm:gap-4" style={duration(1300)}>
            <a
              href="#projects"
              className="rounded-full bg-neutral-100 px-5 py-3 sm:px-6 font-medium text-neutral-900 transition-colors hover:bg-neutral-300"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="glass rounded-full px-5 py-3 sm:px-6 font-medium transition-colors hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="relative flex justify-center lg:p-8">
          <div
            aria-hidden="true"
            className="glow absolute top-1/2 left-1/2 size-72 sm:size-96 -translate-x-1/2 -translate-y-1/2"
          />
          <div className="enter-zoom glass relative w-full max-w-[436px] rounded-3xl p-2" style={duration(1000, 150)}>
            <Image
              src={profilePic}
              alt={NAME}
              sizes="(max-width: 500px) calc(100vw - 64px), 420px"
              placeholder="blur"
              loading="eager"
              fetchPriority="high"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
