import { AnimatePresence, motion } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/80 p-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="presentation"
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-xl rounded-2xl border border-neutral-800 bg-neutral-900 p-7 shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-lg p-2 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
              aria-label="Close project details"
            >
              <span aria-hidden="true" className="text-xl leading-none">
                &times;
              </span>
            </button>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-emerald-400">
              Project details
            </p>
            <h2
              id="project-modal-title"
              className="mb-4 pr-8 text-3xl font-bold text-white"
            >
              {project.title}
            </h2>
            <p className="mb-6 leading-relaxed text-neutral-300">
              {project.details || project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack?.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1 text-xs text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
