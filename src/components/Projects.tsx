import { FaExternalLinkAlt } from "react-icons/fa";
import { PROJECTS } from "../constants";
import ProjectPreview from "./ProjectPreview";
import SectionHeading from "./SectionHeading";

const Projects = () => {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-16 sm:py-20">
      <SectionHeading id="projects-heading">Projects</SectionHeading>
      <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
        {PROJECTS.map((project, index) => (
          <li
            key={project.title}
            data-reveal
            style={{ "--reveal-delay": `${(index % 2) * 100}ms` } as React.CSSProperties}
          >
            <article className="glass-card group flex h-full flex-col overflow-hidden rounded-3xl transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <ProjectPreview image={project.image} title={project.title} />
              <div className="flex grow flex-col p-6 sm:p-8">
                <h3 className="mb-3 text-xl font-semibold">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-blue-300"
                  >
                    {project.title}
                    <FaExternalLinkAlt aria-hidden="true" className="ml-2 inline size-3.5 align-baseline text-blue-400" />
                  </a>
                </h3>
                <p className="mb-6 grow text-sm leading-relaxed text-neutral-400">{project.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-neutral-700 bg-neutral-800/50 px-3 py-1 text-xs font-medium text-neutral-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
