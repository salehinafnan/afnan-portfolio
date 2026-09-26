import { EXPERIENCES } from "../constants";
import LinkPill from "./LinkPill";
import SectionHeading from "./SectionHeading";

const Experience = () => {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-16 sm:py-20">
      <SectionHeading id="experience-heading">Experience</SectionHeading>
      <ol className="mx-auto max-w-4xl space-y-6 sm:space-y-8">
        {EXPERIENCES.map((experience, index) => (
          <li
            key={`${experience.role}-${experience.company}`}
            data-reveal
            style={{ "--reveal-delay": `${index * 100}ms` } as React.CSSProperties}
          >
            <article className="glass-card flex flex-col gap-3 rounded-3xl p-6 transition-colors hover:bg-white/3 sm:p-8 md:flex-row md:gap-8">
              <p className="shrink-0 font-mono text-[0.6875rem] tracking-[0.16em] text-balance text-neutral-400 uppercase md:w-1/4 md:pt-2">
                {experience.year}
              </p>
              <div className="md:w-3/4">
                <h3 className="text-lg font-semibold tracking-tight text-balance text-neutral-50 sm:text-xl">
                  {experience.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-neutral-300 sm:text-base">{experience.company}</p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-pretty text-neutral-400">
                  {experience.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs font-medium text-neutral-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                {experience.certificate && (
                  <div className="mt-4">
                    <LinkPill href={experience.certificate}>
                      Certificate<span className="sr-only">: {experience.role}</span>
                    </LinkPill>
                  </div>
                )}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
