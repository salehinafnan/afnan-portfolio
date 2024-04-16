import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("mwkgwdea");

  if (state.succeeded) {
    return (
      <p className="my-20 text-center font-medium text-2xl">
        Thanks for Contacting
      </p>
    );
  }

  return (
    <div className="pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <form
          action="https://formspree.io/f/mwkgwdea"
          onSubmit={handleSubmit}
          className="my-2 flex flex-col px-10 justify-center items-center"
        >
          <input
            id="email"
            type="email"
            name="email"
            className="w-4/5 lg:w-1/4 mb-4 rounded bg-neutral-900 px-2 py-2 font-medium text-blue-100"
            placeholder="Your Email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            id="message"
            name="message"
            className="w-4/5 lg:w-1/4 mb-4 rounded bg-neutral-900 px-2 py-8 font-medium text-blue-100"
            placeholder="Your Message"
            style={{ resize: "none", overflow: "auto" }}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="rounded bg-neutral-900 px-5 py-2 font-medium text-blue-100"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
