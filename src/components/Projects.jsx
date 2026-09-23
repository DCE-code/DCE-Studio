import { useState } from "react";
import projectsData from "../data/projects";
import ProjectModal from "./ProjectModal";
import Reveal from "./Reveal";

function ExternalArrow() {
  return <span aria-hidden="true">&rarr;</span>;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="section-shell">
        <Reveal className="section-heading">
          <div>
            <span className="section-kicker">{"// Selected work"}</span>
            <h2 className="section-title">
              A selection of work built with intention.
            </h2>
          </div>
          <p className="section-description">
            A selection of digital products, interfaces, and web experiences
            built with clean code and intentional design.
          </p>
        </Reveal>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <Reveal
              key={project.id}
              as="article"
              delay={index * 100}
              className="project-card"
            >
              <div className="project-card__media">
                <img
                  src={project.image}
                  alt={`${project.title} project preview by David Christian Ekene`}
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
                      data-magnetic
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
                      data-magnetic
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
            </Reveal>
          ))}
        </div>
      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
