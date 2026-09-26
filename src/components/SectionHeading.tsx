type Props = {
  id: string;
  children: React.ReactNode;
};

const SectionHeading = ({ id, children }: Props) => {
  return (
    <h2
      id={id}
      data-reveal="down"
      className="mb-12 text-center text-[2.125rem] leading-none font-medium tracking-[-0.035em] text-balance text-neutral-50 sm:mb-16 sm:text-[2.625rem] xl:text-[3rem]"
    >
      {children}
    </h2>
  );
};

// Serif italic accent for a word in a heading.
export const Accent = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`pr-[0.06em] font-serif text-[1.1em] font-normal tracking-normal italic ${className}`}>
    {children}
  </span>
);

export default SectionHeading;
