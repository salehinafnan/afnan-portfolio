import logo from "../assets/afnanLogo.webp";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { motion } from "framer-motion";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Navbar = () => {
  return (
    <nav className="my-4 mb-20 flex items-center justify-between py-4">
      <motion.div whileHover={{ scale: 1.1 }} className="flex flex-shrink-0 items-center ml-2">
        <a href="/">
          <LazyLoadImage effect="blur" className="h-4 sm:h-6" src={logo} alt="logo" />
        </a>
      </motion.div>
      <div className="flex items-center justify-center gap-3 text-xl md:text-2xl mr-2">
        <a
          href="https://www.linkedin.com/in/salehinafnan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaLinkedin />
          </motion.div>
        </a>
        <a href="https://github.com/salehinafnan" target="_blank" rel="noopener noreferrer">
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaGithub />
          </motion.div>
        </a>
        <a href="https://www.instagram.com/sleep.lust" target="_blank" rel="noopener noreferrer">
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaInstagram />
          </motion.div>
        </a>
        <a
          href="https://drive.google.com/drive/folders/1RXqTVn7kaGvEyNFxUeYD70F1wvN9LwXf?usp=sharing"
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
