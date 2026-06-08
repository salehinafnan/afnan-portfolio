"use client";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiJavascript, SiTailwindcss, SiExpress, SiPostman } from "react-icons/si";
import { BiLogoMongodb, BiLogoNodejs } from "react-icons/bi";
import { motion, Variants } from "framer-motion";

const iconVariants = (duration: number): Variants => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="py-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center text-3xl lg:text-4xl font-light tracking-tight"
      >
        Technologies
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
        {[
          { Icon: RiReactjsLine, color: "text-blue-500", url: "https://react.dev/", dur: 2.5 },
          { Icon: TbBrandNextjs, color: "text-white", url: "https://nextjs.org/", dur: 3 },
          { Icon: SiJavascript, color: "text-yellow-500", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", dur: 2 },
          { Icon: SiTailwindcss, color: "text-blue-400", url: "https://tailwindcss.com/", dur: 4 },
          { Icon: BiLogoMongodb, color: "text-green-500", url: "https://www.mongodb.com/", dur: 3.5 },
          { Icon: SiExpress, color: "text-gray-300", url: "https://expressjs.com/", dur: 2.5 },
          { Icon: BiLogoNodejs, color: "text-green-400", url: "https://nodejs.org/", dur: 3 },
          { Icon: SiPostman, color: "text-orange-500", url: "https://www.postman.com/", dur: 4.5 },
        ].map((Tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(Tech.dur)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.1, y: 0 }}
            className="rounded-2xl glass p-5 sm:p-6 cursor-pointer group hover:bg-neutral-800/50 transition-colors"
          >
            <a href={Tech.url} target="_blank" rel="noopener noreferrer">
              <Tech.Icon className={`text-5xl sm:text-6xl ${Tech.color} group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all`} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
