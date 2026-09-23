import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ onOpenRecruiter }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
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

  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
      <div className="site-nav__inner">
        {/* Brand Logo / Identity */}
        <a
          href="#top"
          className="flex items-center gap-3 group"
          aria-label="DCE Studio home"
        >
          <div className="brand-mark">
            <img
              src="/Brand%20logo.png"
              alt="DCE Studio logo"
              className="h-full w-full object-cover"
              width="40"
              height="40"
            />
          </div>
          <div className="brand-copy">
            <span>DCE STUDIO</span>
            <span>Junior Frontend Developer</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
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

        {/* Action Controls */}
        <div className="site-nav__actions">
          <button onClick={onOpenRecruiter} className="nav-cv" type="button">
            Download CV
          </button>
        </div>

        {/* Mobile Actions */}
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
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              />
              <span
                className={`w-full h-0.5 bg-white transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-full h-0.5 bg-white transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu"
            id="mobile-navigation"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-menu__link"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mobile-menu__footer">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRecruiter();
                }}
                className="button button-primary"
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
