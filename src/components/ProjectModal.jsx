import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    const handleKeyDown = (event) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="presentation"
          onClick={onClose}
        >
          <motion.div
            className="modal-panel relative w-full max-w-2xl rounded-2xl border p-5 shadow-2xl sm:p-7"
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
            {project.image && (
              <div className="mb-6 aspect-video overflow-hidden rounded-xl border border-slate-700/50">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-emerald-400">
              {project.category} / Case study
            </p>
            <h2
              id="project-modal-title"
              className="mb-4 pr-8 text-3xl font-bold text-white"
            >
              {project.title}
            </h2>
            <p className="mb-6 leading-relaxed text-neutral-300">
              {project.caseStudy?.overview || project.description}
            </p>
            {project.caseStudy && (
              <div className="grid gap-5 text-sm text-neutral-300">
                {[
                  ["Problem", project.caseStudy.problem],
                  ["My role", project.caseStudy.role],
                  ["Challenges", project.caseStudy.challenges],
                  ["Solution", project.caseStudy.solution],
                  ["Result", project.caseStudy.result],
                ].map(([label, value]) => (
                  <div key={label}>
                    <h3 className="mb-1 text-xs font-mono uppercase tracking-widest text-emerald-400">
                      {label}
                    </h3>
                    <p className="leading-relaxed">{value}</p>
                  </div>
                ))}
                <div>
                  <h3 className="mb-2 text-xs font-mono uppercase tracking-widest text-emerald-400">
                    Key features
                  </h3>
                  <ul className="list-disc space-y-1 pl-5">
                    {project.caseStudy.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
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
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary mt-6"
              >
                Live Demo &rarr;
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
