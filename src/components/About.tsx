import { FiBookOpen, FiBriefcase, FiFileText, FiMapPin } from "react-icons/fi";
import { ABOUT_TEXT, CONTACT, EDUCATION, EXPERIENCES, PUBLICATIONS } from "../constants";
import SectionHeading, { Accent } from "./SectionHeading";

const FACTS = [
  {
    icon: FiBriefcase,
    tone: "bg-indigo-50 text-indigo-600 ring-indigo-100",
    label: "Currently",
    value: EXPERIENCES[0].role,
    detail: EXPERIENCES[0].company,
  },
  {
    icon: FiBookOpen,
    tone: "bg-emerald-50 text-emerald-600 ring-emerald-100",
    label: "Education",
    value: "B.Sc. in CSE",
    detail: `IIUC · ${EDUCATION.period.slice(-4)}`,
  },
  {
    icon: FiFileText,
    tone: "bg-amber-50 text-amber-600 ring-amber-100",
    label: "Research",
    value: `${PUBLICATIONS.length} publications`,
    detail: PUBLICATIONS.map((p) => p.publisher).join(" · "),
  },
  {
    icon: FiMapPin,
    tone: "bg-rose-50 text-rose-600 ring-rose-100",
    label: "Based in",
    value: CONTACT.address.split(", ").slice(-2).join(", "),
  },
];

const About = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-16 sm:py-20">
      <SectionHeading id="about-heading">
        About <Accent>me</Accent>
      </SectionHeading>
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-5 lg:gap-12">
        <p
          data-reveal="left"
          className="text-base leading-7 text-stone-600 lg:col-span-3 lg:text-lg lg:leading-8"
        >
          {ABOUT_TEXT}
        </p>
        <dl data-reveal="right" className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-2">
          {FACTS.map(({ icon: Icon, tone, label, value, detail }) => (
            <div key={label} className="glass-card flex flex-col rounded-2xl p-4 sm:p-5">
              <dt className="mb-3 flex items-center gap-2.5 font-mono text-[0.6875rem] font-medium tracking-widest text-stone-500 uppercase">
                <span className={`flex size-7 items-center justify-center rounded-lg ring-1 ${tone}`}>
                  <Icon aria-hidden="true" className="size-3.5" />
                </span>
                {label}
              </dt>
              <dd className="leading-snug font-semibold tracking-tight text-stone-950">{value}</dd>
              {detail && <dd className="mt-1 text-sm text-stone-500">{detail}</dd>}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default About;
