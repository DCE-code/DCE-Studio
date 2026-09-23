export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 px-6 md:px-12 py-12 bg-neutral-950">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <strong className="text-white tracking-widest">DCE STUDIO</strong>
          <p className="text-neutral-400 text-sm mt-2">
            David Christian Ekene / Junior Frontend Developer
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-400">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a
            href="https://github.com/DCE-code"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/christian-david-479650311"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-5 border-t border-neutral-800 text-xs text-neutral-500">
        &copy; 2026 DCE Studio. All rights reserved.
      </div>
    </footer>
  );
}
