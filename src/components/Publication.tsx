import { Fragment } from "react";
import { NAME, PUBLICATIONS } from "../constants";
import LinkPill from "./LinkPill";
import SectionHeading from "./SectionHeading";

const Publication = () => {
  return (
    <section id="publications" aria-labelledby="publications-heading" className="py-16 sm:py-20">
      <SectionHeading id="publications-heading">Publications</SectionHeading>
      <ol className="mx-auto max-w-4xl space-y-6 sm:space-y-8">
        {PUBLICATIONS.map((pub, index) => (
          <li key={pub.title} data-reveal style={{ "--reveal-delay": `${index * 100}ms` } as React.CSSProperties}>
            <article className="glass-card flex flex-col gap-3 rounded-3xl p-6 transition-colors hover:bg-white/3 sm:p-8 md:flex-row md:gap-8">
              <p className="shrink-0 font-mono text-xs tracking-wider text-balance text-neutral-400 uppercase md:w-1/4 md:pt-1.5">{pub.date}</p>
              <div className="md:w-3/4">
                <h3 className="text-lg leading-snug font-semibold tracking-tight text-neutral-200 sm:text-xl">{pub.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">
                  {pub.authors.map((author, i) => (
                    <Fragment key={author}>
                      {i > 0 && ", "}
                      {author === NAME ? <span className="font-medium text-neutral-200">{author}</span> : author}
                    </Fragment>
                  ))}
                </p>
                <p className="mt-1 text-sm text-neutral-400 italic">{pub.venue}</p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-neutral-400">{pub.description}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-blue-500/20 bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-300">
                    {pub.publisher}
                  </span>
                  <span className="rounded-full border border-neutral-700 bg-neutral-800/50 px-3 py-1 text-xs font-medium text-neutral-300">
                    {pub.type}
                  </span>
                  <LinkPill href={pub.link}>
                    Read paper<span className="sr-only">: {pub.title}</span>
                  </LinkPill>
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
