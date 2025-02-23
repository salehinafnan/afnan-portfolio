import logo from "../assets/afnanLogo.webp";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="my-4 mb-20 flex items-center justify-between py-4">
      <motion.div whileHover={{ scale: 1.1 }} className="flex flex-shrink-0 items-center">
        <a href="/">
          <img className="h-4 sm:h-6" src={logo} alt="logo" />
        </a>
      </motion.div>
      <div className="flex items-center justify-center gap-3 text-xl md:text-2xl">
        <a href="https://github.com/salehinafnan" target="_blank" rel="noopener noreferrer">
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaGithub />
          </motion.div>
        </a>
        <a
          href="https://www.linkedin.com/in/salehinafnan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaLinkedin />
          </motion.div>
        </a>
        <a
          href="https://drive.google.com/file/d/1_C_VLskkKYOJ9Tz2w2eHnAXnOTvXFzOu/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div whileHover={{ scale: 1.2 }}>
            <IoDocumentTextOutline />
          </motion.div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
