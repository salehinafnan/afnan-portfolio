import { FiAward, FiCamera, FiCode, FiGlobe } from "react-icons/fi";
import { CREDENTIALS, EDUCATION, type Credential } from "../constants";
import LinkPill from "./LinkPill";
import SectionHeading from "./SectionHeading";

const ICONS: Record<Credential["kind"], typeof FiAward> = {
  certificate: FiAward,
  language: FiGlobe,
  code: FiCode,
  photography: FiCamera,
};

const Education = () => {
  return (
    <section id="education" aria-labelledby="education-heading" className="py-16 sm:py-20">
      <SectionHeading id="education-heading">Education</SectionHeading>
      <div data-reveal className="mx-auto max-w-4xl">
        <article className="glass-card flex flex-col gap-3 rounded-3xl p-6 transition-colors hover:bg-fg-1/3 sm:p-8 md:flex-row md:gap-8">
          <p className="shrink-0 font-mono text-[0.6875rem] tracking-[0.16em] text-balance text-fg-3 uppercase md:w-1/4 md:pt-2">
            {EDUCATION.period}
          </p>
          <div className="md:w-3/4">
            <h3 className="text-lg font-semibold tracking-tight text-balance text-fg-1 sm:text-xl">
              {EDUCATION.degree}
            </h3>
            <p className="mt-1 text-sm font-medium text-fg-2 sm:text-base">{EDUCATION.school}</p>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-pretty text-fg-3">{EDUCATION.description}</p>
            <div className="mt-4">
              <LinkPill href={EDUCATION.certificate}>
                Certificate<span className="sr-only">: {EDUCATION.degree}</span>
              </LinkPill>
            </div>
          </div>
        </article>
      </div>

      <div className="mx-auto mt-20 max-w-6xl sm:mt-24">
        <h3
          data-reveal="down"
          className="mb-10 text-center text-2xl font-medium tracking-[-0.02em] text-fg-1 sm:mb-12 sm:text-[1.75rem]"
        >
          Certifications &amp; Activities
        </h3>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {CREDENTIALS.map((credential, index) => {
            const Icon = ICONS[credential.kind];
            return (
              <li
                key={credential.title}
                data-reveal
                style={{ "--reveal-delay": `${(index % 3) * 100}ms` } as React.CSSProperties}
              >
                <article className="glass-card flex h-full flex-col rounded-2xl p-6">
                  <Icon aria-hidden="true" className="mb-5 size-6 text-fg-3" />
                  <h4 className="mb-1 font-semibold tracking-tight text-balance text-fg-1">{credential.title}</h4>
                  <p className="grow text-sm leading-relaxed text-fg-3">{credential.detail}</p>
                  {credential.links.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {credential.links.map((link) => (
                        <LinkPill key={link.href} href={link.href}>
                          {link.label}
                          <span className="sr-only">: {credential.title}</span>
                        </LinkPill>
                      ))}
                    </div>
                  )}
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Education;
