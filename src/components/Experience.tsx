"use client";

import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="py-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center text-3xl lg:text-4xl font-light tracking-tight"
      >
        Experience
      </motion.h2>
      <div className="max-w-4xl mx-auto">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="mb-8 flex flex-col lg:flex-row gap-4 lg:gap-8 glass-card p-6 sm:p-8 rounded-3xl hover:bg-white/[0.03] transition-colors"
          >
            <div className="w-full lg:w-1/4 flex-shrink-0">
              <p className="mb-2 text-sm text-neutral-400 font-medium">
                {experience.year}
              </p>
            </div>
            <div className="w-full lg:w-3/4">
              <h3 className="mb-2 font-semibold text-lg text-neutral-200">
                {experience.role} -{" "}
                <span className="text-blue-400 text-base font-medium">{experience.company}</span>
              </h3>
              <p className="mb-4 text-neutral-400 text-sm leading-relaxed text-left">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {experience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-blue-900/30 border border-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
