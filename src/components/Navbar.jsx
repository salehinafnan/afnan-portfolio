import logo from "../assets/afnanLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="my-2 mb-20 flex items-center justify-between py-4">
      <div className="flex flex-shrink-0 items-center ml-2">
        <img style={{ maxHeight: "26px" }} src={logo} alt="logo" />
      </div>
      <div className="flex items-center justify-center gap-3 text-2xl mr-2">
        <a
          href="https://www.linkedin.com/in/salehinafnan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/salehinafnan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/sleep.lust"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://drive.google.com/file/d/1A6ovTTlEcbkvBs8j-VO-m61tuR41wu3w/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoDocumentTextOutline />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
