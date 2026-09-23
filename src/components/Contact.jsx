import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-neutral-950">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_.8fr] gap-12 items-end">
        <Reveal>
          <span className="text-emerald-400 font-mono text-sm uppercase tracking-widest">
            {"// Contact"}
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mt-4 mb-6">
            Let&apos;s Build <span>Something Great.</span>
          </h2>
          <p className="text-neutral-400 max-w-xl leading-relaxed">
            Open to junior frontend opportunities, collaborations and selected
            freelance projects.
          </p>
        </Reveal>
        <Reveal delay={120} className="grid gap-3">
          <a
            className="p-5 border border-neutral-800 rounded-xl text-neutral-200 hover:border-emerald-400 transition-colors"
            href="mailto:davchristian293@gmail.com"
          >
            <small className="block text-neutral-500 font-mono uppercase mb-2">
              Email
            </small>
            davchristian293@gmail.com
          </a>
          <a
            className="p-5 border border-neutral-800 rounded-xl text-neutral-200 hover:border-emerald-400 transition-colors"
            href="https://www.linkedin.com/in/christian-david-479650311"
            target="_blank"
            rel="noreferrer"
          >
            <small className="block text-neutral-500 font-mono uppercase mb-2">
              LinkedIn
            </small>
            christian-david-479650311
          </a>
          <a
            className="p-5 border border-neutral-800 rounded-xl text-neutral-200 hover:border-emerald-400 transition-colors"
            href="https://github.com/DCE-code"
            target="_blank"
            rel="noreferrer"
          >
            <small className="block text-neutral-500 font-mono uppercase mb-2">
              GitHub
            </small>
            DCE-code
          </a>
          <a
            className="text-emerald-400 text-sm mt-2"
            href="https://wa.me/2347015781293?text=Hello%20DCE%20Studio"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp for DCE Studio clients &rarr;
          </a>
        </Reveal>
      </div>
    </section>
  );
}
