import { FaExternalLinkAlt } from "react-icons/fa";

type Props = {
  href: string;
  children: React.ReactNode;
};

const LinkPill = ({ href, children }: Props) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-950"
  >
    {children}
    <FaExternalLinkAlt aria-hidden="true" className="size-2.5" />
  </a>
);

export default LinkPill;
