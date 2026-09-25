type Props = {
  id: string;
  children: React.ReactNode;
};

const SectionHeading = ({ id, children }: Props) => {
  return (
    <h2
      id={id}
      data-reveal="down"
      className="mb-12 text-center text-3xl font-semibold tracking-[-0.03em] text-stone-950 sm:mb-16 sm:text-4xl xl:text-[2.75rem]"
    >
      {children}
    </h2>
  );
};

// Serif italic accent for a word in a heading.
export const Accent = ({ children }: { children: React.ReactNode }) => (
  <span className="text-gradient pr-[0.06em] font-serif text-[1.1em] font-normal tracking-normal italic">
    {children}
  </span>
);

export default SectionHeading;
