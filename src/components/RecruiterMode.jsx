/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import CVDocument from "./CVDocument";

export default function RecruiterMode({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="cv-viewer-overlay fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-neutral-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="cv-viewer-panel relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Modal Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 bg-neutral-950 px-4 py-3 sm:px-6 sm:py-4">
            <div className="flex min-w-0 items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <h3 className="text-white font-mono text-xs tracking-wider uppercase sm:text-sm">
                CV Viewer
              </h3>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-2">
              <button
                onClick={handlePrint}
                className="min-h-10 px-3 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-mono text-[10px] font-bold transition-colors flex items-center gap-2 sm:px-4 sm:text-xs"
              >
                Download CV
              </button>
            </div>
          </div>

          {/* Modal Content / CV Document Container */}
          <div className="cv-viewer-content p-6 md:p-10 overflow-y-auto bg-neutral-950 flex-1">
            <CVDocument onBack={onClose} />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
