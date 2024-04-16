import { useState } from "react";
import { PROJECTS } from "../constants";
import { FiExternalLink } from "react-icons/fi";

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={200}
                height={200}
                alt={project.title}
                className="mb-6 rounded"
                onClick={() => setSelectedImage(project.image)}
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.title}
                  <FiExternalLink className="inline-block w-4 h-4 ml-2" />
                </a>
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-100"
                >
                  {tech}
                </span>
              ))}
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
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 1000,
          }}
        >
          <img
            src={selectedImage}
            alt="Selected"
            style={{ maxWidth: "90%", maxHeight: "90%" }}
          />
        </div>
      )}
    </div>
  );
}

export default Projects;
