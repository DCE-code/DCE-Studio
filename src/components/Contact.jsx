import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-shell contact-inner">
        <Reveal className="contact-copy">
          <p className="section-kicker">Contact / DCE Studio</p>
          <h2>Have a website idea?</h2>
          <p>
            Let&apos;s turn it into a fast, modern and professional digital
            experience.
          </p>
          <div className="contact-actions">
            <a
              className="button button-primary"
              href="mailto:davchristian293@gmail.com?subject=Start%20a%20project"
            >
              Start a Project <span aria-hidden="true">&rarr;</span>
            </a>
            <a
              className="button button-secondary"
              href="mailto:davchristian293@gmail.com"
            >
              Email Me
            </a>
          </div>
        </Reveal>
        <Reveal delay={100} className="contact-details">
          <a href="mailto:davchristian293@gmail.com">
            <small>Email</small>
            <span>davchristian293@gmail.com</span>
            <b aria-hidden="true">&#8599;</b>
          </a>
          <a
            href="https://wa.me/2347015781293?text=Hello%20DCE%20Studio"
            target="_blank"
            rel="noreferrer"
          >
            <small>WhatsApp</small>
            <span>Message DCE Studio</span>
            <b aria-hidden="true">&#8599;</b>
          </a>
          <p>Open to freelance projects and remote opportunities.</p>
        </Reveal>
      </div>
    </section>
  );
}
