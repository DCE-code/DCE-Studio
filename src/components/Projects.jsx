import { useState } from "react";
import projectsData from "../data/projects";
import ProjectModal from "./ProjectModal";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section projects-section">
      <div className="section-shell">
        <Reveal className="section-heading">
          <div>
            <p className="section-kicker">Selected work / Case studies</p>
            <h2 className="section-title">
              Real projects, <span>clear thinking.</span>
            </h2>
          </div>
          <p className="section-description">
            A look at websites and interfaces built across e-commerce, real
            estate, opportunity discovery and interactive web experiences.
          </p>
        </Reveal>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <Reveal key={project.id} delay={index * 45}>
              <ProjectCard
                project={project}
                index={index}
                onOpenCaseStudy={setSelectedProject}
              />
            </Reveal>
          ))}
        </div>
        <aside className="quality-note">
          <div>
            <p className="section-kicker">Built with a focus on quality.</p>
            <p>
              I focus on building clean, responsive and maintainable interfaces
              that work across devices and communicate clearly.
            </p>
          </div>
          <ul aria-label="Capabilities">
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Responsive design</li>
            <li>Modern UI</li>
            <li>GitHub</li>
            <li>Vercel</li>
          </ul>
        </aside>
      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
