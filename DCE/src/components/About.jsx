import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 relative overflow-hidden bg-neutral-950/50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase block mb-3">
            // Background & Vision
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            About{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">
              DCE Studio
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Narrative Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-neutral-300 text-base md:text-lg leading-relaxed"
          >
            <p>
              DCE Studio is an independent digital product studio focused on
              making the web feel clearer, faster, and more human. I combine
              frontend engineering, UI/UX thinking, and Python-powered
              application logic to turn ambitious ideas into dependable
              experiences.
            </p>
            <p>
              Every build starts with the people using it. I shape the structure
              first, then layer in motion, character, and detail without
              sacrificing accessibility or performance. React, Vite, Tailwind
              CSS, and Python work together as practical tools in that process,
              not as decoration.
            </p>
            <p>
              The result is a portfolio of interfaces that communicate quickly,
              adapt beautifully across devices, and remain maintainable after
              launch. DCE Studio brings a sharp visual point of view and an
              engineering mindset to every collaboration, from first sketch to
              final interaction.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <div className="px-5 py-3 rounded-xl bg-neutral-900 border border-neutral-800">
                <span className="block text-2xl font-bold text-emerald-400">
                  3+
                </span>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  Years Building
                </span>
              </div>
              <div className="px-5 py-3 rounded-xl bg-neutral-900 border border-neutral-800">
                <span className="block text-2xl font-bold text-cyan-400">
                  20+
                </span>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  Ideas Shipped
                </span>
              </div>
            </div>
          </motion.div>

          {/* Visual / Highlight Card Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative p-8 rounded-3xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-xl shadow-2xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xl">
                  ⚡
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Core Philosophy
                  </h3>
                  <p className="text-xs font-mono text-neutral-400">
                    Form follows function
                  </p>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-neutral-300">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Clean, maintainable, modular component design
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Performance-first optimization and fast load times
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Immersive dark-themed UI with glassmorphism elements
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Seamless responsiveness across mobile, tablet, and desktop
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
