/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar({ onOpenRecruiter }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("projects");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && setActiveSection(entry.target.id),
        ),
      { rootMargin: "-35% 0px -55%" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { name: "Work", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      <div className="availability-bar">
        <div className="availability-bar__inner">
          <p>
            <span className="status-dot" /> Available for freelance &amp; remote
            web projects
          </p>
          <span className="availability-bar__stack">
            React <i /> Next.js <i /> JavaScript <i /> Tailwind CSS
          </span>
          <a href="#contact">
            Let&apos;s work together <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <div className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
        <div className="site-nav__inner">
          <a href="#top" className="brand" aria-label="DCE Studio home">
            <span className="brand-mark">
              <img src="/Brand%20logo.png" alt="" width="40" height="40" />
            </span>
            <span className="brand-copy">
              <strong>DCE Studio</strong>
              <small>David Christian Ekene</small>
            </span>
          </a>
          <nav className="site-nav__links" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                aria-current={
                  activeSection === link.href.slice(1) ? "location" : undefined
                }
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="site-nav__actions">
            <button onClick={onOpenRecruiter} className="nav-cv" type="button">
              View CV
            </button>
            <a href="#contact" className="button button-primary nav-start">
              Start a Project <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
          <button
            onClick={onOpenRecruiter}
            className="nav-cv nav-cv--mobile"
            type="button"
            aria-label="View CV"
            title="View CV"
          >
            CV
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            className={`menu-toggle ${mobileMenuOpen ? "menu-toggle--open" : ""}`}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span />
            <span />
          </button>
        </div>
        <AnimatePresence initial={false}>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              className="mobile-menu"
              id="mobile-navigation"
            >
              <nav
                className="mobile-menu__links"
                aria-label="Mobile navigation"
              >
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} onClick={closeMobileMenu}>
                    {link.name}
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                ))}
              </nav>
              <div className="mobile-menu__actions">
                <a
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="button button-primary"
                >
                  Start a Project <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
