import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "../data/projects";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Web Apps", "UI/UX", "E-Commerce"];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "All") return true;
    return project.category === filter;
  });

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase block mb-3">
              // Selected Work
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">
                Projects
              </span>
            </h2>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 bg-neutral-900/80 p-1.5 rounded-xl border border-neutral-800 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-emerald-500 text-neutral-950 font-semibold shadow-lg shadow-emerald-500/20"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-800/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                key={project.id || project.title}
                className={`group relative rounded-2xl bg-neutral-900/60 border border-neutral-800/80 overflow-hidden backdrop-blur-xl flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 ${
                  project.featured ? "lg:col-span-2" : ""
                }`}
              >
                {/* Project Image & Overlay */}
                <div className="relative h-64 md:h-72 w-full overflow-hidden bg-neutral-950">
                  <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-transparent to-transparent z-10 opacity-80" />
                  <img
                    src={project.image}
                    alt={project.title}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {project.featured && (
                    <span className="absolute top-4 left-4 z-20 bg-emerald-500 text-neutral-950 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                      Featured
                    </span>
                  )}

                  <span className="absolute top-4 right-4 z-20 bg-neutral-900/80 backdrop-blur-md text-neutral-300 text-xs font-mono px-3 py-1 rounded-full border border-neutral-700/50">
                    {project.category}
                  </span>
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-8 flex flex-col grow justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack?.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs font-mono px-2.5 py-1 rounded-md bg-neutral-800/60 text-neutral-300 border border-neutral-700/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4 pt-4 border-t border-neutral-800/80">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View live demo of ${project.title}`}
                          className="flex-1 text-center py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold text-sm transition-all duration-300 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                        >
                          <span>Live Demo</span>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View source code for ${project.title} on GitHub`}
                          className="py-2.5 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-sm transition-all duration-300 border border-neutral-700 flex items-center justify-center gap-2"
                        >
                          <span>Code</span>
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            />
                          </svg>
                        </a>
                      )}

                      <button
                        onClick={() => setSelectedProject(project)}
                        aria-label={`More details about ${project.title}`}
                        className="p-2.5 rounded-xl bg-neutral-800/50 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors border border-neutral-700/50"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal Component */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
