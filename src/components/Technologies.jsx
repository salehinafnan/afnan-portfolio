import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoNodejs } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPostman } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiReactjsLine className="text-5xl text-cyan-500" />
          </a>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandNextjs className="text-5xl" />
          </a>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <a
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoMongodb className="text-5xl text-green-500" />
          </a>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <a
            href="https://expressjs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiExpress className="text-5xl " />
          </a>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <a
            href="https://nodejs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoNodejs className="text-5xl text-green-500" />
          </a>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <a
            href="https://www.mysql.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiMysql className="text-5xl text-blue-500" />
          </a>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <a
            href="https://www.postman.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiPostman className="text-5xl text-orange-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
