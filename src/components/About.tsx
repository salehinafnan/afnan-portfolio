import Image from "next/image";
import aboutImg from "../assets/afnanAbout.webp";
import { ABOUT_TEXT } from "../constants";
import SectionHeading from "./SectionHeading";

const About = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-16 sm:py-20">
      <SectionHeading id="about-heading">
        About <span className="text-neutral-500">Me</span>
      </SectionHeading>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div data-reveal="left" className="relative flex justify-center">
          <div
            aria-hidden="true"
            className="glow absolute top-1/2 left-1/2 size-72 sm:size-80 -translate-x-1/2 -translate-y-1/2"
          />
          <div className="glass relative w-full max-w-sm rounded-3xl p-2">
            <Image
              src={aboutImg}
              alt="Afnan sitting on a chair, smiling"
              sizes="(max-width: 440px) calc(100vw - 64px), 368px"
              placeholder="blur"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>
        <div data-reveal="right" className="flex justify-center lg:justify-start">
          <p className="max-w-xl text-sm leading-relaxed font-light tracking-wide text-neutral-300/90 lg:py-6 lg:text-base">
            {ABOUT_TEXT}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
