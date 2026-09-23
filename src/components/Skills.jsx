import { motion } from "framer-motion";

const groups = [
  {
    title: "Frontend",
    description: "The tools I use to build responsive interfaces.",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Vite"],
  },
  {
    title: "Programming",
    description: "A practical foundation for web application work.",
    skills: ["Python"],
  },
  {
    title: "Tools",
    description: "The workflow around building, testing, and shipping.",
    skills: ["Git", "GitHub", "VS Code", "Vercel"],
  },
  {
    title: "Design",
    description: "Visual tools that support clearer product thinking.",
    skills: ["Figma", "Canva"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-12 relative bg-neutral-950"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-emerald-400 font-mono text-sm uppercase tracking-widest">
            {"// Toolkit"}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3">
            Tools for thoughtful <span>frontend work.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {groups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="p-7 rounded-2xl bg-neutral-900/60 border border-neutral-800"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {group.title}
              </h3>
              <p className="text-neutral-400 text-sm mb-6">
                {group.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 rounded-lg border border-neutral-700 text-sm text-neutral-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
