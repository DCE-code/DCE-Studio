import React from "react";
import { motion } from "framer-motion";
import AmbientScene from "./AmbientScene";

export default function Hero({ onOpenRecruiter }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 pt-20 pb-16">
      {/* Background 3D/Ambient Layer */}
      <AmbientScene />

      {/* Radial Gradient Glow Overlays */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center lg:mr-[min(31vw,25rem)] lg:max-w-3xl">
        {/* Top Branding Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/80 border border-neutral-800 backdrop-blur-md mb-8 shadow-xl"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-neutral-300 tracking-wider uppercase">
            DCE Studio &bull; Frontend Architect & UI/UX Designer
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Engineering Immersive <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-teal-300 to-cyan-400">
            Digital Experiences
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed"
        >
          Crafting high-performance web applications with modern architecture,
          fluid animations, and uncompromising attention to detail.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm transition-all duration-300 shadow-xl shadow-emerald-500/20 text-center"
          >
            Explore Projects
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-sm transition-all duration-300 border border-neutral-800 hover:border-neutral-700 text-center"
          >
            Let's Talk
          </a>

          <button
            type="button"
            onClick={onOpenRecruiter}
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 font-medium text-sm transition-all duration-300 text-center"
          >
            View / Download CV
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute -bottom-20 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-5 h-9 rounded-full border-2 border-neutral-800 flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="w-1 h-2 bg-emerald-400 rounded-full"
            />
          </div>
        </motion.div>
      </div>

      <motion.figure
        initial={{ opacity: 0, x: 36, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
        className="hero-portrait relative z-10 mt-16 h-112 w-[min(88vw,22rem)] overflow-hidden border border-white/20 bg-neutral-900 shadow-2xl shadow-black/50 lg:absolute lg:right-[7%] lg:top-1/2 lg:mt-0 lg:h-[min(74vh,42rem)] lg:w-[min(31vw,25rem)] lg:-translate-y-1/2"
      >
        <img
          src="/file_00000000034c71f4a5b920ea5cf24f48.png"
          alt="DCE Studio founder in the studio"
          width="1080"
          height="1440"
          fetchpriority="high"
          decoding="async"
          className="hero-portrait__image h-full w-full object-cover object-[50%_18%] transition duration-700 hover:scale-[1.025]"
        />
        <div
          className="hero-portrait__wash absolute inset-0"
          aria-hidden="true"
        />
        <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between border-t border-white/15 bg-[#07100d]/75 px-4 py-3 text-white backdrop-blur-md">
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-emerald-200">
            DCE Studio / Founder
          </span>
          <span className="font-mono text-[9px] text-white/45">01 / 01</span>
        </figcaption>
      </motion.figure>
    </section>
  );
}
