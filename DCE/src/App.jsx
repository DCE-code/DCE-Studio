import { useState, useEffect } from "react";
import CinematicIntro from "./components/CinematicIntro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Services from "./components/Services";
import HowIBuild from "./components/HowIBuild";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RecruiterMode from "./components/RecruiterMode";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [recruiterActive, setRecruiterActive] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("dce_theme") || "dark",
  );

  useEffect(() => {
    // Check if cinematic intro was already played in this session
    const hasSeenIntro = sessionStorage.getItem("dce_intro_seen");
    if (hasSeenIntro) {
      setIntroComplete(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("dce_theme", theme);
  }, [theme]);

  const handleIntroComplete = () => {
    sessionStorage.setItem("dce_intro_seen", "true");
    setIntroComplete(true);
  };

  return (
    <div
      id="top"
      className={`app-container ${recruiterActive ? "recruiter-mode-active" : ""}`}
    >
      <ScrollProgress />
      <CustomCursor />

      {!introComplete && <CinematicIntro onComplete={handleIntroComplete} />}

      <div
        className={`main-content ${!introComplete ? "content-hidden" : "content-visible"}`}
      >
        <Navbar
          onOpenRecruiter={() => setRecruiterActive(true)}
          theme={theme}
          onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
        />

        <main>
          <Hero onOpenRecruiter={() => setRecruiterActive(true)} />
          <Projects />
          <Skills />
          <Services />
          <HowIBuild />
          <About />
          <Contact />
        </main>

        <Footer />

        <RecruiterMode
          isOpen={recruiterActive}
          onClose={() => setRecruiterActive(false)}
        />
      </div>
    </div>
  );
}
