export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-main">
        <a href="#top" className="footer-brand">
          <strong>DCE Studio</strong>
          <span>
            David Christian Ekene
            <br />
            Frontend Developer · Web Designer
          </span>
        </a>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a
            href="https://github.com/DCE-code"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">&#8599;</span>
          </a>
          <a
            href="https://www.linkedin.com/in/christian-david-479650311"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span aria-hidden="true">&#8599;</span>
          </a>
        </nav>
      </div>
      <div className="section-shell footer-bottom">
        <span>&copy; 2026 DCE Studio</span>
        <a href="#top">Back to top &uarr;</a>
      </div>
    </footer>
  );
}
