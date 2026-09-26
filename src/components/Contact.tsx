import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { CONTACT } from "../constants";
import ContactForm from "./ContactForm";
import SectionHeading, { Accent } from "./SectionHeading";

const iconClass = "glass flex size-10 shrink-0 items-center justify-center rounded-full text-neutral-300";

const Contact = () => {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t border-neutral-800 py-16 sm:py-20">
      <SectionHeading id="contact-heading">
        Get in <Accent className="text-neutral-500">touch</Accent>
      </SectionHeading>

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-20">
        <div data-reveal="left" className="flex flex-col justify-center text-center lg:text-left">
          <h3 className="mb-4 text-2xl font-medium tracking-[-0.02em] text-balance text-neutral-50 sm:text-[1.75rem]">
            Let&apos;s work together!
          </h3>
          <p className="mx-auto mb-8 max-w-md text-base leading-7 text-pretty text-neutral-400 lg:mx-0">
            Feel free to reach out if you&apos;re looking for a developer, have a question, or just want to connect.
          </p>
          <ul className="mx-auto w-fit space-y-4 text-left text-[0.9375rem] text-neutral-300 lg:mx-0">
            <li className="flex items-center gap-4">
              <span className={iconClass}>
                <FaMapMarkerAlt aria-hidden="true" />
              </span>
              {CONTACT.address}
            </li>
            <li>
              <a
                href={`tel:${CONTACT.phoneNo.replace(/\s/g, "")}`}
                className="flex items-center gap-4 transition-colors hover:text-white"
              >
                <span className={iconClass}>
                  <FaPhoneAlt aria-hidden="true" />
                </span>
                {CONTACT.phoneNo}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-4 break-all transition-colors hover:text-white"
              >
                <span className={iconClass}>
                  <FaEnvelope aria-hidden="true" />
                </span>
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>

        <div data-reveal="right" className="mx-auto w-full max-w-xl lg:max-w-none">
          <ContactForm email={CONTACT.email} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
