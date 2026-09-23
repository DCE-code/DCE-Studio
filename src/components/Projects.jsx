import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import projectsData from "../data/projects";
import ProjectModal from "./ProjectModal";

function ExternalArrow() {
  return <span aria-hidden="true">&rarr;</span>;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="section-shell">
        <div className="section-heading">
          <div>
            <span className="section-kicker">// Selected work</span>
            <h2 className="section-title">
              A selection of work built with intention.
            </h2>
          </div>
          <p className="section-description">
            A selection of digital products, interfaces, and web experiences
            built with clean code and intentional design.
          </p>
        </div>

        <motion.div
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          <AnimatePresence mode="popLayout">
            {projectsData.map((project) => (
              <motion.article
                key={project.id}
                className="project-card"
                variants={{
                  hidden: { opacity: 0, y: 24, filter: "blur(5px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                layout
              >
                <div className="project-card__media">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="project-card__category">
                    {project.category}
                  </span>
                </div>
                <div className="project-card__body">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__description">
                    {project.description}
                  </p>
                  <div className="project-card__tech">
                    {project.techStack?.map((tech) => (
                      <span className="tech-badge" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-card__actions">
                    {project.liveUrl && (
                      <a
                        className="button button-primary"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo <ExternalArrow />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        className="button button-secondary"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        GitHub
                      </a>
                    )}
                    <button
                      className="button button-secondary project-card__more"
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`View details for ${project.title}`}
                    >
                      <span aria-hidden="true">+</span>
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
