import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ onOpenRecruiter, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800/80 py-4 shadow-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo / Identity */}
        <a
          href="#top"
          className="flex items-center gap-3 group"
          aria-label="DCE Studio home"
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-emerald-400/40 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            <img
              src="/Brand%20logo.png"
              alt="DCE Studio logo"
              className="h-full w-full object-cover"
              width="40"
              height="40"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-white tracking-wider text-sm">
              DCE STUDIO
            </span>
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
              Frontend Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-300 hover:text-emerald-400 transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-200 transition-colors hover:border-emerald-500/50 hover:text-emerald-400"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <button
            onClick={onOpenRecruiter}
            className="px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-emerald-500/50 text-xs font-mono text-neutral-200 hover:text-emerald-400 transition-all duration-300 flex items-center gap-2 shadow-inner"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Recruiter Mode
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white focus:outline-none"
          aria-label="Toggle Menu"
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

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-950/95 backdrop-blur-2xl border-b border-neutral-800 px-6 py-6 space-y-4"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-neutral-200 hover:text-emerald-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-neutral-800/80 flex flex-col gap-3">
              <button
                type="button"
                onClick={onToggleTheme}
                className="w-full py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 font-mono text-xs font-bold uppercase tracking-wider"
              >
                {theme === "dark" ? "Use Light Theme" : "Use Dark Theme"}
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRecruiter();
                }}
                className="w-full py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Launch Recruiter Mode
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
