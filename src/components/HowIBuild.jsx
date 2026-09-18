import React from 'react';
import { motion } from 'framer-motion';

export default function HowIBuild() {
    const steps = [
        {
            number: '01',
            title: 'UX Ergonomic Wireframing',
            description: 'Analyzing user flows, structure, and readability principles to minimize cognitive load before writing a single line of code.',
            icon: '📐',
        },
        {
            number: '02',
            title: 'Component Architecture',
            description: 'Structuring modular React components, managing state cleanly, and configuring modern build tooling with Vite.',
            icon: '⚛️',
        },
        {
            number: '03',
            title: 'Dark Aesthetics & Styling',
            description: 'Crafting responsive layouts and glassmorphism elements utilizing Tailwind CSS and smooth Framer Motion animations.',
            icon: '🎨',
        },
        {
            number: '04',
            title: 'Performance & Deployment',
            description: 'Testing responsiveness across devices, ensuring accessibility standards, and deploying seamlessly via GitHub Pages.',
            icon: '🚀',
        },
    ];

    return (
        <section id="process" className="py-24 px-6 md:px-12 relative overflow-hidden bg-neutral-950">
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-emerald-500/5 to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Section Header */}
                <div className="mb-16 text-center md:text-left">
                    <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase block mb-3">
            // Development Process
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                        How I <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Build</span>
                    </h2>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800 backdrop-blur-xl hover:border-emerald-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-2xl p-2.5 rounded-2xl bg-neutral-950 border border-neutral-800 text-emerald-400 group-hover:scale-110 transition-transform">
                                        {step.icon}
                                    </span>
                                    <span className="text-xs font-mono text-neutral-500 border border-neutral-800 px-2.5 py-1 rounded-full">
                                        {step.number}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                                    {step.title}
                                </h3>

                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
