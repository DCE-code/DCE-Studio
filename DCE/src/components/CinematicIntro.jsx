import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CinematicIntro({ onComplete }) {
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (step !== 2) return undefined;

    const revealTimer = window.setTimeout(() => setStep(3), 2400);
    return () => window.clearTimeout(revealTimer);
  }, [step]);

  const handleStartSequence = () => {
    setStep(2);
  };

  const handleFinish = () => {
    if (onComplete) onComplete();
  };

  return (
    <div className="cinematic-intro fixed inset-0 z-60 overflow-hidden bg-[#080b0b] text-white">
      <div className="cinematic-intro__set absolute inset-0" aria-hidden="true">
        <div className="cinematic-intro__ceiling" />
        <div className="cinematic-intro__light cinematic-intro__light--left" />
        <div className="cinematic-intro__light cinematic-intro__light--right" />
        <div className="cinematic-intro__floor" />
        <div className="cinematic-intro__wall-line cinematic-intro__wall-line--top" />
        <div className="cinematic-intro__wall-line cinematic-intro__wall-line--bottom" />
        <div className="cinematic-intro__car">
          <span className="cinematic-intro__car-window" />
          <span className="cinematic-intro__car-body" />
          <span className="cinematic-intro__wheel cinematic-intro__wheel--front" />
          <span className="cinematic-intro__wheel cinematic-intro__wheel--back" />
        </div>
        <motion.div
          className="cinematic-intro__figure"
          animate={{
            x: step === 2 ? 128 : 0,
            opacity: step === 2 ? 0.95 : 0.72,
          }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="cinematic-intro__head" />
          <span className="cinematic-intro__body" />
          <span className="cinematic-intro__leg cinematic-intro__leg--left" />
          <span className="cinematic-intro__leg cinematic-intro__leg--right" />
        </motion.div>
        <motion.div
          className={`cinematic-intro__door ${step === 2 ? "is-open" : ""}`}
          animate={{ rotateY: step === 2 ? -72 : 0 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="cinematic-intro__door-handle" />
        </motion.div>
        <div
          className={`cinematic-intro__doorway ${step === 2 ? "is-lit" : ""}`}
        />
        <div className="cinematic-intro__grain" />
      </div>
      <div
        className="cinematic-intro__vignette absolute inset-0"
        aria-hidden="true"
      />
      <div className="relative z-10 flex min-h-full flex-col justify-between px-6 py-7 md:px-12 md:py-10">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-white/50">
          <span>DCE / 01</span>
          <span>Studio entrance</span>
        </div>
        <AnimatePresence mode="wait">
          {step < 3 && (
            <motion.div
              key="scene"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mx-auto flex w-full max-w-3xl flex-col items-center space-y-7 text-center"
            >
              <div className="space-y-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-emerald-300/80">
                  {step === 1 ? "The night shift begins" : "Access granted"}
                </p>
                <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                  {step === 1
                    ? "A considered entrance into digital craft."
                    : "The studio is ready for your next idea."}
                </h2>
                <p className="mx-auto max-w-md text-sm leading-6 text-white/55">
                  {step === 1
                    ? "Experience the cinematic entrance to DCE Studio."
                    : "Unlocking the gateway to high-performance frontend engineering."}
                </p>
              </div>

              {step === 1 && (
                <button
                  onClick={handleStartSequence}
                  className="group flex items-center gap-4 border border-white/20 bg-white/8 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-colors hover:border-emerald-300/60 hover:bg-emerald-300 hover:text-[#08100d]"
                >
                  Enter studio{" "}
                  <span className="text-base transition-transform group-hover:translate-x-1">
                    -&gt;
                  </span>
                </button>
              )}
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative flex flex-col items-center space-y-6 text-center"
            >
              <div className="relative z-10 h-20 w-20 overflow-hidden rounded-2xl border border-emerald-300/70 shadow-2xl shadow-emerald-500/30">
                <img
                  src="/Brand%20logo.png"
                  alt="DCE Studio logo"
                  className="h-full w-full object-cover"
                  width="80"
                  height="80"
                />
              </div>

              <div className="relative z-10 space-y-2">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.38em] text-emerald-300">
                  Welcome inside
                </span>
                <h1 className="text-5xl font-semibold tracking-tighter text-white md:text-7xl">
                  DCE <span className="text-emerald-300">STUDIO</span>
                </h1>
                <p className="text-neutral-400 text-sm max-w-sm mx-auto">
                  Frontend Web Development &amp; UI/UX Design Portfolio
                </p>
              </div>

              <button
                onClick={handleFinish}
                className="relative z-10 mt-4 border border-emerald-300 bg-emerald-300 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#08100d] shadow-xl shadow-emerald-500/20 transition-colors hover:bg-white"
              >
                Explore Portfolio
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
