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
            <article className="glass-card flex flex-col gap-3 rounded-3xl p-6 transition-colors hover:bg-fg-1/3 sm:p-8 md:flex-row md:gap-8">
              <p className="shrink-0 font-mono text-[0.6875rem] tracking-[0.16em] text-balance text-fg-3 uppercase md:w-1/4 md:pt-2">
                {pub.date}
              </p>
              <div className="md:w-3/4">
                <h3 className="text-lg leading-snug font-semibold tracking-tight text-balance text-fg-1 sm:text-xl">
                  {pub.title}
                </h3>
                <p className="mt-2 text-sm text-fg-3">
                  {pub.authors.map((author, i) => (
                    <Fragment key={author}>
                      {i > 0 && ", "}
                      {author === NAME ? <span className="font-medium text-fg-2">{author}</span> : author}
                    </Fragment>
                  ))}
                </p>
                <p className="mt-1.5 font-serif text-[1.0625rem] leading-snug text-fg-3 italic">{pub.venue}</p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-pretty text-fg-3">{pub.description}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-line-2 bg-chip px-3 py-1 text-xs font-medium text-fg-1">
                    {pub.publisher}
                  </span>
                  <span className="rounded-full border border-line-1 bg-tag px-3 py-1 text-xs font-medium text-fg-3">
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
