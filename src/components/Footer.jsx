import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800/80 pt-16 pb-12 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-t from-emerald-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-emerald-400/40 shadow-lg shadow-emerald-500/20">
                <img
                  src="/Brand%20logo.png"
                  alt="DCE Studio logo"
                  className="h-full w-full object-cover"
                  width="40"
                  height="40"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-white tracking-wider text-sm">
                  DCE STUDIO
                </span>
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                  Frontend Dev &amp; UI/UX
                </span>
              </div>
            </div>

            <p className="text-neutral-400 text-sm max-w-sm leading-relaxed">
              Crafting lightweight, responsive web applications and modern
              dark-themed user interfaces with precision and motion.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Opportunities &amp; Projects
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-mono">
              // Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-neutral-400 hover:text-emerald-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-neutral-400 hover:text-emerald-400 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-neutral-400 hover:text-emerald-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-neutral-400 hover:text-emerald-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-neutral-400 hover:text-emerald-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Socials / Connect */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-mono">
              // Connect
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://github.com/DCE-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-emerald-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/christian-david-479650311"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-emerald-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://reddit.com/u/Careful_Fox5/s/Fs7xSdAT5c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-emerald-400 transition-colors"
                >
                  Reddit
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@_lush2?_r=1&_d=ee15k5dia55hmj&sec_uid=MS4wLjABAAAAtx6gkz5CqIa6Kl-W4Ni6PSOAWqvISFu6rE7xYKeQRrFM59GPWOZhOqyEdsZIAYrg&share_author_id=7364511075779429382&sharer_language=en&source=h5_m&u_code=ee15kge42i173l&timestamp=1788504178&user_id=7364511075779429382&sec_user_id=MS4wLjABAAAAtx6gkz5CqIa6Kl-W4Ni6PSOAWqvISFu6rE7xYKeQRrFM59GPWOZhOqyEdsZIAYrg&item_author_type=1&utm_source=whatsapp_business&utm_campaign=client_share&utm_medium=android&share_iid=7680154454297118485&share_link_id=aecd5026-c6f6-4676-b48b-2978b59f1586&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb4907&social_share_type=5&share_enter_from=settings_page&item_author_type=1&enable_checksum=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-emerald-400 transition-colors"
                >
                  Tictok
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {currentYear} DCE Studio. All rights reserved.</p>
          <p className="font-mono text-neutral-400">
            Designed &amp; Engineered with React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
