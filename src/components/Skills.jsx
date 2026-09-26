import Reveal from "./Reveal";

const groups = [
  {
    title: "Frontend",
    description: "Core technologies for responsive, interactive websites.",
    skills: [
      ["React", "Reusable interfaces and component-based UI."],
      ["JavaScript", "Modern browser interactions and application logic."],
      ["HTML5", "Semantic structure and accessible content."],
      ["CSS3", "Responsive layouts, visual systems and motion."],
      ["Tailwind CSS", "Utility-first styling for consistent interfaces."],
      ["Next.js", "Building production projects with Next.js."],
    ],
  },
  {
    title: "Tools",
    description: "A practical workflow for building and shipping projects.",
    skills: [
      ["Git", "Version control for everyday development."],
      ["GitHub", "Project hosting and source control."],
      ["VS Code", "Primary code editor."],
      ["Vercel", "Frontend project deployment."],
    ],
  },
  {
    title: "Design",
    description:
      "Design awareness that helps interfaces feel considered and usable.",
    skills: [
      ["UI/UX", "Clear hierarchy and predictable user flows."],
      ["Responsive Design", "Layouts that adapt across screen sizes."],
      ["Graphic Design", "Visual communication and composition."],
      ["Figma Implementation", "Translating design concepts into working UI."],
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-shell">
        <Reveal className="section-heading">
          <div>
            <p className="section-kicker">Technology / Toolkit</p>
            <h2 className="section-title">
              The tools behind <span>the work.</span>
            </h2>
          </div>
          <p className="section-description">
            A practical frontend toolkit, with design awareness and a focus on
            responsive, maintainable interfaces.
          </p>
        </Reveal>
        <div className="skills-grid">
          {groups.map((group, index) => (
            <Reveal
              key={group.title}
              as="article"
              delay={index * 65}
              className="skill-group"
            >
              <h3>{group.title}</h3>
              <p className="skill-group__description">{group.description}</p>
              <div className="skill-list">
                {group.skills.map(([skill, description]) => (
                  <div
                    className={`skill-item ${skill === "Next.js" ? "skill-item--next" : ""}`}
                    key={skill}
                  >
                    <strong>{skill}</strong>
                    <p>{description}</p>
                    {skill === "Next.js" && (
                      <small>
                        App Router · file-based routing · next/link · next/image
                        · Server Components concepts · responsive image
                        optimization · Vercel deployment
                      </small>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
