"use client";

import { HERO_CONTENT } from "../constants";
import Image from "next/image";
import profilePic from "../assets/afnanProfile.webp";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36 min-h-[70vh] flex items-center mt-8">
      <div className="flex flex-wrap items-center w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              variants={itemVariants}
              className="pb-6 font-light tracking-tight text-[clamp(1.5rem,4vw,3.5rem)] whitespace-nowrap"
            >
              Mushfiqus Salehin{" "}
              <span className="text-gradient">Afnan</span>
            </motion.h1>
            <motion.span
              variants={itemVariants}
              className="text-gradient-alt text-xl sm:text-2xl lg:text-3xl tracking-tight font-medium"
            >
              Web Developer
            </motion.span>
            <motion.p
              variants={itemVariants}
              className="my-6 max-w-xl py-4 font-light leading-relaxed tracking-wide text-neutral-300/90 text-sm lg:text-base text-left"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div variants={itemVariants} className="mt-4 flex gap-4">
              <a href="#projects" className="px-6 py-3 rounded-full bg-neutral-100 text-neutral-900 font-medium hover:bg-neutral-300 transition-colors">
                View Work
              </a>
              <a href="#contact" className="px-6 py-3 rounded-full glass font-medium hover:bg-white/10 transition-colors">
                Contact Me
              </a>
            </motion.div>
          </div>
        </motion.div>
        <div className="w-full lg:w-1/2 lg:p-8 mt-12 lg:mt-0">
          <div className="flex justify-center relative">
            {/* Glowing Blob behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/20 rounded-full blur-[80px] -z-10"></div>
            
            <motion.div
              initial={{ x: 50, opacity: 0, scale: 0.9 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 50 }}
              className="relative rounded-3xl overflow-hidden glass p-2"
            >
              <Image
                className="rounded-2xl w-full max-w-[420px] object-cover"
                src={profilePic}
                alt="Mushfiqus Salehin Afnan"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
