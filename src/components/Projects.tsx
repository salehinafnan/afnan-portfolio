import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiFolder } from "react-icons/fi";
import { PROJECTS, REPOSITORIES, SOCIAL_LINKS, type Project } from "../constants";
import ProjectPreview from "./ProjectPreview";
import SectionHeading from "./SectionHeading";

const pill =
  "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors";

const ProjectLinks = ({ project }: { project: Project }) => (
  <div className="mt-6 flex flex-wrap gap-2">
    {project.live && (
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className={`${pill} border-blue-500/30 bg-blue-900/30 text-blue-200 hover:border-blue-400/60 hover:bg-blue-900/50`}
      >
        Live demo<span className="sr-only">: {project.title}</span>
        <FiArrowUpRight aria-hidden="true" className="size-3.5" />
      </a>
    )}
    <a
      href={project.source}
      target="_blank"
      rel="noopener noreferrer"
      className={`${pill} border-neutral-700 text-neutral-300 hover:border-neutral-500 hover:text-white`}
    >
      <FaGithub aria-hidden="true" className="size-3.5" />
      Source<span className="sr-only">: {project.title}</span>
    </a>
  </div>
);

const TechTags = ({ technologies }: { technologies: string[] }) => (
  <ul className="flex flex-wrap gap-2">
    {technologies.map((tech) => (
      <li
        key={tech}
        className="rounded-full border border-neutral-700 bg-neutral-800/50 px-3 py-1 text-xs font-medium text-neutral-300"
      >
        {tech}
      </li>
    ))}
  </ul>
);

const Projects = () => {
  const [featured, ...rest] = PROJECTS;

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-16 sm:py-20">
      <SectionHeading id="projects-heading">Projects</SectionHeading>

      <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
        <li data-reveal className="md:col-span-2">
          <article className="glass-card group flex h-full flex-col overflow-hidden rounded-3xl transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] xl:flex-row">
            {/* The screenshot has black margins, so a black panel lets it sit centred at any card height. */}
            <div className="bg-black xl:flex xl:w-[56%] xl:shrink-0 xl:items-center">
              <ProjectPreview
                image={featured.image}
                title={featured.title}
                sizes="(min-width: 1280px) 646px, (min-width: 1152px) 1152px, 100vw"
              />
            </div>
            <div className="flex grow flex-col p-6 sm:p-8 xl:justify-center xl:p-10">
              <p className="mb-3 font-mono text-xs font-medium tracking-widest text-blue-300 uppercase">Latest project</p>
              <h3 className="mb-3 text-2xl font-semibold tracking-tight sm:text-3xl">{featured.title}</h3>
              <p className="mb-6 max-w-2xl text-[0.9375rem] leading-relaxed text-neutral-400">{featured.description}</p>
              <TechTags technologies={featured.technologies} />
              <ProjectLinks project={featured} />
            </div>
          </article>
        </li>

        {rest.map((project, index) => (
          <li
            key={project.title}
            data-reveal
            style={{ "--reveal-delay": `${(index % 2) * 100}ms` } as React.CSSProperties}
          >
            <article className="glass-card group flex h-full flex-col overflow-hidden rounded-3xl transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <ProjectPreview image={project.image} title={project.title} />
              <div className="flex grow flex-col p-6 sm:p-8">
                <h3 className="mb-3 text-xl font-semibold tracking-tight">{project.title}</h3>
                <p className="mb-6 grow text-[0.9375rem] leading-relaxed text-neutral-400">{project.description}</p>
                <TechTags technologies={project.technologies} />
                <ProjectLinks project={project} />
              </div>
            </article>
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-20 max-w-6xl sm:mt-24">
        <h3 data-reveal="down" className="mb-10 text-center text-2xl font-semibold tracking-tight sm:mb-12 sm:text-3xl">
          More on GitHub
        </h3>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {REPOSITORIES.map((repo, index) => (
            <li
              key={repo.title}
              data-reveal
              style={{ "--reveal-delay": `${(index % 3) * 100}ms` } as React.CSSProperties}
            >
              <article className="glass-card group relative flex h-full flex-col rounded-2xl p-6 transition-colors duration-300 hover:border-blue-500/30 hover:bg-white/3">
                <div className="mb-5 flex items-center gap-3">
                  <FiFolder aria-hidden="true" className="size-6 text-blue-400" />
                  {repo.team && (
                    <span className="rounded-full border border-neutral-700 px-2.5 py-0.5 text-[0.6875rem] font-medium text-neutral-400">
                      Team project
                    </span>
                  )}
                  <FiArrowUpRight
                    aria-hidden="true"
                    className="ml-auto size-5 text-neutral-500 transition-[color,translate] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-300"
                  />
                </div>
                <h4 className="mb-2 font-semibold tracking-tight text-neutral-100">
                  {/* Stretched link: the whole card is clickable, but only the title is announced. */}
                  <a
                    href={repo.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors group-hover:text-blue-200 after:absolute after:inset-0 after:rounded-2xl"
                  >
                    {repo.title}
                    <span className="sr-only"> on GitHub</span>
                  </a>
                </h4>
                <p className="mb-5 grow text-sm leading-relaxed text-neutral-400">{repo.description}</p>
                <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[0.6875rem] text-neutral-400">
                  {repo.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>

        <div data-reveal className="mt-10 flex justify-center sm:mt-12">
          <a
            href={`${SOCIAL_LINKS.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors hover:bg-white/10"
          >
            <FaGithub aria-hidden="true" className="size-4" />
            View all repositories
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
