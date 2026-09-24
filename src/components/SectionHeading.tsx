type Props = {
  id: string;
  children: React.ReactNode;
};

const SectionHeading = ({ id, children }: Props) => {
  return (
    <h2
      id={id}
      data-reveal="down"
      className="mb-12 text-center text-3xl font-light tracking-tight sm:mb-16 lg:text-4xl"
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
