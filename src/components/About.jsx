import aboutImg from "../assets/afnanAbout.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-blue-100">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="flex item-center justify-center"
          >
            <img
              className="rounded-2xl w-full object-cover sm:object-contain md:object-scale-down"
              src={aboutImg}
              alt="Mushfiqus Salehin Afnan"
              style={{ maxWidth: "420px" }}
            />
          </motion.div>
        </div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start text-justify">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
