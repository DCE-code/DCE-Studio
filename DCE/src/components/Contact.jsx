import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate form submission dispatch
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormState({ name: "", email: "", message: "" });

      setTimeout(() => setSuccess(false), 5000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 relative overflow-hidden bg-neutral-950"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase block mb-3">
            // Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Let's Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Something Amazing
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
              Have a project in mind, a prospective role, or simply want to
              connect? Reach out directly or fill out the form, and let's
              discuss how we can bring your vision to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 backdrop-blur-md">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  ✉️
                </div>
                <div>
                  <span className="text-xs font-mono text-neutral-400 block uppercase tracking-wider">
                    Direct Email
                  </span>
                  <a
                    href="mailto:davidchristian2003@gmail.com"
                    className="text-white font-medium hover:text-emerald-400 transition-colors"
                  >
                    davidchristian2003@gmail.com
                  </a>
                </div>
              </div>

              <a
                href="https://wa.me/2347015781293?text=Hello%20DCE%20Studio%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md transition-colors hover:bg-emerald-500/20"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xl">
                  ◉
                </div>
                <div>
                  <span className="text-xs font-mono text-emerald-400 block uppercase tracking-wider">
                    WhatsApp
                  </span>
                  <span className="text-white font-medium">
                    Chat with DCE Studio
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 backdrop-blur-md">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  📍
                </div>
                <div>
                  <span className="text-xs font-mono text-neutral-400 block uppercase tracking-wider">
                    Location
                  </span>
                  <span className="text-white font-medium">
                    Ibadan, Oyo State, Nigeria
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 backdrop-blur-md">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  📞
                </div>
                <div>
                  <span className="text-xs font-mono text-neutral-400 block uppercase tracking-wider">
                    Phone / Direct Line
                  </span>
                  <a
                    href="tel:+2347015781293"
                    className="text-white font-medium hover:text-purple-400 transition-colors"
                  >
                    +234 701 578 1293
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="p-8 md:p-10 rounded-3xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-xl shadow-2xl relative">
              {success && (
                <div className="absolute inset-0 bg-neutral-900/95 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center p-6 text-center z-20">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl mb-4 border border-emerald-500/40">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Dispatched
                  </h3>
                  <p className="text-neutral-400 text-sm max-w-sm">
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-white placeholder-neutral-600 focus:border-emerald-500 focus:outline-none transition-colors text-sm"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-white placeholder-neutral-600 focus:border-emerald-500 focus:outline-none transition-colors text-sm"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2"
                  >
                    Project Details / Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-white placeholder-neutral-600 focus:border-emerald-500 focus:outline-none transition-colors text-sm resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm transition-all duration-300 shadow-xl shadow-emerald-500/20 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <span className="w-5 h-5 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
