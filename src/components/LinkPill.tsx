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
    className="inline-flex items-center gap-1.5 rounded-full border border-line-2 px-3 py-1 text-xs font-medium text-fg-2 transition-colors hover:border-line-3 hover:text-fg-1"
  >
    {children}
    <FaExternalLinkAlt aria-hidden="true" className="size-2.5" />
  </a>
);

export default LinkPill;
