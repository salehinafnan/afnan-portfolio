import Link from "next/link";
import { FaGithub, FaLinkedin, FaRegFileAlt } from "react-icons/fa";
import { RESUME_PDF, SOCIAL_LINKS } from "../constants";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: RESUME_PDF, label: "Resume / CV", Icon: FaRegFileAlt, resume: true },
  { href: SOCIAL_LINKS.linkedin, label: "LinkedIn", Icon: FaLinkedin },
  { href: SOCIAL_LINKS.github, label: "GitHub", Icon: FaGithub },
];

const iconButton = "block rounded-full p-1.5 transition-colors duration-300 hover:text-fg-1 sm:p-2";

const Navbar = () => {
  return (
    <header>
      <nav aria-label="Main" className="mb-8 flex items-center justify-between py-6">
        <Link
          href="/"
          prefetch={false}
          aria-label="Home"
          className="enter-left shrink-0 rounded font-serif text-[2rem] leading-none text-fg-1 italic transition-opacity duration-300 [-webkit-text-stroke:0.2px_currentColor] hover:opacity-70"
        >
          Afnan<span className="text-fg-4">.</span>
        </Link>
        <ul className="enter-right -mr-1.5 flex items-center gap-1 text-xl text-fg-3 sm:-mr-2 sm:gap-3">
          <li>
            <ThemeToggle className={iconButton} />
          </li>
          {LINKS.map(({ href, label, Icon, resume }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                // Opens the in-page CV viewer (see ResumeViewer).
                data-resume={resume}
                aria-haspopup={resume ? "dialog" : undefined}
                className={iconButton}
              >
                <Icon aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
