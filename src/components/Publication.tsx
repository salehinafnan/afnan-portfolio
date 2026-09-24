import { FaExternalLinkAlt } from "react-icons/fa";
import { PUBLICATION } from "../constants";
import SectionHeading from "./SectionHeading";

const Publication = () => {
  return (
    <section id="publications" aria-labelledby="publications-heading" className="py-16 sm:py-20">
      <SectionHeading id="publications-heading">Publications</SectionHeading>
      <ol className="mx-auto max-w-4xl space-y-6 sm:space-y-8">
        {PUBLICATION.map((pub, index) => (
          <li key={pub.title} data-reveal style={{ "--reveal-delay": `${index * 100}ms` } as React.CSSProperties}>
            <article className="glass-card flex flex-col gap-3 rounded-3xl p-6 transition-colors hover:bg-white/[0.03] sm:p-8 md:flex-row md:gap-8">
              <p className="shrink-0 text-sm font-medium text-neutral-400 md:w-1/4">{pub.year}</p>
              <div className="md:w-3/4">
                <h3 className="text-lg leading-snug font-semibold text-neutral-200">{pub.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{pub.description}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {pub.publisher.map((publisher) => (
                    <span
                      key={publisher}
                      className="rounded-full border border-blue-500/20 bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-300"
                    >
                      {publisher}
                    </span>
                  ))}
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-neutral-700 px-3 py-1 text-xs font-medium text-neutral-300 transition-colors hover:border-blue-500/40 hover:text-blue-300"
                  >
                    Read paper <FaExternalLinkAlt aria-hidden="true" className="size-2.5" />
                  </a>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Publication;
