import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaRegFileAlt } from "react-icons/fa";
import { RESUME_PDF, SOCIAL_LINKS } from "../constants";

const LINKS = [
  { href: RESUME_PDF, label: "Resume / CV", Icon: FaRegFileAlt, resume: true },
  { href: SOCIAL_LINKS.linkedin, label: "LinkedIn", Icon: FaLinkedin },
  { href: SOCIAL_LINKS.github, label: "GitHub", Icon: FaGithub },
  { href: SOCIAL_LINKS.instagram, label: "Instagram", Icon: FaInstagram },
  { href: SOCIAL_LINKS.facebook, label: "Facebook", Icon: FaFacebook },
];

const Navbar = () => {
  return (
    <header>
      <nav aria-label="Main" className="mb-8 flex items-center justify-between py-6">
        <Link
          href="/"
          prefetch={false}
          aria-label="Home"
          className="enter-left shrink-0 rounded font-serif text-[1.75rem] leading-none text-neutral-950 italic transition-opacity duration-300 hover:opacity-70"
        >
          Afnan<span className="text-neutral-400">.</span>
        </Link>
        <ul className="enter-right -mr-1.5 flex items-center gap-1 text-xl text-neutral-500 sm:-mr-2 sm:gap-3">
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
                className="block rounded-full p-1.5 transition-colors duration-300 hover:text-neutral-950 sm:p-2"
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
