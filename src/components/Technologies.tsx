import {
  SiExpress,
  SiGit,
  SiJavascript,
  SiLatex,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiPytorch,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import SectionHeading from "./SectionHeading";

const TECHNOLOGIES = [
  { name: "React", Icon: SiReact, color: "text-blue-500", url: "https://react.dev/", dur: 2.5 },
  { name: "Next.js", Icon: SiNextdotjs, color: "text-white", url: "https://nextjs.org/", dur: 3 },
  { name: "JavaScript", Icon: SiJavascript, color: "text-yellow-500", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", dur: 2 },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-blue-400", url: "https://tailwindcss.com/", dur: 4 },
  { name: "MongoDB", Icon: SiMongodb, color: "text-green-500", url: "https://www.mongodb.com/", dur: 3.5 },
  { name: "Express", Icon: SiExpress, color: "text-gray-300", url: "https://expressjs.com/", dur: 2.5 },
  { name: "Node.js", Icon: SiNodedotjs, color: "text-green-400", url: "https://nodejs.org/", dur: 3 },
  { name: "Python", Icon: SiPython, color: "text-blue-500", url: "https://www.python.org/", dur: 4.5 },
  { name: "PyTorch", Icon: SiPytorch, color: "text-orange-500", url: "https://pytorch.org/", dur: 2 },
  { name: "MySQL", Icon: SiMysql, color: "text-blue-300", url: "https://www.mysql.com/", dur: 3.5 },
  { name: "LaTeX", Icon: SiLatex, color: "text-green-600", url: "https://www.latex-project.org/", dur: 2.5 },
  { name: "Postman", Icon: SiPostman, color: "text-orange-400", url: "https://www.postman.com/", dur: 4 },
  { name: "Git", Icon: SiGit, color: "text-orange-600", url: "https://git-scm.com/", dur: 3 },
];

const Technologies = () => {
  return (
    <section id="technologies" aria-labelledby="technologies-heading" className="py-16 sm:py-20 lg:py-24">
      <SectionHeading id="technologies-heading">Technologies</SectionHeading>
      <ul className="mx-auto flex max-w-[57rem] flex-wrap items-center justify-center gap-2 sm:gap-3 lg:gap-6">
        {TECHNOLOGIES.map(({ name, Icon, color, url, dur }, index) => (
          <li key={name} data-reveal style={{ "--reveal-delay": `${index * 40}ms` } as React.CSSProperties}>
            <div className="float" style={{ "--float-duration": `${dur}s` } as React.CSSProperties}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
                className="group glass block rounded-2xl p-3 transition-[scale,background-color] duration-300 hover:scale-110 hover:bg-neutral-800/50 sm:p-3.5 lg:p-5"
              >
                <Icon
                  aria-hidden="true"
                  className={`text-[2rem] sm:text-[2.75rem] lg:text-[3.5rem] ${color} transition-[filter] duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]`}
                />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Technologies;
