import { ArrowUp, Sparkles, Heart, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { ScrollReveal } from './ScrollReveal';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 75;
      const targetY = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950/95 py-12 lg:py-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 sm:w-[600px] h-32 bg-indigo-600/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal yOffset={30}>
          {/* Main Footer Container: Aligned center on mobile, Spread out on desktop */}
          <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:justify-between lg:text-left gap-8 pb-10 border-b border-slate-850">
            
            {/* Brand Logo & Subtitle */}
            <div className="flex flex-col items-center lg:items-start gap-2">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, '#home')}
                className="flex items-center gap-2.5 text-xl font-bold tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1 group cursor-pointer"
              >
                <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 p-0.5 shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
                  <div className="h-full w-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                </div>
                <span className="text-xl font-extrabold tracking-tight">
                  <span className="text-white">Alif</span>
                  <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent font-black ml-1">
                    .dev
                  </span>
                </span>
              </a>
              <p className="text-xs text-slate-400 max-w-xs">
                Computer Science &amp; Technology (CST) student at Pabna Polytechnic Institute. Full-Stack Developer &amp; UI Designer.
              </p>
            </div>

            {/* Quick Nav Links */}
            <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-cyan-400 transition-colors font-medium py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Social Links (Aligned center on mobile, grouped on desktop) */}
            <div className="flex items-center justify-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 transition-all duration-200 active:scale-95 touch-manipulation shadow-sm group"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/50 text-slate-400 hover:text-indigo-400 transition-all duration-200 active:scale-95 touch-manipulation shadow-sm group"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>

              <a
                href="mailto:alif@developer.example"
                className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-purple-500/50 text-slate-400 hover:text-purple-400 transition-all duration-200 active:scale-95 touch-manipulation shadow-sm group"
                aria-label="Email Alif"
              >
                <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
            </div>

          </div>

          {/* Bottom Sub-Footer: Back to Top & Copyright (Aligned center on mobile, spread out on desktop) */}
          <div className="pt-8 flex flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-between gap-4">
            
            {/* Copyright Note */}
            <div className="flex items-center gap-1.5 text-xs text-slate-400 text-center order-2 lg:order-1">
              <span>© {new Date().getFullYear()} Md. Alif. Built with</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline shrink-0" />
              <span>using React 19 &amp; Tailwind CSS.</span>
            </div>

            {/* Touch-Friendly Back to Top Button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="order-1 lg:order-2 inline-flex items-center gap-2 min-h-[44px] py-2.5 px-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 text-xs font-semibold shadow-sm transition-all duration-200 active:scale-95 touch-manipulation cursor-pointer group"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
            </button>

          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
