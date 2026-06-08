"use client";

import { ABOUT_TEXT } from "../constants";
import Image from "next/image";
import aboutImg from "../assets/afnanAbout.webp";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="py-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16 text-center text-3xl lg:text-4xl font-light tracking-tight"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center relative"
          >
            {/* Background Blob */}
            <div className="absolute w-64 h-64 bg-blue-500/10 rounded-full blur-[60px] -z-10"></div>
            <div className="glass p-2 rounded-3xl overflow-hidden">
              <Image
                className="rounded-2xl max-w-sm w-full object-cover"
                src={aboutImg}
                alt="About"
              />
            </div>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <p className="max-w-xl py-6 font-light leading-relaxed tracking-wide text-neutral-300/90 text-sm lg:text-base text-left">
              {ABOUT_TEXT}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
