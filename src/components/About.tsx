import { FiBookOpen, FiBriefcase, FiFileText, FiMapPin } from "react-icons/fi";
import { ABOUT_TEXT, CONTACT, EDUCATION, EXPERIENCES, PUBLICATIONS } from "../constants";
import SectionHeading from "./SectionHeading";

const FACTS = [
  { icon: FiBriefcase, label: "Currently", value: EXPERIENCES[0].role, detail: EXPERIENCES[0].company },
  { icon: FiBookOpen, label: "Education", value: "B.Sc. in CSE", detail: `IIUC · ${EDUCATION.period.slice(-4)}` },
  {
    icon: FiFileText,
    label: "Research",
    value: `${PUBLICATIONS.length} publications`,
    detail: PUBLICATIONS.map((p) => p.publisher).join(" · "),
  },
  { icon: FiMapPin, label: "Based in", value: CONTACT.address.split(", ").slice(-2).join(", ") },
];

const About = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-16 sm:py-20">
      <SectionHeading id="about-heading">
        About <span className="text-neutral-500">Me</span>
      </SectionHeading>
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-5 lg:gap-12">
        <p
          data-reveal="left"
          className="text-sm leading-relaxed font-light tracking-wide text-neutral-300/90 lg:col-span-3 lg:text-base"
        >
          {ABOUT_TEXT}
        </p>
        <dl data-reveal="right" className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-2">
          {FACTS.map(({ icon: Icon, label, value, detail }) => (
            <div key={label} className="glass-card flex flex-col rounded-2xl p-4 sm:p-5">
              <dt className="mb-3 flex items-center gap-2 text-xs font-medium tracking-wider text-neutral-400 uppercase">
                <Icon aria-hidden="true" className="size-4 text-blue-400" />
                {label}
              </dt>
              <dd className="font-semibold text-neutral-100">{value}</dd>
              {detail && <dd className="mt-1 text-sm text-neutral-400">{detail}</dd>}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default About;
