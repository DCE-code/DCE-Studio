import React from 'react';
import { motion } from 'framer-motion';

export default function Services() {
    const services = [
        {
            id: '01',
            title: 'Frontend Web Development',
            description:
                'Custom, lightweight, and responsive web applications engineered with React, Vite, and Tailwind CSS. Focused on clean architecture and seamless cross-device performance.',
            tags: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vite'],
            icon: '💻',
        },
        {
            id: '02',
            title: 'UI/UX Design & Prototyping',
            description:
                'Designing visually engaging user interfaces with dark aesthetics, glassmorphism, and responsive layouts that elevate brand identity and user retention.',
            tags: ['Figma', 'User-Centric UI', 'Glassmorphism', 'Responsive'],
            icon: '🎨',
        },
        {
            id: '03',
            title: 'Workflow & Web Automation',
            description:
                'Connecting digital tools, automated scenario pipelines (e.g., Make.com), and document parsing tools to streamline workflows and boost productivity.',
            tags: ['Make.com', 'APIs', 'Data Extraction', 'Automation'],
            icon: '⚙️',
        },
        {
            id: '04',
            title: 'Ergonomic & Performance Audit',
            description:
                'Evaluating web interfaces through ergonomic principles and UX standards to reduce cognitive load and enhance accessibility across viewing environments.',
            tags: ['UX Ergonomics', 'Accessibility', 'Performance', 'Audit'],
            icon: '📐',
        },
    ];

    return (
        <section id="services" className="py-24 px-6 md:px-12 relative overflow-hidden bg-neutral-950">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Section Header */}
                <div className="mb-16 text-center md:text-left">
                    <span className="text-purple-400 font-mono text-sm tracking-widest uppercase block mb-3">
            // What I Offer
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                        Services &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">Solutions</span>
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800 backdrop-blur-xl hover:border-purple-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-3xl p-3 rounded-2xl bg-neutral-950 border border-neutral-800 text-purple-400 group-hover:scale-110 transition-transform">
                                        {service.icon}
                                    </span>
                                    <span className="text-xs font-mono text-neutral-500 border border-neutral-800 px-3 py-1 rounded-full">
                                        {service.id}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/80">
                                {service.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-mono text-neutral-300 bg-neutral-950/80 border border-neutral-800 px-3 py-1 rounded-lg"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
