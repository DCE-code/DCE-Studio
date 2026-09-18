import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import CVDocument from "./CVDocument";

export default function RecruiterMode({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-neutral-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <h3 className="text-white font-mono text-sm tracking-wider uppercase">
                Recruiter Mode &amp; CV Viewer
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-mono text-xs font-bold transition-colors flex items-center gap-2"
              >
                <span aria-hidden="true">🖨️</span> Print / Download CV
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors"
                aria-label="Close Modal"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Modal Content / CV Document Container */}
          <div className="p-6 md:p-10 overflow-y-auto bg-neutral-950 flex-1">
            <CVDocument />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
