type Props = {
  id: string;
  /** Small numbered label above the heading, e.g. "01 — Introduction". */
  eyebrow?: string;
  children: React.ReactNode;
};

const SectionHeading = ({ id, eyebrow, children }: Props) => {
  return (
    <div data-reveal="down" className="mb-12 text-center sm:mb-16">
      {eyebrow && (
        <p aria-hidden="true" className="mb-4 font-mono text-[0.6875rem] tracking-[0.2em] text-neutral-500 uppercase">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="text-[2.125rem] leading-none font-medium tracking-[-0.035em] text-balance text-neutral-50 sm:text-[2.625rem] xl:text-[3rem]"
      >
        {children}
      </h2>
    </div>
  );
};

// Serif italic accent for a word in a heading.
export const Accent = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`pr-[0.06em] font-serif text-[1.1em] font-normal tracking-normal italic ${className}`}>
    {children}
  </span>
);

// Serif italic ampersand: a small typographic accent inside sans-serif lines.
export const Amp = ({ className = "" }: { className?: string }) => (
  <span className={`font-serif text-[1.15em] leading-none font-normal tracking-normal italic ${className}`}>&amp;</span>
);

export default SectionHeading;
