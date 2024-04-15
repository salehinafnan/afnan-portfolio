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
          className="my-4 flex flex-col px-10 justify-center items-center"
        >
          <input
            id="email"
            type="email"
            name="email"
            className="mr-2 mb-4 rounded bg-neutral-900 px-5 py-2 text-base font-medium text-blue-100"
            placeholder="Your Email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            id="message"
            name="message"
            className="mr-2 mb-4 rounded bg-neutral-900 px-5 py-4 text-base font-medium text-blue-100"
            placeholder="Your Message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="mr-2 rounded bg-neutral-900 px-3 py-2 text-base font-medium text-blue-100"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
