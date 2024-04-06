import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoNodejs } from "react-icons/bi";
import { SiExpress } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-6xl text-cyan-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-6xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoMongodb className="text-6xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-6xl " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoNodejs className="text-6xl text-green-500" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
