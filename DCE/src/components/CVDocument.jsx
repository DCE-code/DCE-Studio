export default function CVDocument() {
    return (
        <div className="max-w-3xl mx-auto bg-white text-neutral-950 p-8 md:p-12 rounded-2xl shadow-xl font-sans print:shadow-none print:p-0">
            {/* CV Header */}
            <div className="border-b border-neutral-300 pb-6 mb-6">
                <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900">
                    David Christian Ekene
                </h1>
                <p className="text-emerald-600 font-mono text-sm font-semibold tracking-wide uppercase mt-1">
                    Frontend Engineer &amp; UI/UX Designer
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
                    Professional Profile
                </h2>
                <p className="text-sm text-neutral-700 leading-relaxed">
                    Frontend engineer and UI/UX designer who turns complex ideas into
                    fast, responsive, and memorable digital products. Strong in React,
                    JavaScript, Vite, Tailwind CSS, and Framer Motion, with a sharp eye
                    for interaction design, accessibility, performance, and visual detail.
                    Builds polished interfaces from concept through implementation and
                    delivery.
                </p>
            </div>

            {/* Technical Skills */}
            <div className="mb-6">
                <h2 className="text-sm font-bold font-mono text-neutral-900 uppercase tracking-widest border-b border-neutral-200 pb-1 mb-3">
                    Technical Expertise
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div>
                        <span className="font-semibold text-neutral-900">
                            Frontend Engineering:
                        </span>{" "}
                        React, JavaScript (ES6+), Python, HTML5, CSS3, Vite, Responsive Design
                    </div>
                    <div>
                        <span className="font-semibold text-neutral-900">
                            Interface Design:
                        </span>{" "}
                        Tailwind CSS, Framer Motion, Interaction Design, Prototyping
                    </div>
                    <div>
                        <span className="font-semibold text-neutral-900">
                            Quality &amp; Delivery:
                        </span>{" "}
                        Accessibility, Performance Optimization, Git, GitHub, Deployment
                    </div>
                    <div>
                        <span className="font-semibold text-neutral-900">
                            Additional Strengths:
                        </span>{" "}
                        Make.com Automation, Design Systems, Visual Storytelling, Ergonomic
                        Analysis
                    </div>
                </div>
            </div>

            {/* Projects & Experience */}
            <div className="mb-6">
                <h2 className="text-sm font-bold font-mono text-neutral-900 uppercase tracking-widest border-b border-neutral-200 pb-1 mb-3">
                    Experience &amp; Selected Work
                </h2>

                <div className="space-y-4 text-sm">
                    <div>
                        <div className="flex justify-between items-baseline font-semibold">
                            <span className="text-neutral-900">
                                DCE Studio Portfolio &amp; VIVID Agency
                            </span>
                            <span className="text-xs font-mono text-emerald-600">2026</span>
                        </div>
                        <p className="text-neutral-600 text-xs mt-1 leading-relaxed">
                            Led the design and frontend development of responsive portfolio
                            experiences, combining custom React component architecture,
                            immersive visual direction, motion, and production deployment via
                            GitHub Pages.
                        </p>
                    </div>

                    <div>
                        <div className="flex justify-between items-baseline font-semibold">
                            <span className="text-neutral-900">
                                Interactive Web Applications (Lumière, SkyPort, Royal Banquet)
                            </span>
                            <span className="text-xs font-mono text-emerald-600">2026</span>
                        </div>
                        <p className="text-neutral-600 text-xs mt-1 leading-relaxed">
                            Designed and engineered a collection of interactive web
                            applications with clear user journeys, reusable UI patterns,
                            responsive layouts, and carefully tuned mobile and desktop
                            experiences.
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
                        <p className="text-neutral-600 text-xs">
                            Diploma Program in Web Development
                        </p>
                    </div>

                    <div>
                        <div className="flex justify-between items-baseline font-semibold">
                            <span className="text-neutral-900">
                                Technical College, Ibadan
                            </span>
                            <span className="text-xs font-mono text-neutral-500">
                                Prior Study
                            </span>
                        </div>
                        <p className="text-neutral-600 text-xs">
                            Electrical Engineering Foundation
                        </p>
                    </div>

                    <div>
                        <div className="flex justify-between items-baseline font-semibold">
                            <span className="text-neutral-900">Alison Certification</span>
                            <span className="text-xs font-mono text-neutral-500">2024</span>
                        </div>
                        <p className="text-neutral-600 text-xs">
                            CPD Certification in Introduction to Ergonomics Workplace Analysis
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
