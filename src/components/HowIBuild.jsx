import { motion } from "framer-motion";

const steps = [
  ["01", "Understand", "Understand the users, requirements and goals."],
  [
    "02",
    "Design",
    "Plan structure, content hierarchy and responsive behavior.",
  ],
  ["03", "Build", "Develop reusable, responsive frontend components."],
  ["04", "Test & Deploy", "Test across devices, fix issues and deploy."],
];

export default function HowIBuild() {
  return (
    <section id="process" className="py-24 px-6 md:px-12 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-emerald-400 font-mono text-sm uppercase tracking-widest">
            {"// Process"}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3">
            A clear path from idea <span>to interface.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map(([number, title, description], index) => (
            <motion.article
              key={number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50"
            >
              <span className="text-3xl font-bold text-emerald-400">
                {number}
              </span>
              <h3 className="text-xl font-bold text-white mt-10 mb-3">
                {title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
