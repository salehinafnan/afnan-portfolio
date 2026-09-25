import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaRegFileAlt } from "react-icons/fa";
import logo from "../assets/afnanLogo.webp";
import { RESUME_PDF, SOCIAL_LINKS } from "../constants";

const LINKS = [
  { href: RESUME_PDF, label: "Resume / CV", Icon: FaRegFileAlt, hover: "hover:text-white", resume: true },
  { href: SOCIAL_LINKS.linkedin, label: "LinkedIn", Icon: FaLinkedin, hover: "hover:text-blue-400" },
  { href: SOCIAL_LINKS.github, label: "GitHub", Icon: FaGithub, hover: "hover:text-white" },
  { href: SOCIAL_LINKS.instagram, label: "Instagram", Icon: FaInstagram, hover: "hover:text-pink-400" },
  { href: SOCIAL_LINKS.facebook, label: "Facebook", Icon: FaFacebook, hover: "hover:text-blue-500" },
];

const Navbar = () => {
  return (
    <header>
      <nav aria-label="Main" className="mb-8 flex items-center justify-between py-6">
        <Link
          href="/"
          prefetch={false}
          aria-label="Home"
          className="enter-left shrink-0 rounded transition-transform duration-300 hover:scale-105"
        >
          <Image src={logo} alt="Afnan" className="h-5 w-auto" unoptimized loading="eager" />
        </Link>
        <ul className="enter-right -mr-1.5 flex items-center gap-1 text-xl text-neutral-300 sm:-mr-2 sm:gap-3">
          {LINKS.map(({ href, label, Icon, hover, resume }) => (
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
                className={`block rounded-full p-1.5 transition-colors duration-300 sm:p-2 ${hover}`}
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
