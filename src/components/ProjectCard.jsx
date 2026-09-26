/* eslint-disable react/prop-types */
export default function ProjectCard({ project, index, onOpenCaseStudy }) {
  const previewHost = project.liveUrl
    ? new URL(project.liveUrl).hostname
    : "Project preview";
  const previewContent = (
    <>
      <div className="browser-preview__bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <small>{previewHost}</small>
      </div>
      <img
        src={project.image}
        alt={`${project.title} website preview`}
        loading={index < 2 ? "eager" : "lazy"}
        decoding="async"
      />
    </>
  );

  return (
    <article
      className={`project-card ${project.featured ? "project-card--featured" : ""}`}
    >
      <div className="project-card__media">
        <div className="browser-preview">
          {project.liveUrl ? (
            <a
              className="browser-preview__link"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open the live ${project.title} website`}
            >
              {previewContent}
            </a>
          ) : (
            previewContent
          )}
        </div>
        <span className="project-card__category">{project.category}</span>
      </div>
      <div className="project-card__body">
        <p className="project-card__eyebrow">
          {project.featured ? "Selected project" : "Project"}
        </p>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        <div className="project-card__tech" aria-label="Technology">
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
              Live Website <span aria-hidden="true">&#8599;</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              className="button button-secondary"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code <span aria-hidden="true">&#8599;</span>
            </a>
          )}
          <button
            className="button button-secondary project-card__more"
            type="button"
            onClick={() => onOpenCaseStudy(project)}
            aria-label={`View ${project.title} case study`}
          >
            Case Study <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
    </article>
  );
}
