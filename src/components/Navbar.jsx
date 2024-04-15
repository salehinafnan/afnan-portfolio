import logo from "../assets/afnanLogo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaFilePdf } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2"
          style={{ maxHeight: "28px" }}
          src={logo}
          alt="logo"
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <a href="https://your-resume-url" download>
          <FaFilePdf />
        </a>
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
