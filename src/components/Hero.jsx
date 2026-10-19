import { ArrowRight, Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import resumePdf from '../assets/My Resume.pdf';
import { ScrollReveal } from './ScrollReveal';
import DeveloperIllustration from './DeveloperIllustration';

export default function Hero() {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const section = document.getElementById('projects');
    if (section) {
      const navHeight = 75;
      const targetY = section.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-12 lg:py-20 overflow-hidden scroll-mt-24"
    >
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-1/4 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-80 sm:w-[480px] h-80 sm:h-[480px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-20 left-1/3 w-64 sm:w-96 h-64 sm:h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Stacked on Mobile, Side-by-Side on Desktop */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Column: Headline, Bio, CTAs, Socials */}
          <ScrollReveal 
            className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-none"
            delay={0.1}
            yOffset={30}
          >
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-300 mb-6 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-medium text-slate-200">Open to Opportunities</span>
              <span className="text-slate-600">|</span>
              <span className="text-cyan-400 font-mono text-xs">CST Student</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Alif
              </span>{' '}
              <span className="inline-block animate-bounce origin-bottom-right">👋</span>
            </h1>

            {/* Sub-headline */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-200 mb-6 leading-relaxed">
              Passionate Frontend Developer &amp; CST Student{' '}
              <span className="text-slate-500 block sm:inline">|</span>{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent font-bold">
                React, Next.js &amp; UI Designer
              </span>
            </h2>

            {/* Brief Bio emphasizing high-performance apps & beautiful UI design */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              I specialize in building fast, beautiful, and accessible web applications. I love creating clean code and simple, intuitive user experiences.
            </p>

            {/* Call to Action Buttons: flex-col on small screens, flex-row on larger screens */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={resumePdf}
                download="Md_Alif_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-700/80 hover:border-slate-600 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links with Modern Hover Effects */}
            <div className="pt-6 border-t border-slate-800/70">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Find me on
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/codewithalif"
                    target="_blank"
                    rel="noreferrer"
                    className="group relative p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-850 hover:text-cyan-400 text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/15"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
                    <span className="sr-only">GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/alif-hosen-51b658441/"
                    target="_blank"
                    rel="noreferrer"
                    className="group relative p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-850 hover:text-indigo-400 text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/15"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
                    <span className="sr-only">LinkedIn</span>
                  </a>

                  <a
                    href="mailto:programmingwithalif@gmail.com"
                    className="group relative p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-850 hover:text-purple-400 text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/15"
                    aria-label="Email Alif"
                  >
                    <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
                    <span className="sr-only">Email</span>
                  </a>
                </div>
              </div>
            </div>

          </ScrollReveal>

          {/* Right Column: Flat Isometric Developer Illustration Animation */}
          <ScrollReveal 
            className="flex-1 w-full max-w-xl relative flex items-center justify-center"
            delay={0.25}
            yOffset={40}
          >
            <DeveloperIllustration />
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
