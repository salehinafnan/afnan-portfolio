import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

function Contact() {
  const [state, handleSubmit] = useForm("mwkgwdea");

  if (state.succeeded) {
    return (
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center font-medium text-2xl"
      >
        Thanks for Contacting
      </motion.p>
    );
  }

  return (
    <div className="pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <form
          action="https://formspree.io/f/mwkgwdea"
          onSubmit={handleSubmit}
          className="my-2 flex flex-col px-10 justify-center items-center"
        >
          <motion.input
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            id="email"
            type="email"
            name="email"
            className="w-full lg:w-1/4 mb-4 rounded bg-neutral-900 px-2 py-2 font-medium text-blue-100"
            placeholder="Your Email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <motion.textarea
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            id="message"
            name="message"
            className="w-full lg:w-1/4 mb-4 rounded bg-neutral-900 px-2 py-8 font-medium text-blue-100"
            placeholder="Your Message"
            style={{ resize: "none", overflow: "auto" }}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <motion.button
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            type="submit"
            disabled={state.submitting}
            className="rounded bg-neutral-900 px-5 py-2 font-medium text-blue-100"
          >
            Send
          </motion.button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
