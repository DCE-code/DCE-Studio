import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-shell about-layout">
        <Reveal>
          <p className="section-kicker">A little about me</p>
          <h2 className="section-title">
            Thoughtful interfaces, <span>built around real needs.</span>
          </h2>
          <div className="about-copy">
            <p>
              <strong>David Christian Ekene</strong>
              <br />
              Junior Frontend Developer &amp; Founder of DCE Studio
            </p>
            <p>
              I combine frontend development, UI/UX thinking, responsive web
              design and graphic design awareness to create websites that feel
              clear, credible and easy to use.
            </p>
            <p>
              From business websites and landing pages to interactive React
              experiences, I focus on the details that help a product
              communicate well across devices and support the goals behind it.
            </p>
          </div>
          <a className="text-link" href="#process">
            More About Me <span aria-hidden="true">&rarr;</span>
          </a>
        </Reveal>
        <Reveal as="aside" delay={100} className="about-aside">
          <span className="aside-label">How I contribute</span>
          <ul>
            <li>Frontend development</li>
            <li>UI/UX thinking</li>
            <li>Responsive web design</li>
            <li>Business-focused websites</li>
          </ul>
          <div className="about-education">
            <span className="aside-label">Education</span>
            <strong>Diploma in Frontend Development</strong>
            <span>DEEJOFT Coding School · 2026 · Credit</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
