"use client";

import { PUBLICATION } from "../constants";
import { motion } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";

const Publication = () => {
  return (
    <div className="py-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center text-3xl lg:text-4xl font-light tracking-tight"
      >
        Publications
      </motion.h2>
      <div className="max-w-4xl mx-auto">
        {PUBLICATION.map((pub, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="mb-8 flex flex-col lg:flex-row gap-4 lg:gap-8 glass-card p-6 sm:p-8 rounded-3xl hover:bg-white/[0.03] transition-colors"
          >
            <div className="w-full lg:w-1/4 flex-shrink-0">
              <p className="mb-2 text-sm text-neutral-400 font-medium">
                {pub.year}
              </p>
            </div>
            <div className="w-full lg:w-3/4">
              <h3 className="mb-2 font-semibold text-lg text-neutral-200 flex items-center flex-wrap gap-2">
                {pub.title}
                {pub.link && (
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold px-2 py-1 bg-blue-900/40 text-blue-400 rounded border border-blue-500/30 hover:bg-blue-900/60 hover:text-blue-300 transition-colors flex items-center gap-1">
                    DOI <BiLinkExternal className="w-3 h-3" />
                  </a>
                )}
              </h3>
              <p className="mb-4 text-neutral-400 text-sm leading-relaxed text-left">
                {pub.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {pub.publisher.map((pubName, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-blue-900/30 border border-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300"
                  >
                    {pubName}
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

export default Publication;
