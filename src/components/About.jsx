import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-neutral-950/70">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_.8fr] gap-12">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-emerald-400 font-mono text-sm uppercase tracking-widest">
            {"// About me"}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-8">
            Building with curiosity, <span>care, and code.</span>
          </h2>
          <div className="space-y-5 text-neutral-300 leading-relaxed">
            <p>
              I&apos;m David Christian Ekene, a junior frontend developer
              focused on building responsive and interactive web experiences. I
              work primarily with HTML, CSS, JavaScript, React and Vite, while
              using Git and GitHub throughout my development workflow.
            </p>
            <p>
              I&apos;ve built projects across e-commerce, real estate,
              opportunity discovery and interactive web experiences. I&apos;m
              currently looking for opportunities to grow within a professional
              development team and contribute to real-world products.
            </p>
          </div>
        </motion.div>
        <motion.aside
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-7 border border-neutral-800 bg-neutral-900/60 rounded-2xl"
        >
          <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest">
            Education
          </span>
          <h3 className="text-2xl font-bold text-white mt-7">
            Diploma in Frontend Development
          </h3>
          <p className="text-neutral-300 mt-3">DEEJOFT Coding School</p>
          <div className="flex justify-between mt-8 pt-5 border-t border-neutral-800 text-sm text-neutral-400">
            <span>2026</span>
            <span>Credit</span>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
