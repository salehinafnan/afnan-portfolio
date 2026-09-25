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
    className="inline-flex items-center gap-1.5 rounded-full border border-neutral-700 px-3 py-1 text-xs font-medium text-neutral-300 transition-colors hover:border-blue-500/40 hover:text-blue-300"
  >
    {children}
    <FaExternalLinkAlt aria-hidden="true" className="size-2.5" />
  </a>
);

export default LinkPill;
