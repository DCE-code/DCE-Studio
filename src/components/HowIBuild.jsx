import Reveal from "./Reveal";

const steps = [
  ["01", "Discover", "Understand the business, audience and project goals."],
  ["02", "Plan", "Define structure, user flow and visual direction."],
  ["03", "Design", "Create a clean and responsive interface."],
  ["04", "Develop", "Build the experience with modern frontend technologies."],
  [
    "05",
    "Test & Launch",
    "Test responsiveness, performance and functionality before deployment.",
  ],
];

export default function HowIBuild() {
  return (
    <section id="process" className="section process-section">
      <div className="section-shell">
        <Reveal className="section-heading">
          <div>
            <p className="section-kicker">A straightforward process</p>
            <h2 className="section-title">
              From first conversation <span>to launch.</span>
            </h2>
          </div>
          <p className="section-description">
            A clear sequence keeps the work collaborative and the decisions
            grounded in the project goals.
          </p>
        </Reveal>
        <div className="process-grid">
          {steps.map(([number, title, description], index) => (
            <Reveal
              key={number}
              as="article"
              delay={index * 55}
              className="process-step"
            >
              <span className="process-step__number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
