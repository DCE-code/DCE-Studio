import { motion } from "framer-motion";

const services = [
  [
    "01",
    "Business Websites",
    "Responsive websites for businesses and organizations.",
  ],
  [
    "02",
    "Landing Pages",
    "Focused landing pages designed around clear user actions.",
  ],
  [
    "03",
    "Frontend Development",
    "Interactive web interfaces using modern frontend technologies.",
  ],
  [
    "04",
    "Portfolio Websites",
    "Professional portfolio websites for individuals and creators.",
  ],
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-emerald-400 font-mono text-sm uppercase tracking-widest">
            {"// DCE Studio"}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3">
            Services for useful <span>websites.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map(([number, title, description]) => (
            <motion.article
              key={number}
              whileInView={{ opacity: [0, 1], y: [16, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-7 rounded-2xl bg-neutral-900/60 border border-neutral-800"
            >
              <span className="text-emerald-400 font-mono text-xs">
                {number}
              </span>
              <h3 className="text-2xl font-bold text-white mt-8 mb-3">
                {title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
