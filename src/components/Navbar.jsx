/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar({ onOpenRecruiter }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

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
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
      <div className="site-nav__inner">
        <a
          href="#top"
          className="flex items-center gap-3 group"
          aria-label="DCE Studio home"
        >
          <div className="brand-mark">
            <img
              src="/Brand%20logo.png"
              alt="DCE Studio logo"
              width="40"
              height="40"
            />
          </div>
          <div className="brand-copy">
            <span>DCE STUDIO</span>
            <span>Junior Frontend Developer</span>
          </div>
        </a>

        <nav className="site-nav__links" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`site-nav__link ${activeSection === link.href.slice(1) ? "site-nav__link--active" : ""}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="site-nav__actions">
          <button
            onClick={onOpenRecruiter}
            className="nav-cv"
            type="button"
            data-magnetic
          >
            Download CV
          </button>
        </div>

        <div className="mobile-actions">
          <button
            type="button"
            onClick={onOpenRecruiter}
            className="nav-cv nav-cv--mobile"
            aria-label="View or download CV"
            title="View or download CV"
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
            <span className="menu-toggle__line menu-toggle__line--top" />
            <span className="menu-toggle__line menu-toggle__line--middle" />
            <span className="menu-toggle__line menu-toggle__line--bottom" />
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mobile-menu mobile-menu--open"
            id="mobile-navigation"
          >
            <nav className="mobile-menu__links" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="mobile-menu__link"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="mobile-menu__footer">
              <button
                onClick={() => {
                  closeMobileMenu();
                  onOpenRecruiter();
                }}
                className="button button-primary"
                type="button"
              >
                Download CV
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
