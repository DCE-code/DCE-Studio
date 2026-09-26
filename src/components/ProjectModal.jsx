/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;
    const previousFocus = document.activeElement;
    const handleKeyDown = (event) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus?.();
    };
  }, [onClose, project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="presentation"
          onClick={onClose}
        >
          <motion.div
            className="modal-panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="modal-close"
              aria-label="Close project details"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            {project.image && (
              <div className="modal-image">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
            <p className="modal-kicker">{project.category} / Case study</p>
            <h2 id="project-modal-title">{project.title}</h2>
            <p className="modal-lede">
              {project.caseStudy?.overview || project.description}
            </p>
            <dl className="case-study-grid">
              <div>
                <dt>Challenge</dt>
                <dd>{project.caseStudy?.challenge || project.description}</dd>
              </div>
              <div>
                <dt>Design Direction</dt>
                <dd>
                  {project.caseStudy?.designDirection ||
                    "A clear, responsive interface shaped around the project content."}
                </dd>
              </div>
              <div>
                <dt>Development</dt>
                <dd>
                  {project.caseStudy?.development ||
                    "Frontend implementation using the technologies listed below."}
                </dd>
              </div>
              <div>
                <dt>Key Features</dt>
                <dd>
                  <ul className="modal-features">
                    {(project.caseStudy?.features || []).map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div>
                <dt>Technology</dt>
                <dd>{project.techStack?.join(" · ")}</dd>
              </div>
              <div>
                <dt>Outcome</dt>
                <dd>
                  {project.caseStudy?.outcome ||
                    "A responsive project interface published as a live demo."}
                </dd>
              </div>
            </dl>
            <div className="modal-tech" aria-label="Technology">
              {project.techStack?.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
            <div className="modal-actions">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-primary"
                >
                  Live Demo <span aria-hidden="true">&#8599;</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-secondary"
                >
                  GitHub Repository <span aria-hidden="true">&#8599;</span>
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
