import { useState } from 'react';
import { ExternalLink, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
import { projectsData } from '../data/project';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(p => filter === 'Featured' ? p.featured : true);

  return (
    <section id="projects" className="py-20 border-t border-slate-900 scroll-mt-24 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal yOffset={35} className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Real-world web applications and modern responsive interfaces built with clean architecture, modern frameworks, and user-centric designs.
          </p>
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal delay={0.1} yOffset={25} className="flex items-center justify-center gap-2 mb-10">
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setFilter('All')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none ${
                filter === 'All'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-indigo-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>All Projects</span>
              <span className="ml-1 text-[11px] font-mono px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-300">
                {projectsData.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setFilter('Featured')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none ${
                filter === 'Featured'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-indigo-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Featured Only</span>
              <span className="ml-1 text-[11px] font-mono px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-300">
                {projectsData.filter(p => p.featured).length}
              </span>
            </button>
          </div>
        </ScrollReveal>

        {/* Responsive Projects Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 */}
        <StaggerContainer
          key={filter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          staggerDelay={0.12}
          viewportAmount={0.1}
        >
          {filteredProjects.map((project) => {
            const techList = project.techStack || project.tags || [];
            const liveUrl = project.liveLink || project.liveUrl;
            const gitUrl = project.gitrepolink || project.githubUrl;

            return (
              <StaggerItem key={project.id} className="h-full">
                <article
                  className="h-full flex flex-col rounded-3xl bg-slate-900/70 border border-slate-800/90 overflow-hidden hover:border-slate-700 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 transition-all duration-300 group"
                >
                  {/* Image Preview & Window Mockup */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-950 border-b border-slate-800/80">
                    {/* Actual Project Screenshot */}
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${project.imageGradient || 'from-cyan-900/40 to-slate-900'}`} />
                    )}

                    {/* Subtle Gradient Overlays for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
                    
                    {/* Top Mockup Bar */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10 pointer-events-none">
                      {/* Browser Dots */}
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-rose-500/90" />
                        <span className="w-2 h-2 rounded-full bg-amber-500/90" />
                        <span className="w-2 h-2 rounded-full bg-emerald-500/90" />
                      </div>

                      {/* Badge */}
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider bg-slate-950/85 text-cyan-300 backdrop-blur-md border border-cyan-500/30 shadow-sm">
                        {project.badgeText || 'FEATURED'}
                      </span>
                    </div>

                    {/* Bottom Status Ribbon inside Image */}
                    <div className="absolute bottom-3 inset-x-3 flex items-center justify-between z-10 text-[11px] font-mono pointer-events-none">
                      <span className="flex items-center gap-1.5 text-slate-200 bg-slate-950/80 px-2.5 py-0.5 rounded-lg backdrop-blur-md border border-slate-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {project.status || 'Live Demo'}
                      </span>
                      {project.category && (
                        <span className="text-[11px] text-slate-300 font-semibold bg-slate-950/80 px-2.5 py-0.5 rounded-lg backdrop-blur-md border border-slate-800">
                          {project.category}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Body: Title, Description, Tech Stack Tags */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2.5 line-clamp-1">
                        {project.title}
                      </h3>
                      
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {techList.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:border-slate-600 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Touch-Friendly Action Buttons for Mobile & Clean Hover for Desktop */}
                      <div className="flex items-center gap-3 pt-4 border-t border-slate-800/70">
                        {/* Live Demo Link */}
                        <a
                          href={liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 active:scale-95 transition-all duration-200 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 text-center touch-manipulation cursor-pointer select-none"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                        </a>

                        {/* GitHub Code Link */}
                        <a
                          href={gitUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-800/90 hover:bg-slate-750 border border-slate-700/80 hover:border-slate-600 active:scale-95 transition-all duration-200 text-center touch-manipulation cursor-pointer select-none"
                        >
                          <GithubIcon className="w-3.5 h-3.5 shrink-0" />
                          <span>Code</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Section Footer Callout */}
        <ScrollReveal delay={0.15} yOffset={25}>
          <div className="mt-14 text-center">
            <p className="text-sm text-slate-400 mb-4">
              Looking for more repositories, experiments, or architecture setups?
            </p>
            <a
              href="https://github.com/codewithalif"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-colors shadow-sm text-sm"
            >
              <GithubIcon className="w-4 h-4 text-cyan-400" />
              <span>Explore All Repositories on GitHub</span>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
