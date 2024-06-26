import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/afnanProfile.webp";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: delay,
    },
  },
});

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start text-justify">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-12 font-light tracking-tight lg:mt-16 text-responsive whitespace-nowrap"
            >
              Mushfiqus Salehin{" "}
              <span className="bg-gradient-to-r from-blue-300 via-gray-300 to-blue-300 bg-clip-text text-transparent">
                Afnan
              </span>
            </motion.h1>
            <motion.span
              variants={container(0.75)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-blue-300 via-gray-300 to-red-300 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Web Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tight xs:tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="rounded-2xl w-full object-cover sm:object-contain md:object-scale-down"
              src={profilePic}
              alt="Mushfiqus Salehin Afnan"
              style={{ maxWidth: "420px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
