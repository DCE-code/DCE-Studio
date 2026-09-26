export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title" id="home">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-copy">
        <p className="hero-eyebrow">
          <span>David Christian Ekene</span>
          <i /> Junior Frontend Developer <i /> Web Designer <i /> Digital
          Creator
        </p>
        <h1 id="hero-title" className="hero-title">
          I build fast, modern websites that help businesses look credible and{" "}
          <span>turn visitors into customers.</span>
        </h1>
        <p className="hero-subtitle">
          A Junior Frontend Developer in Ibadan, Nigeria, building responsive,
          interactive web experiences with JavaScript, React, and Vite.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="button button-primary">
            Start a Project <span aria-hidden="true">&rarr;</span>
          </a>
          <a href="#projects" className="button button-secondary">
            View My Work <span aria-hidden="true">&darr;</span>
          </a>
        </div>
        <a
          className="hero-audit"
          href="mailto:davchristian293@gmail.com?subject=Free%20website%20audit"
        >
          Get a Free Website Audit <span aria-hidden="true">&rarr;</span>
        </a>
        <div
          className="hero-tech"
          aria-label="Technologies: HTML, CSS, JavaScript, React, Vite"
        >
          <span>HTML &amp; CSS</span>
          <i />
          <span>React</span>
          <i /> <span>JavaScript</span>
          <i /> <span>Vite</span>
        </div>
      </div>
      <div className="hero-visual">
        <figure className="hero-portrait">
          <img
            src="/file_00000000034c71f4a5b920ea5cf24f48.png"
            alt="David Christian Ekene"
            width="1080"
            height="1440"
            decoding="async"
            className="hero-portrait__image"
          />
          <figcaption>
            <span>Independent developer / DCE Studio</span>
            <span>Ibadan, NG</span>
          </figcaption>
        </figure>
        <div
          className="code-window"
          aria-label="A small preview of a responsive React component"
        >
          <div className="code-window__bar">
            <span />
            <span />
            <span />
            <small>responsive-ui.jsx</small>
          </div>
          <pre>
            <code>
              <span className="code-muted">01</span>{" "}
              <b>export default function</b> Hero() &#123;{"\n"}
              <span className="code-muted">02</span> <em>return</em> (&lt;main
              className=<strong>&quot;responsive&quot;</strong>&gt;{"\n"}
              <span className="code-muted">03</span> &lt;h1&gt;Built for
              people.&lt;/h1&gt;{"\n"}
              <span className="code-muted">04</span> &lt;/main&gt;);{"\n"}
              <span className="code-muted">05</span> &#125;
            </code>
          </pre>
          <div className="code-window__status">
            <span>
              <i /> Live preview
            </span>
            <span>React / UI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
