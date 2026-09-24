"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full rounded-xl border border-neutral-700 bg-neutral-900/50 px-4 py-3 text-base text-white outline-none transition-colors placeholder:text-neutral-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500";

// Submits in the background so visitors stay on the page. Without JavaScript the
// form still posts straight to FormSubmit.
const ContactForm = ({ email }: { email: string }) => {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || String(result?.success) !== "true") throw new Error("Submission failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      action={`https://formsubmit.co/${email}`}
      method="POST"
      onSubmit={handleSubmit}
      className="glass-card flex flex-col gap-6 rounded-3xl p-6 sm:p-8"
    >
      <input type="hidden" name="_subject" value="New submission from your portfolio!" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-400">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          autoComplete="name"
          className={fieldClass}
          placeholder="John Doe"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-400">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          className={fieldClass}
          placeholder="john@example.com"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-400">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${fieldClass} resize-none`}
          placeholder="Your message here..."
          required
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-xl bg-blue-600 py-3 font-medium text-white transition-colors hover:bg-blue-500 disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>

        <p role="status" aria-live="polite" className="mt-4 text-center text-sm empty:mt-0">
          {status === "sent" && (
            <span className="text-emerald-400">Thanks! Your message has been sent. I&apos;ll get back to you soon.</span>
          )}
          {status === "error" && (
            <span className="text-red-400">
              Something went wrong. Please try again or email me at{" "}
              <a href={`mailto:${email}`} className="underline underline-offset-2">
                {email}
              </a>
              .
            </span>
          )}
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
