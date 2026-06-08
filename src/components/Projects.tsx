"use client";

import { useState } from "react";
import { PROJECTS } from "../constants";
import { BiLinkExternal } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);

  return (
    <div id="projects" className="py-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center text-3xl lg:text-4xl font-light tracking-tight"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col glass-card rounded-3xl overflow-hidden group hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500"
          >
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-900 cursor-pointer" onClick={() => setSelectedImage(project.image as StaticImageData)}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">Click to expand</span>
              </div>
            </div>
            <div className="p-6 sm:p-8 flex flex-col flex-grow">
              <h3 className="mb-3 font-semibold text-xl flex items-center gap-2">
                {project.title}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <BiLinkExternal className="w-5 h-5" />
                </a>
              </h3>
              <p className="mb-6 text-neutral-400 text-sm flex-grow text-left">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-neutral-800/50 border border-neutral-700 px-3 py-1 text-xs font-medium text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl h-[80vh] rounded-2xl overflow-hidden glass p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                ✕
              </button>
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image 
                  src={selectedImage} 
                  alt="Expanded view" 
                  fill 
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
