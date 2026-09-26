import Reveal from "./Reveal";

const services = [
  [
    "01",
    "Business Websites",
    "Modern responsive websites for businesses that need a professional online presence.",
  ],
  [
    "02",
    "Landing Pages",
    "High-quality landing pages designed around clarity, usability and conversion.",
  ],
  [
    "03",
    "React Websites",
    "Interactive frontend experiences built with React and modern JavaScript.",
  ],
  [
    "04",
    "Next.js Websites",
    "Websites using Next.js architecture, routing, image optimization and deployment workflows.",
  ],
  [
    "05",
    "UI Implementation",
    "Turning Figma and design concepts into responsive, production-ready interfaces.",
  ],
  [
    "06",
    "Website Redesign",
    "Modernizing outdated websites with responsive layouts and a clearer user experience.",
  ],
];

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="section-shell">
        <Reveal className="section-heading">
          <div>
            <p className="section-kicker">DCE Studio / What I build</p>
            <h2 className="section-title">
              Useful websites, <span>made with intent.</span>
            </h2>
          </div>
          <p className="section-description">
            From the first screen to the final responsive detail, each build is
            shaped around what the business and its visitors need.
          </p>
        </Reveal>
        <div className="services-grid">
          {services.map(([number, title, description], index) => (
            <Reveal
              key={number}
              as="article"
              delay={index * 55}
              className="service-item"
            >
              <span className="service-number">{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <span className="service-arrow" aria-hidden="true">
                &#8599;
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
