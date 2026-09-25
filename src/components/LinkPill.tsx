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
    className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-surface px-3 py-1 text-xs font-medium text-stone-700 transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
  >
    {children}
    <FaExternalLinkAlt aria-hidden="true" className="size-2.5" />
  </a>
);

export default LinkPill;
