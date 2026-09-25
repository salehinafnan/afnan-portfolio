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

// Sixteen icons: a 4 × 4 grid on phones, two rows of eight from sm up.
// Icons sit in monochrome and take their brand colour on hover.
const TECHNOLOGIES = [
  { name: "React", Icon: SiReact, color: "group-hover:text-blue-500", url: "https://react.dev/", dur: 2.5 },
  { name: "Next.js", Icon: SiNextdotjs, color: "group-hover:text-white", url: "https://nextjs.org/", dur: 3 },
  { name: "TypeScript", Icon: SiTypescript, color: "group-hover:text-blue-400", url: "https://www.typescriptlang.org/", dur: 4 },
  { name: "JavaScript", Icon: SiJavascript, color: "group-hover:text-yellow-500", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", dur: 2 },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "group-hover:text-sky-400", url: "https://tailwindcss.com/", dur: 3.5 },
  { name: "Redux", Icon: SiRedux, color: "group-hover:text-purple-400", url: "https://redux.js.org/", dur: 2.5 },
  { name: "Node.js", Icon: SiNodedotjs, color: "group-hover:text-green-400", url: "https://nodejs.org/", dur: 3 },
  { name: "Express", Icon: SiExpress, color: "group-hover:text-white", url: "https://expressjs.com/", dur: 4.5 },
  { name: "MongoDB", Icon: SiMongodb, color: "group-hover:text-green-500", url: "https://www.mongodb.com/", dur: 3.5 },
  { name: "MySQL", Icon: SiMysql, color: "group-hover:text-blue-300", url: "https://www.mysql.com/", dur: 2 },
  { name: "Firebase", Icon: SiFirebase, color: "group-hover:text-amber-400", url: "https://firebase.google.com/", dur: 4 },
  { name: "Python", Icon: SiPython, color: "group-hover:text-blue-500", url: "https://www.python.org/", dur: 2.5 },
  { name: "TensorFlow", Icon: SiTensorflow, color: "group-hover:text-orange-500", url: "https://www.tensorflow.org/", dur: 3 },
  { name: "scikit-learn", Icon: SiScikitlearn, color: "group-hover:text-orange-300", url: "https://scikit-learn.org/", dur: 4.5 },
  { name: "C++", Icon: SiCplusplus, color: "group-hover:text-blue-400", url: "https://isocpp.org/", dur: 2 },
  { name: "Git", Icon: SiGit, color: "group-hover:text-orange-600", url: "https://git-scm.com/", dur: 3.5 },
];

const Technologies = () => {
  return (
    <section id="technologies" aria-labelledby="technologies-heading" className="py-16 sm:py-20 lg:py-24">
      <SectionHeading id="technologies-heading">Technologies</SectionHeading>
      <ul className="mx-auto grid w-fit grid-cols-4 gap-2 sm:grid-cols-8 sm:gap-3 lg:gap-5">
        {TECHNOLOGIES.map(({ name, Icon, color, url, dur }, index) => (
          <li key={name} data-reveal style={{ "--reveal-delay": `${index * 40}ms` } as React.CSSProperties}>
            <div className="float" style={{ "--float-duration": `${dur}s` } as React.CSSProperties}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
                className="group glass block rounded-2xl p-3 transition-[scale,background-color] duration-300 hover:scale-110 hover:bg-neutral-800/50 lg:p-4"
              >
                <Icon
                  aria-hidden="true"
                  className={`text-[2rem] sm:text-[2.25rem] lg:text-[3.5rem] text-neutral-400 ${color} transition-[color,filter] duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]`}
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
