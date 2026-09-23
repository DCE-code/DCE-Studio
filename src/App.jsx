import { useState } from "react";
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
import ScrollProgress from "./components/ScrollProgress";
import "./App.css";

export default function App() {
  const [recruiterActive, setRecruiterActive] = useState(false);

  return (
    <div
      id="top"
      className={`app-container ${recruiterActive ? "recruiter-mode-active" : ""}`}
    >
      <ScrollProgress />
      <div className="main-content content-visible">
        <Navbar onOpenRecruiter={() => setRecruiterActive(true)} />

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
