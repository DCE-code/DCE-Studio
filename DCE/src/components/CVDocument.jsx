import React from 'react';

export default function CVDocument() {
    return (
        <div className="max-w-3xl mx-auto bg-white text-neutral-950 p-8 md:p-12 rounded-2xl shadow-xl font-sans print:shadow-none print:p-0">

            {/* CV Header */}
            <div className="border-b border-neutral-300 pb-6 mb-6">
                <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900">David Christian Ekene</h1>
                <p className="text-emerald-600 font-mono text-sm font-semibold tracking-wide uppercase mt-1">
                    Frontend Web Developer &amp; UI/UX Designer
                </p>

                <div className="flex flex-wrap gap-4 text-xs text-neutral-600 font-mono mt-3">
                    <span>📍 Ibadan, Oyo State, Nigeria</span>
                    <span>📞 07015781293</span>
                    <span>💻 DCE Studio</span>
                </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-6">
                <h2 className="text-sm font-bold font-mono text-neutral-900 uppercase tracking-widest border-b border-neutral-200 pb-1 mb-3">
                    Professional Summary
                </h2>
                <p className="text-sm text-neutral-700 leading-relaxed">
                    Frontend web developer and UI/UX designer specializing in React, Vite, Tailwind CSS, and modern dark-themed interactive user experiences. Combines technical background in electrical engineering and ergonomics principles with creative web engineering to build high-performance, accessible applications.
                </p>
            </div>

            {/* Technical Skills */}
            <div className="mb-6">
                <h2 className="text-sm font-bold font-mono text-neutral-900 uppercase tracking-widest border-b border-neutral-200 pb-1 mb-3">
                    Technical Expertise
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div>
                        <span className="font-semibold text-neutral-900">Frontend Stack:</span> React, JavaScript (ES6+), HTML5, CSS3, Vite
                    </div>
                    <div>
                        <span className="font-semibold text-neutral-900">Styling &amp; Motion:</span> Tailwind CSS, Framer Motion, Glassmorphism
                    </div>
                    <div>
                        <span className="font-semibold text-neutral-900">Tools &amp; Version Control:</span> Git, GitHub, VS Code, Spck Editor, Canva
                    </div>
                    <div>
                        <span className="font-semibold text-neutral-900">Workflows:</span> Make.com Automation, UI/UX Prototyping, Ergonomic Audit
                    </div>
                </div>
            </div>

            {/* Projects & Experience */}
            <div className="mb-6">
                <h2 className="text-sm font-bold font-mono text-neutral-900 uppercase tracking-widest border-b border-neutral-200 pb-1 mb-3">
                    Selected Projects &amp; Brand Work
                </h2>

                <div className="space-y-4 text-sm">
                    <div>
                        <div className="flex justify-between items-baseline font-semibold">
                            <span className="text-neutral-900">DCE Studio Portfolio &amp; VIVID Agency</span>
                            <span className="text-xs font-mono text-emerald-600">2026</span>
                        </div>
                        <p className="text-neutral-600 text-xs mt-1 leading-relaxed">
                            Designed and developed responsive web portfolios featuring glassmorphic dark themes, custom component architectures, and deployment via GitHub Pages.
                        </p>
                    </div>

                    <div>
                        <div className="flex justify-between items-baseline font-semibold">
                            <span className="text-neutral-900">Interactive Web Applications (Lumière, SkyPort, Royal Banquet)</span>
                            <span className="text-xs font-mono text-emerald-600">2026</span>
                        </div>
                        <p className="text-neutral-600 text-xs mt-1 leading-relaxed">
                            Engineered multi-page interactive web applications utilizing modern JavaScript and CSS modules, optimized for mobile and desktop screens.
                        </p>
                    </div>
                </div>
            </div>

            {/* Education & Certifications */}
            <div>
                <h2 className="text-sm font-bold font-mono text-neutral-900 uppercase tracking-widest border-b border-neutral-200 pb-1 mb-3">
                    Education &amp; Certifications
                </h2>
                <div className="space-y-3 text-sm">
                    <div>
                        <div className="flex justify-between items-baseline font-semibold">
                            <span className="text-neutral-900">Dejoft Coding School</span>
                            <span className="text-xs font-mono text-neutral-500">2026</span>
                        </div>
                        <p className="text-neutral-600 text-xs">Diploma Program in Web Development</p>
                    </div>

                    <div>
                        <div className="flex justify-between items-baseline font-semibold">
                            <span className="text-neutral-900">Federal School of Occupational Therapy (Oshodi, Lagos)</span>
                            <span className="text-xs font-mono text-neutral-500">Current Student</span>
                        </div>
                        <p className="text-neutral-600 text-xs">300-Level Undergraduate Student in Occupational Therapy</p>
                    </div>

                    <div>
                        <div className="flex justify-between items-baseline font-semibold">
                            <span className="text-neutral-900">Technical College, Ibadan</span>
                            <span className="text-xs font-mono text-neutral-500">Prior Study</span>
                        </div>
                        <p className="text-neutral-600 text-xs">Electrical Engineering Foundation</p>
                    </div>

                    <div>
                        <div className="flex justify-between items-baseline font-semibold">
                            <span className="text-neutral-900">Alison Certification</span>
                            <span className="text-xs font-mono text-neutral-500">2026</span>
                        </div>
                        <p className="text-neutral-600 text-xs">CPD Certification in Introduction to Ergonomics Workplace Analysis</p>
                    </div>
                </div>
            </div>

        </div>
    );
}
