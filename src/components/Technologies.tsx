import {
  SiCplusplus,
  SiExpress,
  SiFirebase,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiRedux,
  SiScikitlearn,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import SectionHeading from "./SectionHeading";

// Sixteen icons: a 4 × 4 grid on phones, two rows of eight from sm up. Tiles float
// ±8px out of step, so rows sit more than 16px apart to keep them from touching.
const TECHNOLOGIES = [
  { name: "React", Icon: SiReact, color: "text-blue-500", url: "https://react.dev/", dur: 2.5 },
  { name: "Next.js", Icon: SiNextdotjs, color: "text-fg-1", url: "https://nextjs.org/", dur: 3 },
  { name: "TypeScript", Icon: SiTypescript, color: "text-blue-400", url: "https://www.typescriptlang.org/", dur: 4 },
  { name: "JavaScript", Icon: SiJavascript, color: "text-yellow-500", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", dur: 2 },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-sky-400", url: "https://tailwindcss.com/", dur: 3.5 },
  { name: "Redux", Icon: SiRedux, color: "text-purple-400", url: "https://redux.js.org/", dur: 2.5 },
  { name: "Node.js", Icon: SiNodedotjs, color: "text-green-400", url: "https://nodejs.org/", dur: 3 },
  { name: "Express", Icon: SiExpress, color: "text-fg-2", url: "https://expressjs.com/", dur: 4.5 },
  { name: "MongoDB", Icon: SiMongodb, color: "text-green-500", url: "https://www.mongodb.com/", dur: 3.5 },
  { name: "MySQL", Icon: SiMysql, color: "text-blue-300", url: "https://www.mysql.com/", dur: 2 },
  { name: "Firebase", Icon: SiFirebase, color: "text-amber-400", url: "https://firebase.google.com/", dur: 4 },
  { name: "Python", Icon: SiPython, color: "text-blue-500", url: "https://www.python.org/", dur: 2.5 },
  { name: "TensorFlow", Icon: SiTensorflow, color: "text-orange-500", url: "https://www.tensorflow.org/", dur: 3 },
  { name: "scikit-learn", Icon: SiScikitlearn, color: "text-orange-300", url: "https://scikit-learn.org/", dur: 4.5 },
  { name: "C++", Icon: SiCplusplus, color: "text-blue-400", url: "https://isocpp.org/", dur: 2 },
  { name: "Git", Icon: SiGit, color: "text-orange-600", url: "https://git-scm.com/", dur: 3.5 },
];

const Technologies = () => {
  return (
    <section id="technologies" aria-labelledby="technologies-heading" className="py-16 sm:py-20 lg:py-24">
      <SectionHeading id="technologies-heading">Technologies</SectionHeading>
      <ul className="mx-auto grid w-fit grid-cols-4 gap-x-2 gap-y-6 sm:grid-cols-8 sm:gap-x-3 lg:gap-5">
        {TECHNOLOGIES.map(({ name, Icon, color, url, dur }, index) => (
          <li key={name} data-reveal style={{ "--reveal-delay": `${index * 40}ms` } as React.CSSProperties}>
            <div className="float" style={{ "--float-duration": `${dur}s` } as React.CSSProperties}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
                className="group glass block rounded-2xl p-3 transition-[scale,background-color] duration-300 hover:scale-110 hover:bg-fg-1/10 lg:p-4"
              >
                <Icon
                  aria-hidden="true"
                  className={`text-[2rem] sm:text-[2.25rem] lg:text-[3.5rem] ${color} transition-[filter] duration-300 group-hover:drop-shadow-(--icon-glow)`}
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
