import { useState } from "react";
import { PROJECTS } from "../constants";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <motion.img
                src={project.image}
                width={280}
                height={300}
                alt={project.title}
                className="mb-6 rounded"
                onClick={() => setSelectedImage(project.image)}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer "
                  className="hover:underline"
                >
                  {project.title}
                  <FiExternalLink className="inline-block w-4 h-4 ml-2" />
                </a>
              </h6>
              <p className="mb-4 text-neutral-400 text-justify">
                {project.description}
              </p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-xs font-medium text-blue-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
            backdropFilter: "blur(10px)",
          }}
        >
          <img
            src={selectedImage}
            alt="Selected"
            style={{ maxWidth: "85%", maxHeight: "85%" }}
          />
        </div>
      )}
    </div>
  );
}

export default Projects;
