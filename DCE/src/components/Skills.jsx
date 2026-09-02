import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Core Frontend",
      description:
        "Building robust interfaces and the Python-powered foundations that make them useful.",
      skills: [
        { name: "React", level: "90%", icon: "⚛️" },
        { name: "JavaScript (ES6+)", level: "85%", icon: "💛" },
        { name: "HTML5 & CSS3", level: "95%", icon: "🌐" },
        { name: "Vite", level: "85%", icon: "⚡" },
        { name: "Python for Web Apps", level: "80%", icon: "🐍" },
      ],
    },
    {
      title: "Styling & UI",
      description:
        "Crafting modern dark-themed aesthetics with glassmorphism and motion.",
      skills: [
        { name: "Tailwind CSS", level: "90%", icon: "🎨" },
        { name: "Framer Motion", level: "80%", icon: "✨" },
        { name: "Responsive Design", level: "95%", icon: "📱" },
        { name: "UI/UX Principles", level: "85%", icon: "🎯" },
      ],
    },
    {
      title: "Tools & Workflow",
      description:
        "Maintaining clean version control and efficient development environments.",
      skills: [
        { name: "Git & GitHub", level: "85%", icon: "🐙" },
        { name: "VS Code", level: "90%", icon: "💻" },
        { name: "Spck Editor", level: "80%", icon: "📱" },
        { name: "Canva", level: "85%", icon: "🖌️" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-12 relative overflow-hidden bg-neutral-950"
    >
      <div className="absolute inset-0 bg-linear-to-t from-transparent via-cyan-500/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase block mb-3">
            // Expertise & Toolset
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-emerald-400">
              Capabilities
            </span>
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
              className="p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800 backdrop-blur-xl flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 shadow-xl"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-neutral-200 font-medium flex items-center gap-2">
                          <span>{skill.icon}</span>
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-cyan-400">
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-neutral-950 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.level }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full bg-linear-to-r from-cyan-500 to-emerald-400 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
