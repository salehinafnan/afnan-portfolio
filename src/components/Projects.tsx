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
        className={`${pill} border-stone-950 bg-stone-950 text-white hover:border-stone-800 hover:bg-stone-800`}
      >
        Live demo<span className="sr-only">: {project.title}</span>
        <FiArrowUpRight aria-hidden="true" className="size-3.5" />
      </a>
    )}
    <a
      href={project.source}
      target="_blank"
      rel="noopener noreferrer"
      className={`${pill} border-stone-200 bg-surface text-stone-700 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700`}
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
        className="rounded-full border border-stone-200 bg-stone-100/70 px-3 py-1 text-xs font-medium text-stone-700"
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
          <article className="glass-card lift group flex h-full flex-col overflow-hidden rounded-3xl xl:flex-row">
            {/* The screenshot has black margins, so a black panel lets it sit centred at any card height. */}
            <div className="bg-stone-950 xl:flex xl:w-[56%] xl:shrink-0 xl:items-center">
              <ProjectPreview
                image={featured.image}
                title={featured.title}
                sizes="(min-width: 1280px) 646px, (min-width: 1152px) 1152px, 100vw"
              />
            </div>
            <div className="flex grow flex-col p-6 sm:p-8 xl:justify-center xl:p-10">
              <p className="mb-3 flex items-center gap-2 font-mono text-xs font-medium tracking-widest text-indigo-600 uppercase">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-indigo-500" />
                Latest project
              </p>
              <h3 className="mb-3 text-2xl font-semibold tracking-tight text-stone-950 sm:text-3xl">{featured.title}</h3>
              <p className="mb-6 max-w-2xl text-[0.9375rem] leading-relaxed text-stone-600">{featured.description}</p>
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
            <article className="glass-card lift group flex h-full flex-col overflow-hidden rounded-3xl">
              <ProjectPreview image={project.image} title={project.title} />
              <div className="flex grow flex-col p-6 sm:p-8">
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-stone-950">{project.title}</h3>
                <p className="mb-6 grow text-[0.9375rem] leading-relaxed text-stone-600">{project.description}</p>
                <TechTags technologies={project.technologies} />
                <ProjectLinks project={project} />
              </div>
            </article>
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-20 max-w-6xl sm:mt-24">
        <h3 data-reveal="down" className="mb-10 text-center text-2xl font-semibold tracking-tight text-stone-950 sm:mb-12 sm:text-3xl">
          More on GitHub
        </h3>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {REPOSITORIES.map((repo, index) => (
            <li
              key={repo.title}
              data-reveal
              style={{ "--reveal-delay": `${(index % 3) * 100}ms` } as React.CSSProperties}
            >
              <article className="glass-card lift group relative flex h-full flex-col rounded-2xl p-6">
                <div className="mb-5 flex items-center gap-3">
                  <FiFolder aria-hidden="true" className="size-5 text-indigo-500" />
                  {repo.team && (
                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[0.6875rem] font-medium text-emerald-700">
                      Team project
                    </span>
                  )}
                  <FiArrowUpRight
                    aria-hidden="true"
                    className="ml-auto size-5 text-stone-400 transition-[color,translate] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-indigo-600"
                  />
                </div>
                <h4 className="mb-2 font-semibold tracking-tight text-stone-950">
                  {/* Stretched link: the whole card is clickable, but only the title is announced. */}
                  <a
                    href={repo.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="after:absolute after:inset-0 after:rounded-2xl"
                  >
                    {repo.title}
                    <span className="sr-only"> on GitHub</span>
                  </a>
                </h4>
                <p className="mb-5 grow text-sm leading-relaxed text-stone-600">{repo.description}</p>
                <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[0.6875rem] text-stone-500">
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
            className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-surface px-6 py-3 text-sm font-medium text-stone-900 transition-colors hover:border-stone-300 hover:bg-stone-50"
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
