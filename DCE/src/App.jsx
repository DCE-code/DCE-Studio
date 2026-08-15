// import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import * as THREE from "three";
// import { div } from 'three/src/nodes/math/OperatorNode.js';



/* =========================================================
    DATA
========================================================= */
const NAV_LINKS = [
  // { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "video", label: "Video" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Testimonials" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

const SKILLS = [
  "HTML5 / Semantic Markup",
  "CSS3 / Flexbox & Grid",
  "JavaScript (ES6+)",
  "Python",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Git & GitHub Workflow",
  "UI/UX Prototyping",
  "TypeScript",
  "Performance Optimization",
];

const PROJECTS = [
  {
    category: "frontend",
    badge: "Advanced DOM Manipulation",
    title: "LAB SITE",
    description:
      "Built an interactive dashboard utilizing advanced DOM manipulation to handle complex user inputs and update components dynamically in real time.",
    tags: ["HTML5", "CSS3", "JS DOM"],
    live: "https://dce-code.github.io/JS-project/",
    repo: "https://github.com/DCE-code/JS-project",
  },
  {
    category: "frontend",
    badge: "UI/UX Prototyping",
    title: "Royal Banquet",
    description:
      "A responsive restorant site interface designed to provide a smooth browser experience.",
    tags: ["HTML5", "CSS", "JavaScript"],
    live: "https://royal-banquet-db1h.vercel.app",
    repo: "https://github.com/DCE-code/Royal-Banquet",
  },
  {
    category: "frontend",
    badge: "API Integration",
    title: "Mini Store",
    description:
      "A responsive e-commerce interface designed to provide a smooth product browsing experience, with components and API-driven product data.",
    tags: ["React", "Vite", "Tailwind"],
    live: "https://final-ministore.netlify.app",
    repo: "https://github.com/DCE-code/ministore",
  },
  {
    category: "UI/UX",
    badge: "Dynamic property",
    title: "Logistic Transport",
    description:
      "A professional logistic transport site interface designed to provide a smooth browser experience",
    tags: ["HTML5", "CSS", "JavaScript"],
    live: "https://thetransport.netlify.app",
    repo: "https://github.com/DCE-code/David-Son",
  },
  {
    category: "UI/UX",
    badge: "React & Vite",
    title: "Car Rental",
    description:
      "A responsive car rental application designed with a clean interface for browsing Dodge vehicles and exploring rental options.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    live: "https://dodge-word.netlify.app",
    repo: "https://github.com/DCE-code/Car-Rental",
  },
];

const BLOG_POSTS = [
  {
    date: "July 24, 2026",
    readTime: "4 min read",
    title: "Optimizing React Re-Renders for 60FPS Micro-Animations",
    snippet: "Deep dive into memoization strategies, useTransition hooks, and composite layers to keep complex interactive dashboards lightning-fast.",
  },
  {
    date: "June 12, 2026",
    readTime: "6 min read",
    title: "Why Tailwind CSS and Semantic HTML Rule Modern Architecture",
    snippet: "Exploring how utility-first workflows combined with strict semantic markup eliminate stylesheet bloat and boost accessibility scores.",
  },
  {
    date: "May 02, 2026",
    readTime: "5 min read",
    title: "Mastering Git Workflows for Solo Developers and Studio Teams",
    snippet: "Practical branching strategies, clean commit conventions, and foolproof GitHub Pages deployment pipelines for modern web products.",
  },
];

const SERVICES = [
  {
    title: "Landing Pages",
    description:
      "High-conversion, lightning-fast landing structures optimized for product launches and marketing campaigns.",
  },
  {
    title: "Business Websites",
    description:
      "Robust, multi-page web architecture built with seamless navigation, accessibility, and stellar performance metrics.",
  },
  {
    title: "Portfolio Websites",
    description:
      "Personalized digital showreels with immersive glassmorphism aesthetics and custom motion design.",
  },
  {
    title: "UI Development & Redesign",
    description:
      "Modernizing legacy codebases into modular, scalable design systems using React, Next.js, and Tailwind CSS.",
  },
  {
    title: "Custom Web Platforms",
    description:
      "Engineering custom, high-converting digital products from scratch, architecture tailored to streamline your business operations and maximize revenue.",
  },
  {
    title: "Legacy Code Modernization",
    description:
      "Revamping outdated websites into lightning-fast, modern interfaces. Optimizing legacy frontend systems to drastically reduce bounce rates and retain users.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "David completely transformed our telemetry frontend. The animations are buttery smooth, and performance metrics skyrocketed past our targets.",
    name: "Marcus Vance",
    role: "Tech Lead at SkyPort Systems",
  },
  {
    quote:
      "An absolute professional. His mastery of Tailwind and React design systems delivered our MVP weeks ahead of schedule.",
    name: "Elena Rostova",
    role: "Product Director",
  },
  {
    quote:
      "More than a developer, David is a true product partner. He flawlessly translates complex UI designs into accessible, pixel-perfect user experiences.",
    name: "Elite Gym",
    role: "Product Manager",
  },
];

const STATS = [
  { target: 100, suffix: "%", label: "Client Satisfaction" },
  { target: 30, suffix: "+", label: "Completed Builds" },
  { target: 3, suffix: "+", label: "Years Experience" },
  { target: 10, suffix: "+", label: "Mastered Frameworks" },
];

/* =========================================================
    ICONS
========================================================= */
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764.784 1.764 1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

/* =========================================================
    HOOKS
========================================================= */

// Eased custom magnetic/following cursor + glow effect
function useMouseGlow() {
  const glowRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mouseX = window.innerWidth / 2,
      mouseY = window.innerHeight / 2,
      posX = mouseX,
      posY = mouseY,
      ringX = mouseX,
      ringY = mouseY,
      rafId;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };
    window.addEventListener("mousemove", handleMove);

    const update = () => {
      posX += (mouseX - posX) * 0.15;
      posY += (mouseY - posY) * 0.15;
      ringX += (mouseX - ringX) * 0.08;
      ringY += (mouseY - ringY) * 0.08;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(update);
    };
    rafId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return { glowRef, dotRef, ringRef };
}

// CSS 3D tilt for cards and avatar
function useTilt() {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;
    if (!container || !card) return;

    const handleMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (-y / (rect.height / 2)) * 10;
      const rotateY = (x / (rect.width / 2)) * 10;
      card.style.transition = "none";
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    const handleLeave = () => {
      card.style.transition = "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      card.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    };

    container.addEventListener("mousemove", handleMove);
    container.addEventListener("mouseleave", handleLeave);
    return () => {
      container.removeEventListener("mousemove", handleMove);
      container.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return { containerRef, cardRef };
}

/* =========================================================
    SCROLL REVEAL WRAPPER
========================================================= */
// eslint-disable-next-line react/prop-types
function Reveal({ children, className = "", as = "div", ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const Tag = as;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`scroll-reveal ${visible ? "active-state" : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

/* =========================================================
    ANIMATED COUNTER
========================================================= */
// eslint-disable-next-line react/prop-types
function Counter({ target, suffix }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const speed = target / 35;
            let count = 0;
            const tick = () => {
              count += speed;
              if (count < target) {
                setValue(Math.ceil(count));
                setTimeout(tick, 40);
              } else {
                setValue(target);
              }
            };
            setTimeout(tick, 40);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="stats-number">
      {value}
      {suffix}
    </span>
  );
}

/* =========================================================
    THREE.JS 3D SCENE (wireframe icosahedron + particle field)
========================================================= */
function ThreeScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let cleanup = () => { };
    try {
      const width = mount.clientWidth || 1;
      const height = mount.clientHeight || 1;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
      camera.position.z = 6;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      mount.appendChild(renderer.domElement);

      const icoGeometry = new THREE.IcosahedronGeometry(2.3, 1);
      const icoMaterial = new THREE.MeshBasicMaterial({
        color: 0x00f2fe,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      const ico = new THREE.Mesh(icoGeometry, icoMaterial);
      scene.add(ico);

      const particleCount = 180;
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      }
      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const particleMaterial = new THREE.PointsMaterial({
        color: 0x4facfe,
        size: 0.045,
        transparent: true,
        opacity: 0.7,
      });
      const particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);

      let frameId;
      const animate = () => {
        ico.rotation.x += 0.0025;
        ico.rotation.y += 0.0035;
        particles.rotation.y += 0.0008;
        renderer.render(scene, camera);
        frameId = requestAnimationFrame(animate);
      };
      animate();

      const handleResize = () => {
        const w = mount.clientWidth || 1;
        const h = mount.clientHeight || 1;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", handleResize);

      cleanup = () => {
        cancelAnimationFrame(frameId);
        window.removeEventListener("resize", handleResize);
        icoGeometry.dispose();
        icoMaterial.dispose();
        particleGeometry.dispose();
        particleMaterial.dispose();
        renderer.dispose();
        if (mount.contains(renderer.domElement)) {
          mount.removeChild(renderer.domElement);
        }
      };
    } catch (err) {
      console.warn("3D scene skipped:", err);
    }

    return () => cleanup();
  }, []);

  return <div ref={mountRef} className="three-canvas-mount" aria-hidden="true" />;
}

/* =========================================================
    MAIN COMPONENT
========================================================= */
export default function Portfolio() {
  const [loaderHidden, setLoaderHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { glowRef, dotRef, ringRef } = useMouseGlow();
  const { containerRef, cardRef } = useTilt();

  useEffect(() => {
    const t = setTimeout(() => setLoaderHidden(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (e) => {
    setFormState((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const templateParams = {
      title: formState.subject,
      name: formState.name,
      message: formState.message,
      email: formState.email,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send("service_8w79egq", "template_qceousp", templateParams, "bMgAGrLSKORbPwYes")
      .then(
        () => {
          setLoading(false);
          setSubmitted(true);
          setFormState({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setSubmitted(false), 4000);
        },
        (error) => {
          setLoading(false);
          setErrorMsg("Failed to send message. Please try again later.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  const handleDownloadCV = () => {
    // Generate a downloadable text/markdown CV representation cleanly
    const cvContent = `# David Christian
Frontend Developer | React Developer | UI Engineer

## PROFESSIONAL SUMMARY

Frontend Developer and UI Engineer focused on building modern, responsive, and high-performance web experiences. Experienced with HTML5, CSS3, JavaScript, React, Next.js, Tailwind CSS, and modern frontend development workflows. Strong interest in creating polished interfaces, interactive experiences, and production-ready websites that combine clean code with thoughtful UI/UX.

## TECHNICAL SKILLS

### Frontend Development
- HTML5, Semantic HTML
- CSS3, Flexbox, CSS Grid
- JavaScript (ES6+)
- React.js
- Next.js
- TypeScript
- Tailwind CSS

### UI / UX
- Responsive Web Design
- Mobile-first Development
- UI/UX Implementation
- Interactive Interfaces
- Prototyping
- Accessibility & Usability

### Tools & Technologies
- Git & GitHub
- REST APIs
- Vite
- Framer Motion
- Three.js
- VS Code
- Modern Browser DevTools

## FEATURED PROJECTS

### 1. LAB SITE — Advanced DOM Manipulation
Interactive frontend project demonstrating advanced JavaScript DOM manipulation, dynamic UI behavior, and responsive design.

**Technologies:** HTML5, CSS3, JavaScript

### 2. Movie Finder — API Integration
Responsive movie discovery application that consumes an external API to retrieve and display movie information dynamically.

**Technologies:** JavaScript, REST API, HTML5, CSS3

### 3. Car Rental Platform
Modern responsive car rental interface designed to provide users with a clean browsing and booking experience.

**Technologies:** HTML5, CSS3, JavaScript

### 4. Dodge Automotive Experience
High-performance automotive landing page inspired by modern automotive digital experiences, featuring dynamic sections, animations, responsive layouts, and performance-focused presentation.

**Technologies:** HTML5, CSS3, JavaScript

## DEVELOPMENT STRENGTHS

- Building responsive websites across mobile, tablet, and desktop
- Converting designs and concepts into functional interfaces
- Creating reusable and maintainable frontend components
- Integrating APIs into interactive web applications
- Developing animated and interactive user experiences
- Writing clean, structured, and maintainable code
- Using Git and GitHub for version control
- Continuously learning modern frontend technologies

## PROFESSIONAL GOAL

Seeking opportunities to contribute as a Frontend Developer, React Developer, or UI Engineer while continuing to grow through real-world projects, collaboration, and modern software development practices.

## CONTACT

Email: [davchristian293@gmail.com]
Location: Nigeria
Portfolio: [https://final-christian.netlify.app]
GitHub: https://github.com/DCE-code
`;
    const blob = new Blob([cvContent], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "David_Christian_CV.md";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const filteredProjects = activeFilter === "all"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <div className="dce-root">
      <style>{CSS}</style>

      {/* Page loader */}
      <div className={`page-loader ${loaderHidden ? "hidden" : ""}`} aria-hidden="true">
        <div className="loader-ring" />
        <div className="loader-content">
          <p className="loader-label">INITIALIZING SYSTEM</p>
          <h2 className="loader-brand">
            DCE <span>Studio</span>
          </h2>
          <div className="loader-bar">
            <span />
          </div>
        </div>
      </div>

      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      {/* Custom Animated Cursor Elements */}
      <div className="interactive-glow" ref={glowRef} aria-hidden="true" />
      <div className="custom-cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="custom-cursor-ring" ref={ringRef} aria-hidden="true" />

      {/* Navbar */}
      <nav className="navbar" aria-label="Primary navigation">
        <div className="nav-container">
          <a href="#home" className="logo">
            DCE<span className="accent">.</span>
          </a>
          <button
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            ☰
          </button>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {NAV_LINKS.map((l) => (
              <a key={l.id} href={`#${l.id}`} className="nav-item" onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <button onClick={handleDownloadCV} className="btn-glass btn-sm cv-btn" aria-label="Download CV">
              CV ↓
            </button>
            <a href="#contact" className="nav-cta">
              LET{'\''}S TALK ↗
            </a>
          </div>
        </div>
      </nav>

      <main id="main-content">
        {/* Hero */}
        <section id="home" className="hero">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="status-pill">
                <span className="pulse-core" /> AVAILABLE FOR REMOTE ROLES & FREELANCE
              </div>
              <h1 className="hero-title">
                Hi, I{'\''}m <br />
                <span className="text-gradient">David Christian</span>
              </h1>
              <h2 className="hero-subtitle">Frontend Developer &amp; UI Engineer</h2>
              <p className="hero-description">
                Founder of DCE Studio. I engineer high-performance, responsive, and pixel-precise web applications
                utilizing modern JavaScript, React, Next.js, and Tailwind CSS.
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn-glow">
                  EXPLORE WORK ↗
                </a>
                <button onClick={handleDownloadCV} className="btn-glass">
                  DOWNLOAD CV 🧾
                </button>
              </div>
              <div className="social-matrix">
                <a href="https://github.com/DCE-code" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GithubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/christian-david-479650331"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon />
                </a>
                <a href="https://x.com/mammieallyson21" target="_blank" rel="noreferrer" aria-label="X">
                  <XIcon />
                </a>
              </div>
            </div>

            <div className="hero-visual" ref={containerRef}>
              <ThreeScene />
              <div className="avatar-glass-frame floating-element" ref={cardRef}>
                <img src="file_00000000034c71f4a5b920ea5cf24f48.png"
                  alt="David Christian"
                  className="avatar-placeholder"
                  style={{ objectFit: 'cover' }} />
                <div className="ui-glass-badge badge-top-right">
                  <span className="badge-accent">⚡</span>
                  <div>
                    <h4>Tech Stack</h4>
                    <p>React • Next.js • Tailwind</p>
                  </div>
                </div>
                <div className="ui-glass-badge badge-bottom-left">
                  <span className="badge-accent">🏆</span>
                  <div>
                    <h4>30+ Projects</h4>
                    <p>Successfully Engineered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <Reveal className="stats-container">
          {STATS.map((s) => (
            <div className="stats-item" key={s.label}>
              <Counter target={s.target} suffix={s.suffix} />
              <span className="stats-label">{s.label}</span>
            </div>
          ))}
        </Reveal>

        {/* About */}
        <Reveal as="section" id="about" className="projects-container">
          <div className="section-meta">
            <span className="tracker-line" />
            <p className="section-tag">01 / BACKGROUND</p>
            <h2 className="section-heading">Engineering Mindset</h2>
            <p className="section-copy">
              Blending rigorous systematic analysis with creative interface design to construct memorable digital
              ecosystems under the DCE Studio brand. I specialize in bridging design precision with back-end data
              architectures for seamless user journeys.
            </p>
          </div>
        </Reveal>

        {/* Skills */}
        <Reveal as="section" id="skills" className="projects-container">
          <div className="section-meta">
            <span className="tracker-line" />
            <p className="section-tag">02 / EXPERTISE</p>
            <h2 className="section-heading">Core Technologies</h2>
            <p className="section-copy">
              Specialized toolsets utilized to build lightning-fast web applications, component libraries, and
              interactive interfaces.
            </p>
          </div>
          <div className="tag-cloud skills-tags">
            {SKILLS.map((s) => (
              <span className="skill-tag" key={s}>
                {s}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Projects with Filtering */}
        <section id="projects" className="projects-container">
          <Reveal className="section-meta">
            <span className="tracker-line" />
            <p className="section-tag">03 / PORTFOLIO</p>
            <h2 className="section-heading">Featured Repositories</h2>
            <p className="section-copy">
              A curated showcase of applications engineered for scalability, fluid motion, and conversion
              performance.
            </p>
          </Reveal>

          <div className="project-filters">
            {["all", "frontend", "UI/UX"].map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          <div className="interactive-grid">
            {filteredProjects.map((p) => (
              <Reveal as="article" className="glass-card" key={p.title + p.badge}>
                <div className="card-interior">
                  <div className="card-details">
                    <span className="card-badge">{p.badge}</span>
                    <h3 className="card-title">{p.title}</h3>
                    <p className="card-description">{p.description}</p>
                    <div className="tag-cloud">
                      {p.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <div className="card-action-bar">
                      <a href={p.live} target="_blank" rel="noreferrer" className="btn-glass btn-sm">
                        Live View ↗
                      </a>
                      <a href={p.repo} target="_blank" rel="noreferrer" className="btn-glass btn-sm">
                        Repository
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Video */}
        <Reveal as="section" id="video" className="projects-container">
          <div className="section-meta">
            <span className="tracker-line" />
            <p className="section-tag">04 / SHOWCASE</p>
            <h2 className="section-heading">Engineering Breakdown</h2>
            <p className="section-copy">
              Watch a quick technical walkthrough showcasing architectural layout decisions, state workflows, and
              motion micro-interactions.
            </p>
          </div>
          <div className="video-wrapper glass-card">
            <div className="video-container-inner">
              <video src="2026-08-06-151033577.mp4"
                controls
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', display: 'block'
                }}>
                Your browser does not support the video tag.
                please update your browser to view the content.
              </video>
            </div>
          </div>
        </Reveal>

        {/* Services */}
        <Reveal as="section" id="services" className="projects-container">
          <div className="section-meta">
            <span className="tracker-line" />
            <p className="section-tag">05 / OFFERINGS</p>
            <h2 className="section-heading">Studio Services</h2>
            <p className="section-copy">
              Tailored engineering and interface solutions designed to scale your business footprint and engage
              users.
            </p>
          </div>
          <div className="interactive-grid">
            {SERVICES.map((s) => (
              <div className="glass-card" key={s.title}>
                <h3 className="card-title">{s.title}</h3>
                <p className="card-description">{s.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Testimonials */}
        <Reveal as="section" id="testimonials" className="projects-container">
          <div className="section-meta">
            <span className="tracker-line" />
            <p className="section-tag">06 / REVIEWS</p>
            <h2 className="section-heading">Client Feedback</h2>
            <p className="section-copy">Trusted by founders, design agencies, and product teams across the globe.</p>
          </div>
          <div className="interactive-grid">
            {TESTIMONIALS.map((t) => (
              <div className="glass-card" key={t.name}>
                <p className="card-description">{`"${t.quote}"`}</p>
                <h4 className="testimonial-name">
                  — {t.name}, {t.role}
                </h4>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Blog Section */}
        <Reveal as="section" id="blog" className="projects-container">
          <div className="section-meta">
            <span className="tracker-line" />
            <p className="section-tag">07 / INSIGHTS</p>
            <h2 className="section-heading">Latest Articles</h2>
            <p className="section-copy">Thoughts on frontend performance, React patterns, and clean web architecture.</p>
          </div>
          <div className="interactive-grid">
            {BLOG_POSTS.map((b) => (
              <article className="glass-card blog-card" key={b.title}>
                <div className="blog-meta-row">
                  <span>{b.date}</span>
                  <span>•</span>
                  <span>{b.readTime}</span>
                </div>
                <h3 className="card-title">{b.title}</h3>
                <p className="card-description">{b.snippet}</p>
                <span className="blog-read-more">Read Article ↗</span>
              </article>
            ))}
          </div>
        </Reveal>

        {/* Contact */}
        <section id="contact" className="projects-container">
          <div className="section-meta">
            <span className="tracker-line" />
            <div className="contact-container">
              <div className="contact-grid">
                <div className="contact-info">
                  <div className="badge">
                    <span className="badge-dot" />
                    LET{'\''}S CONNECT
                  </div>
                  <h2 className="main-title">
                    Let{'\''}s build something <span className="gradient-text">remarkable</span> together.
                  </h2>
                  <p className="subtitle">
                    Have an idea, a project partnership, or looking to scale up your frontend infrastructure? Drop a
                    line, and let{'\''}s make it real.
                  </p>

                  <div className="info-blocks">
                    <div className="info-card">
                      <div className="info-icon-box">
                        <MailIcon />
                      </div>
                      <div>
                        <h4>Email Me Directly</h4>
                        <p>davchristian293@gmail.com</p>
                      </div>
                    </div>
                    <div className="info-card">
                      <div className="info-icon-box">
                        <PinIcon />
                      </div>
                      <div>
                        <h4>Current Workspace Base</h4>
                        <p>Lagos, Nigeria</p>
                      </div>
                    </div>
                  </div>

                  <div className="social-wrapper">
                    <h3>Connect Offline Channels</h3>
                    <div className="social-links">
                      <a href="https://www.linkedin.com/in/christian-david-479650331" target="_blank" rel="noreferrer">
                        LinkedIn
                      </a>
                      <a href="https://github.com/DCE-code" target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                      <a href="https://x.com/mammieallyson21" target="_blank" rel="noreferrer">
                        X (Twitter)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="contact-form-wrapper-3d">
                  <div className="contact-form-card">
                    <form className="contact-form" onSubmit={handleSubmit}>
                      <div className="form-row">
                        <div className="input-group">
                          <label htmlFor="name">Your Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formState.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="input-group">
                          <label htmlFor="email">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="john@example.com"
                            value={formState.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="input-group">
                        <label htmlFor="subject">Project Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          placeholder="Web Application Development"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="input-group">
                        <label htmlFor="message">Project Scope Details</label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          placeholder="Tell me about your project timelines, design concepts, or requirements..."
                          value={formState.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {errorMsg && <p style={{ color: "#f87171", fontSize: "0.85rem" }}>{errorMsg}</p>}

                      <button type="submit" className="btn-submit" disabled={loading}>
                        {loading ? "SENDING..." : submitted ? "MESSAGE SENT ✓" : "SEND MESSAGE"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 DCE Studio / David Christian. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

/* =========================================================
      STYLES
========================================================= */
const CSS = `
.dce-root{
  --hex-dark-bg:#030712;
  --neon-glow-primary:#00f2fe;
  --neon-glow-secondary:#4facfe;
  --text-pure:#ffffff;
  --text-slate:#94a3b8;
  --border-glass-specular:rgba(255,255,255,0.08);
  font-family:"Plus Jakarta Sans",system-ui,-apple-system,sans-serif;
  background-color:var(--hex-dark-bg);
  color:var(--text-pure);
  overflow-x:hidden;
  position:relative;
  background-image:
    radial-gradient(circle at top left, rgba(0,242,254,0.12), transparent 30%),
    radial-gradient(circle at 85% 20%, rgba(79,172,254,0.14), transparent 25%),
    linear-gradient(135deg,#030712 0%,#060b16 50%,#030712 100%);
}
.dce-root *{ margin:0; padding:0; box-sizing:border-box; font-family:inherit; }
.dce-root html, .dce-root{ scroll-behavior:smooth; }

/* Custom Cursor & Glow */
.interactive-glow{
  position:fixed; width:600px; height:600px;
  background:radial-gradient(circle, rgba(0,242,254,0.08) 0%, rgba(7,10,18,0) 70%);
  top:0; left:0; transform:translate(-50%,-50%);
  pointer-events:none; z-index:0; mix-blend-mode:screen;
}
.custom-cursor-dot{
  position:fixed; top:0; left:0; width:8px; height:8px; background:var(--neon-glow-primary);
  border-radius:50%; pointer-events:none; z-index:9999; box-shadow:0 0 10px var(--neon-glow-primary);
  display:none;
}
.custom-cursor-ring{
  position:fixed; top:0; left:0; width:36px; height:36px; border:1px solid rgba(0,242,254,0.4);
  border-radius:50%; pointer-events:none; z-index:9998; transition:width 0.2s, height 0.2s;
  display:none;
}
@media (min-width: 1024px) {
  .custom-cursor-dot, .custom-cursor-ring { display: block; }
}

.page-loader{
  position:fixed; inset:0; z-index:300; display:grid; place-items:center;
  background:linear-gradient(135deg,#020617 0%,#030712 100%);
  transition:opacity 1s ease, visibility 1s ease;
}
.page-loader.hidden{ opacity:0; visibility:hidden; pointer-events:none; }
.loader-ring{
  position:absolute; width:200px; height:200px; border-radius:50%;
  border:1px solid rgba(255,255,255,0.1);
  box-shadow:0 0 0 1px rgba(0,242,254,0.1), inset 0 0 30px rgba(0,242,254,0.1);
  animation:spinLoader 3s linear infinite;
}
.loader-content{ text-align:center; z-index:1; }
.loader-label{ font-size:0.75rem; letter-spacing:0.3em; color:#67e8f9; margin-bottom:0.6rem; font-family:"JetBrains Mono",monospace; }
.loader-brand{ font-size:2.5rem; font-weight:800; color:#fff; margin-bottom:1rem; }
.loader-brand span{ color:var(--neon-glow-primary); }
.loader-bar{ width:220px; height:4px; background:rgba(255,255,255,0.08); border-radius:999px; overflow:hidden; margin:0 auto; }
.loader-bar span{ display:block; width:40%; height:100%; background:linear-gradient(90deg,var(--neon-glow-primary),var(--neon-glow-secondary)); animation:loadBar 1.5s ease-in-out infinite; }
@keyframes spinLoader{ to{ transform:rotate(360deg); } }
@keyframes loadBar{ 0%{ transform:translateX(-100%); } 100%{ transform:translateX(300%); } }

.skip-link{
  position:absolute; left:1rem; top:-3rem; background:var(--neon-glow-primary); color:#020617;
  padding:0.7rem 1rem; border-radius:999px; text-decoration:none; font-weight:700; z-index:200;
}
.skip-link:focus{ top:1rem; }

.navbar{
  position:fixed; top:0; width:100%; z-index:100; backdrop-filter:blur(20px);
  background:rgba(3,7,18,0.85); border-bottom:1px solid var(--border-glass-specular);
}
.nav-container{ max-width:1200px; margin:0 auto; padding:1.2rem 2rem; display:flex; justify-content:space-between; align-items:center; }
.menu-toggle{ display:none; border:1px solid rgba(255,255,255,0.12); background:rgba(255,255,255,0.04); color:var(--text-pure); width:40px; height:40px; border-radius:50%; cursor:pointer; }
.logo{ font-size:1.5rem; font-weight:800; color:var(--text-pure); text-decoration:none; letter-spacing:1px; }
.logo .accent{ color:var(--neon-glow-primary); }
.nav-links{ display:flex; align-items:center; gap:1.2rem; }
.nav-links .nav-item{ color:var(--text-slate); text-decoration:none; font-size:0.82rem; font-weight:500; transition:color 0.3s ease, transform 0.3s ease; }
.nav-links .nav-item:hover{ color:var(--neon-glow-primary); transform:translateY(-2px); }
.nav-actions { display: flex; align-items: center; gap: 0.8rem; }
.cv-btn { padding: 0.5rem 1rem !important; font-size: 0.8rem !important; }
.nav-cta{
  border:1px solid var(--neon-glow-primary); background:rgba(0,242,254,0.05); color:var(--neon-glow-primary);
  font-weight:600; font-size:0.85rem; padding:0.6rem 1.2rem; border-radius:50px; text-decoration:none; transition:all 0.3s ease; flex-shrink:0;
}
.nav-cta:hover{ background:var(--neon-glow-primary); color:#000; box-shadow:0 0 20px rgba(0,242,254,0.4); }

.hero{ min-height:100vh; display:flex; align-items:center; padding:8rem 2rem 4rem 2rem; max-width:1200px; margin:0 auto; position:relative; z-index:1; }
.hero-grid{ display:grid; grid-template-columns:1.2fr 0.8fr; gap:4rem; align-items:center; width:100%; }

.status-pill{
  display:inline-flex; align-items:center; gap:0.6rem; background:rgba(0,242,254,0.05);
  border:1px solid rgba(0,242,254,0.2); color:var(--neon-glow-primary); padding:0.4rem 1rem; border-radius:50px;
  font-size:0.75rem; font-weight:700; letter-spacing:0.5px; margin-bottom:1.5rem; font-family:"JetBrains Mono",monospace;
  animation:pulseBorder 3s infinite ease-in-out;
}
@keyframes pulseBorder{ 0%,100%{ border-color:rgba(0,242,254,0.2); } 50%{ border-color:rgba(0,242,254,0.6); box-shadow:0 0 15px rgba(0,242,254,0.15); } }
.pulse-core{ width:6px; height:6px; background-color:var(--neon-glow-primary); border-radius:50%; animation:flash 2s infinite ease-in-out; }
@keyframes flash{ 0%,100%{ opacity:0.4; transform:scale(0.9); } 50%{ opacity:1; transform:scale(1.2); box-shadow:0 0 10px var(--neon-glow-primary); } }

.hero-title{ font-size:3.5rem; line-height:1.1; margin-bottom:1rem; letter-spacing:-1.5px; font-weight:800; }
.text-gradient{ background:linear-gradient(135deg,#ffffff 30%, var(--neon-glow-primary)); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
.hero-subtitle{ font-size:1.35rem; color:#e2e8f0; font-weight:600; margin-bottom:1.2rem; }
.hero-description{ color:var(--text-slate); line-height:1.7; font-size:1rem; margin-bottom:2.5rem; }
.hero-buttons{ display:flex; gap:1rem; margin-bottom:3rem; flex-wrap:wrap; }

.btn-glow{
  background:linear-gradient(135deg,var(--neon-glow-secondary),var(--neon-glow-primary)); color:#000; font-weight:700;
  font-size:0.9rem; padding:0.8rem 2.5rem; border-radius:50px; text-decoration:none;
  box-shadow:0 8px 25px rgba(0,242,254,0.25); transition:transform 0.3s cubic-bezier(0.175,0.885,0.32,1.275), box-shadow 0.3s ease;
  display:inline-block;
}
.btn-glow:hover{ transform:translateY(-4px) scale(1.02); box-shadow:0 15px 35px rgba(0,242,254,0.5); }
.btn-glass{
  border:1px solid var(--border-glass-specular); background:rgba(255,255,255,0.02); color:var(--text-pure);
  font-weight:600; font-size:0.9rem; padding:0.8rem 1.8rem; border-radius:50px; text-decoration:none; transition:all 0.3s ease;
  display:inline-block; cursor:pointer;
}
.btn-glass:hover{ background:rgba(255,255,255,0.08); border-color:rgba(0,242,254,0.4); transform:translateY(-2px); }
.btn-sm{ padding:0.5rem 1.2rem !important; font-size:0.85rem !important; }

.social-matrix{ display:flex; gap:1.2rem; }
.social-matrix a{ color:var(--text-slate); transition:color 0.3s ease, transform 0.3s cubic-bezier(0.175,0.885,0.32,1.275); display:inline-flex; }
.social-matrix a:hover{ color:var(--neon-glow-primary); transform:translateY(-4px) scale(1.1); }

.hero-visual{ display:flex; justify-content:center; position:relative; }
.three-canvas-mount{ position:absolute; inset:-60px; z-index:0; pointer-events:none; }
.floating-element{ animation:floatingEffect 6s ease-in-out infinite; }
@keyframes floatingEffect{ 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-10px); } }

.avatar-glass-frame{
  position:relative; z-index:1; border-radius:24px; border:1px solid var(--border-glass-specular);
  background:rgba(255,255,255,0.02); padding:1rem; box-shadow:0 25px 50px rgba(0,0,0,0.5); transform-style:preserve-3d;
}
.avatar-placeholder{
  width:280px; height:350px; border-radius:16px; display:grid; place-items:center;
  font-size:4.5rem; font-weight:800; letter-spacing:-2px; color:#04202a;
  background:linear-gradient(150deg, var(--neon-glow-secondary), var(--neon-glow-primary));
}
.ui-glass-badge{
  position:absolute; background:rgba(10,15,30,0.85); backdrop-filter:blur(12px); border:1px solid var(--border-glass-specular);
  padding:0.8rem 1.2rem; border-radius:16px; display:flex; align-items:center; gap:0.8rem; box-shadow:0 15px 30px rgba(0,0,0,0.5);
  transition:transform 0.3s ease; z-index:2;
}
.ui-glass-badge:hover{ transform:scale(1.05); }
.badge-top-right{ top:20px; right:-50px; }
.badge-bottom-left{ bottom:30px; left:-60px; }
.badge-accent{ font-size:1.3rem; }
.ui-glass-badge h4{ font-size:0.95rem; font-weight:700; color:#fff; }
.ui-glass-badge p{ font-size:0.75rem; color:var(--text-slate); }

.stats-container{
  display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); max-width:1200px; margin:0 auto 4rem auto;
  padding:2rem; border:1px solid var(--border-glass-specular); border-radius:20px; background:rgba(255,255,255,0.01);
  text-align:center; gap:2rem; backdrop-filter:blur(10px);
}
.stats-number{ font-size:2rem; font-weight:800; color:var(--neon-glow-primary); margin-bottom:0.2rem; font-family:"JetBrains Mono",monospace; display:inline-block; }
.stats-label{ display:block; font-size:0.85rem; color:var(--text-slate); }

.projects-container{ max-width:1200px; margin:0 auto 5rem auto; padding:0 2rem; }
.section-meta{ margin-bottom:2.5rem; }
.tracker-line{ display:block; width:35px; height:3px; background:var(--neon-glow-primary); margin-bottom:0.8rem; border-radius:10px; }
.section-tag{ color:var(--neon-glow-primary); font-size:0.75rem; font-weight:800; letter-spacing:2px; margin-bottom:0.4rem; font-family:"JetBrains Mono",monospace; }
.section-heading{ font-size:2.2rem; font-weight:800; letter-spacing:-0.5px; }
.section-copy{ margin-top:0.6rem; color:var(--text-slate); font-size:0.95rem; max-width:600px; line-height:1.6; }

/* Project Filters */
.project-filters{ display:flex; gap:0.8rem; margin-bottom:2rem; flex-wrap:wrap; }
.filter-btn{
  background:rgba(255,255,255,0.02); border:1px solid var(--border-glass-specular); color:var(--text-slate);
  padding:0.5rem 1.2rem; border-radius:50px; font-size:0.85rem; font-weight:600; cursor:pointer; transition:all 0.3s ease;
}
.filter-btn:hover, .filter-btn.active{
  background:rgba(0,242,254,0.1); border-color:var(--neon-glow-primary); color:var(--neon-glow-primary);
}

.interactive-grid{ display:grid; grid-template-columns:repeat(auto-fit,minmax(320px,1fr)); gap:1.5rem; }
.glass-card{
  background:rgba(255,255,255,0.02); border:1px solid var(--border-glass-specular); border-radius:20px; padding:2rem;
  transition:transform 0.4s cubic-bezier(0.175,0.885,0.32,1.275), border-color 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter:blur(10px); position:relative; overflow:hidden;
}
.glass-card:hover{ transform:translateY(-8px) scale(1.01); border-color:rgba(0,242,254,0.4); box-shadow:0 20px 40px rgba(0,242,254,0.1); }

.card-badge{ font-size:0.7rem; font-weight:700; text-transform:uppercase; color:var(--neon-glow-primary); background:rgba(0,242,254,0.06); padding:4px 10px; border-radius:6px; font-family:"JetBrains Mono",monospace; }
.card-title{ font-size:1.4rem; font-weight:800; margin:0.8rem 0 0.5rem 0; }
.card-description{ font-size:0.9rem; color:var(--text-slate); line-height:1.6; margin-bottom:1.2rem; }
.testimonial-name{ color:var(--neon-glow-primary); font-size:0.95rem; margin-top:1rem; }

/* Blog Card Additions */
.blog-card{ cursor:pointer; display:flex; flex-direction:column; justify-content:space-between; }
.blog-meta-row{ display:flex; gap:0.5rem; font-size:0.75rem; color:var(--text-slate); font-family:"JetBrains Mono",monospace; }
.blog-read-more{ font-size:0.85rem; font-weight:700; color:var(--neon-glow-primary); margin-top:1rem; display:inline-block; }

.tag-cloud{ display:flex; flex-wrap:wrap; gap:0.4rem; }
.tag-cloud span, .skill-tag{
  font-size:0.75rem; font-weight:600; background:rgba(255,255,255,0.04); padding:6px 12px; border-radius:8px;
  color:#cbd5e1; border:1px solid rgba(255,255,255,0.02); transition:all 0.3s ease; display:inline-block;
}
.tag-cloud span:hover, .skill-tag:hover{ background:rgba(0,242,254,0.1); border-color:var(--neon-glow-primary); color:var(--neon-glow-primary); transform:translateY(-2px); }
.skills-tags{ margin-top:1.5rem; gap:0.8rem; }
.card-action-bar{ display:flex; gap:0.8rem; margin-top:1.5rem; flex-wrap:wrap; }

.video-wrapper{ padding:0 !important; overflow:hidden; }
.video-container-inner{ width:100%; height:380px; background:linear-gradient(135deg,#020617,#0b132b); display:flex; align-items:center; justify-content:center; position:relative; cursor:pointer; }
.video-overlay-play{ text-align:center; transition:transform 0.3s ease; }
.video-container-inner:hover .video-overlay-play{ transform:scale(1.08); }
.play-button-pulse{
  width:75px; height:75px; background:linear-gradient(135deg,var(--neon-glow-secondary),var(--neon-glow-primary)); color:#000;
  border-radius:50%; display:grid; place-items:center; font-size:1.5rem; font-weight:800; margin:0 auto 1rem auto;
  box-shadow:0 0 25px rgba(0,242,254,0.4); animation:playGlow 2s infinite ease-in-out;
}
@keyframes playGlow{ 0%,100%{ box-shadow:0 0 15px rgba(0,242,254,0.3); } 50%{ box-shadow:0 0 35px rgba(0,242,254,0.7); } }
.video-overlay-play p{ font-size:0.9rem; font-weight:600; color:#fff; font-family:"JetBrains Mono",monospace; }

.scroll-reveal{ opacity:0; transform:translateY(40px); transition:opacity 0.8s cubic-bezier(0.165,0.84,0.44,1), transform 0.8s cubic-bezier(0.165,0.84,0.44,1); }
.scroll-reveal.active-state{ opacity:1; transform:translateY(0); }

.contact-container{ max-width:1200px; margin:0 auto; padding:0.4rem; position:relative; z-index:10; }
.contact-grid{ display:grid; grid-template-columns:1fr 1.1fr; gap:64px; align-items:center; }
.contact-info{ display:flex; flex-direction:column; }
.badge{ display:inline-flex; align-items:center; gap:8px; padding:6px 14px; border-radius:50px; background:rgba(15,23,42,0.6); border:1px solid rgba(20,184,166,0.2); font-size:12px; font-weight:600; color:#14b8a6; margin-bottom:24px; width:fit-content; }
.badge-dot{ width:8px; height:8px; background-color:#14b8a6; border-radius:50%; box-shadow:0 0 10px #14b8a6; }
.main-title{ font-size:46px; font-weight:800; color:#fff; line-height:1.2; margin-bottom:16px; }
.gradient-text{ background:linear-gradient(90deg,#14b8a6,#06b6d4); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
.subtitle{ font-size:16px; color:#94a3b8; line-height:1.6; margin-bottom:40px; }
.info-blocks{ display:flex; flex-direction:column; gap:24px; }
.info-card{ display:flex; align-items:center; gap:16px; background:rgba(15,23,42,0.4); padding:16px; border-radius:12px; border:1px solid rgba(255,255,255,0.02); transition:transform 0.3s, border-color 0.3s; }
.info-card:hover{ transform:translateY(-2px); border-color:rgba(20,184,166,0.3); }
.info-icon-box{ display:flex; align-items:center; justify-content:center; width:40px; height:40px; border-radius:8px; background:rgba(20,184,166,0.1); color:#14b8a6; flex-shrink:0; padding:10px; }
.info-card h4{ font-size:14px; color:#cbd5e1; margin-bottom:4px; font-weight:600; }
.info-card p{ font-size:14px; color:#14b8a6; font-weight:500; }
.social-wrapper{ margin-top:48px; }
.social-wrapper h3{ font-size:14px; color:#cbd5e1; margin-bottom:16px; font-weight:600; }
.social-links{ display:flex; flex-wrap:wrap; gap:12px; }
.social-links a{ display:inline-flex; padding:8px 16px; border-radius:8px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); color:#94a3b8; font-size:13px; font-weight:600; text-decoration:none; transition:all 0.3s; }
.social-links a:hover{ color:#14b8a6; border-color:rgba(20,184,166,0.3); transform:translateY(-2px); }

.contact-form-wrapper-3d{ perspective:1000px; width:100%; }
.contact-form-card{
  background:linear-gradient(135deg, rgba(15,23,42,0.75) 0%, rgba(9,15,29,0.9) 100%); backdrop-filter:blur(20px);
  border:1px solid rgba(20,184,166,0.2); padding:40px; border-radius:24px;
  box-shadow:0 25px 50px -12px rgba(0,0,0,0.5), 0 0 30px rgba(20,184,166,0.1);
  transform-style:preserve-3d; transition:box-shadow 0.3s;
}
.contact-form-card:hover{ box-shadow:0 30px 60px -12px rgba(0,0,0,0.6), 0 0 40px rgba(20,184,166,0.25); }
.contact-form{ display:flex; flex-direction:column; gap:24px; }
.form-row{ display:grid; grid-template-columns:1fr 1fr; gap:20px; }
.input-group{ display:flex; flex-direction:column; gap:8px; }
.input-group label{ font-size:13px; font-weight:600; color:#cbd5e1; }
.input-group input, .input-group textarea{
  background:#090f1d; border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:14px 16px; color:#fff;
  font-size:14px; font-family:inherit; transition:all 0.3s; width:100%; resize:vertical;
}
.input-group input:focus, .input-group textarea:focus{ outline:none; border-color:#14b8a6; box-shadow:0 0 15px rgba(20,184,166,0.15); }
.btn-submit{
  background:linear-gradient(90deg,#14b8a6,#06b6d4); color:#080d14; padding:16px; border:none; border-radius:12px;
  font-weight:700; font-size:14px; cursor:pointer; transition:box-shadow 0.3s, transform 0.2s; margin-top:8px; width:100%;
}
.btn-submit:hover{ box-shadow:0 0 25px rgba(6,182,212,0.4); transform:translateY(-2px); }

.site-footer{ border-top:1px solid rgba(255,255,255,0.08); padding:3rem 2rem; text-align:center; margin-top:6rem; color:var(--text-slate); }

@media (max-width:968px){
  .menu-toggle{ display:flex; align-items:center; justify-content:center; }
  .nav-links{
    display:none; position:absolute; top:100%; left:0; right:0; flex-direction:column; align-items:flex-start;
    background:rgba(3,7,18,0.97); padding:1.5rem 2rem; border-bottom:1px solid var(--border-glass-specular); gap:1rem;
  }
  .nav-links.open{ display:flex; }
  .hero-grid{ grid-template-columns:1fr; text-align:center; gap:2rem; }
  .hero-visual{ margin-top:1rem; width:100%; display:flex; justify-content:center; flex-direction:column; align-items:center; }
  .avatar-glass-frame{ width:100%; max-width:280px; margin:0 auto; padding:0.8rem; }
  .avatar-placeholder{ width:100%; height:240px; font-size:3.5rem; }
  .ui-glass-badge{ position:relative !important; inset:auto !important; top:auto !important; right:auto !important; bottom:auto !important; left:auto !important; margin:0.8rem auto 0 auto !important; width:100%; max-width:260px; justify-content:flex-start; box-shadow:0 10px 25px rgba(0,0,0,0.3); }
  .social-matrix{ justify-content:center; }
  .contact-grid{ grid-template-columns:1fr; gap:48px; }
  .main-title{ font-size:36px; }
}
@media (max-width:480px){
  .form-row{ grid-template-columns:1fr; }
  .contact-form-card{ padding:24px; }
}

@media (prefers-reduced-motion: reduce){
  .dce-root *{ animation-duration:0.001ms !important; animation-iteration-count:1 !important; transition-duration:0.001ms !important; }
}
`;



