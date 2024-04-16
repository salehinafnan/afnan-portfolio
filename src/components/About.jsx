import aboutImg from "../assets/afnanAbout.jpg";
import { ABOUT_TEXT } from "../constants";

function About() {
  return (
    <div className="pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-blue-100">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex item-center justify-center">
            <img
              className="rounded-2xl w-full object-cover sm:object-contain md:object-scale-down"
              src={aboutImg}
              alt="Mushfiqus Salehin Afnan"
              style={{ maxWidth: "420px" }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
