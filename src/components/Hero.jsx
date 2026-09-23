/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const background = backgroundRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (
      !background ||
      reduceMotion.matches ||
      window.matchMedia("(pointer: coarse)").matches
    )
      return undefined;

    let frame = 0;
    const handlePointerMove = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 8;
        const y = (event.clientY / window.innerHeight - 0.5) * 5;
        background.style.setProperty("--parallax-x", `${x}px`);
        background.style.setProperty("--parallax-y", `${y}px`);
      });
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div ref={backgroundRef} className="hero-background" aria-hidden="true">
        <div className="hero-particles" />
      </div>
      <div className="hero-copy">
        <div className="hero-reveal hero-reveal--eyebrow eyebrow">
          <span className="status-dot" /> DCE Studio / Personal developer brand
        </div>
        <h1
          id="hero-title"
          className="hero-reveal hero-reveal--title hero-title"
        >
          Engineering Digital Experiences That <span>Feel Exceptional.</span>
        </h1>
        <p className="hero-reveal hero-reveal--description hero-subtitle">
          Frontend developer focused on clean interfaces, responsive
          experiences, and modern web applications using JavaScript, React and
          modern frontend tools.
        </p>
        <div className="hero-reveal hero-reveal--actions hero-actions">
          <a href="#projects" className="button button-primary">
            Explore Projects <span aria-hidden="true">&rarr;</span>
          </a>
          <a href="#contact" className="button button-secondary">
            Let&apos;s Work Together
          </a>
        </div>
        <div className="scroll-cue" aria-hidden="true">
          <span>Scroll</span>
          <div className="scroll-cue__line">
            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="scroll-cue__dot"
            />
          </div>
        </div>
      </div>
      <motion.figure
        className="hero-portrait"
        initial={{ opacity: 0, x: 36 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src="/file_00000000034c71f4a5b920ea5cf24f48.png"
          alt="David Christian Ekene"
          width="1080"
          height="1440"
          fetchPriority="high"
          decoding="async"
          className="hero-portrait__image"
        />
        <div
          className="hero-portrait__wash absolute inset-0"
          aria-hidden="true"
        />
        <figcaption>
          <span>Available for junior frontend opportunities</span>
          <span>01 / 01</span>
        </figcaption>
      </motion.figure>
    </section>
  );
}
