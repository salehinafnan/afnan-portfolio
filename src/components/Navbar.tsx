"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import Image from "next/image";
import logo from "../assets/afnanLogo.webp";

const Navbar = () => {
  return (
    <nav className="mb-8 flex items-center justify-between py-6">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        className="flex flex-shrink-0 items-center"
      >
        <a href="/">
          <Image src={logo} alt="logo" className="h-6 w-auto sm:h-8 object-contain" priority />
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-6 text-xl text-neutral-300"
      >
        <a href="https://drive.google.com/file/d/1_D7aZqK8ytZZWAmbEQEPhPS7Rv1uZaVa/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300" title="Resume / CV">
          <IoDocumentTextOutline />
        </a>
        <a href="https://linkedin.com/in/salehinafnan" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300" title="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/salehinafnan" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300" title="GitHub">
          <FaGithub />
        </a>
        <a href="https://instagram.com/salehinafnan" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors duration-300">
          <FaInstagram />
        </a>
        <a href="https://facebook.com/salehinafnan" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-300">
          <FaFacebook />
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
