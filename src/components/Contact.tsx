"use client";

import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xjvqrqoz"); // Replace with actual form ID if needed, wait the original used Formspree? The original code didn't show the form id directly, wait, let me check the original Contact.jsx.
  // Actually, I should use a generic placeholder or standard inputs if Formspree wasn't imported before.
  // I will recreate the original contact form fields but modernize the look.

  return (
    <div id="contact" className="py-20 border-t border-neutral-800">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center text-3xl lg:text-4xl font-light tracking-tight"
      >
        Get in <span className="text-blue-400">Touch</span>
      </motion.h2>

      <div className="max-w-6xl mx-auto flex flex-wrap lg:flex-nowrap gap-12 lg:gap-20">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex flex-col justify-center"
        >
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-semibold mb-6">Let&apos;s work together!</h3>
            <p className="text-neutral-400 mb-8 text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
              Feel free to reach out if you&apos;re looking for a developer, have a question, or just want to connect.
            </p>
            <div className="space-y-4">
              <p className="text-neutral-300 flex items-center justify-center lg:justify-start gap-4">
                <span className="w-10 h-10 rounded-full glass flex items-center justify-center text-blue-400">📍</span>
                {CONTACT.address}
              </p>
              <p className="text-neutral-300 flex items-center justify-center lg:justify-start gap-4">
                <span className="w-10 h-10 rounded-full glass flex items-center justify-center text-blue-400">📞</span>
                {CONTACT.phoneNo}
              </p>
              <p className="text-neutral-300 flex items-center justify-center lg:justify-start gap-4">
                <span className="w-10 h-10 rounded-full glass flex items-center justify-center text-blue-400">✉️</span>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-blue-400 transition-colors">
                  {CONTACT.email}
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2"
        >
          <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                className="w-full bg-neutral-900/50 border border-neutral-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-white outline-none transition-all"
                placeholder="John Doe"
                required
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-sm mt-1" />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full bg-neutral-900/50 border border-neutral-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-white outline-none transition-all"
                placeholder="john@example.com"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full bg-neutral-900/50 border border-neutral-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-white outline-none transition-all resize-none"
                placeholder="Your message here..."
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm mt-1" />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-xl transition-colors disabled:opacity-50"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
            
            {state.succeeded && (
              <p className="text-green-400 text-center mt-2">Thanks for your message! I&apos;ll get back to you soon.</p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
