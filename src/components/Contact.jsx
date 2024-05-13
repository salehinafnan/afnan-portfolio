import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

function Contact() {
  const [state, handleSubmit] = useForm(`${import.meta.env.VITE_EMAIL_API_CODE}`);

  if (state.succeeded) {
    return (
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center font-medium text-2xl md:text-3xl lg:text-3xl"
      >
        Thank you for contacting!
      </motion.p>
    );
  }

  return (
    <div className="pb-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="w-full max-w-sm mx-auto my-20">
        <form
          action={import.meta.env.VITE_EMAIL_API_LINK}
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-5 rounded px-8 pt-6 pb-8 mb-4 backdrop-blur-lg"
        >
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="name">
              Name
            </label>
            <input
              className=" bg-white bg-opacity-5 backdrop-blur-sm appearance-none rounded w-full py-2 px-3 leading-tight placeholder-neutral-600 focus:outline-none"
              id="name"
              type="text"
              name="name"
              placeholder="eg. John Doe"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "eg. John Doe")}
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="bg-white bg-opacity-5 backdrop-blur-sm appearance-none rounded w-full py-2 px-3 leading-tight placeholder-neutral-600 focus:outline-none"
              id="email"
              type="email"
              name="email"
              placeholder="eg. john.doe@example.com"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "eg. john.doe@example.com")}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="bg-white bg-opacity-5 backdrop-blur-sm appearance-none rounded w-full py-2 px-3 leading-tight placeholder-neutral-600 focus:outline-none"
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="4"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Enter your message")}
              style={{ resize: "none" }}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-white bg-opacity-5 backdrop-blur-xl hover:scale-110 transition-transform duration-200 py-1 px-4 rounded text-blue-100"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
