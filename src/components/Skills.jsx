import { useState } from 'react';
import { Sparkles, Code2, Wrench, Layers } from 'lucide-react';
import { 
  HtmlIcon, 
  CssIcon, 
  JsIcon, 
  TsIcon, 
  ReactIcon, 
  NextjsIcon, 
  BootstrapIcon, 
  TailwindIcon, 
  VsCodeIcon, 
  GitIcon 
} from './TechIcons';
import { GithubIcon } from './Icons';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const SKILLS = [
  // Frontend
  {
    name: 'HTML',
    fullName: 'HTML5',
    category: 'Frontend',
    icon: HtmlIcon,
    accent: 'orange',
    accentText: 'text-orange-500',
    accentBg: 'bg-orange-500/10',
    accentBorder: 'border-orange-500/30',
    glowColor: 'group-hover:shadow-orange-500/10',
    description: 'Semantic markup & Accessibility',
  },
  {
    name: 'CSS',
    fullName: 'CSS3',
    category: 'Frontend',
    icon: CssIcon,
    accent: 'blue',
    accentText: 'text-blue-500',
    accentBg: 'bg-blue-500/10',
    accentBorder: 'border-blue-500/30',
    glowColor: 'group-hover:shadow-blue-500/10',
    description: 'Responsive styling & Animations',
  },
  {
    name: 'JavaScript',
    fullName: 'JavaScript (ES6+)',
    category: 'Frontend',
    icon: JsIcon,
    accent: 'yellow',
    accentText: 'text-amber-400',
    accentBg: 'bg-amber-400/10',
    accentBorder: 'border-amber-400/30',
    glowColor: 'group-hover:shadow-amber-400/10',
    description: 'Modern ES6+, DOM & Async APIs',
  },
  {
    name: 'TypeScript',
    fullName: 'TypeScript',
    category: 'Frontend',
    icon: TsIcon,
    accent: 'sky',
    accentText: 'text-sky-400',
    accentBg: 'bg-sky-400/10',
    accentBorder: 'border-sky-400/30',
    glowColor: 'group-hover:shadow-sky-400/10',
    description: 'Type-safe scalable JavaScript',
  },
  {
    name: 'React',
    fullName: 'React 19',
    category: 'Frontend',
    icon: ReactIcon,
    accent: 'cyan',
    accentText: 'text-cyan-400',
    accentBg: 'bg-cyan-400/10',
    accentBorder: 'border-cyan-400/30',
    glowColor: 'group-hover:shadow-cyan-400/10',
    description: 'Component architecture & Hooks',
  },
  {
    name: 'Next.js',
    fullName: 'Next.js 14/15',
    category: 'Frontend',
    icon: NextjsIcon,
    accent: 'white',
    accentText: 'text-slate-100',
    accentBg: 'bg-slate-100/10',
    accentBorder: 'border-slate-100/30',
    glowColor: 'group-hover:shadow-slate-100/10',
    description: 'App Router, SSR & Full-Stack',
  },
  {
    name: 'Bootstrap',
    fullName: 'Bootstrap 5',
    category: 'Frontend',
    icon: BootstrapIcon,
    accent: 'purple',
    accentText: 'text-purple-400',
    accentBg: 'bg-purple-400/10',
    accentBorder: 'border-purple-400/30',
    glowColor: 'group-hover:shadow-purple-400/10',
    description: 'Grid layout & Rapid UI prototyping',
  },
  {
    name: 'Tailwind CSS',
    fullName: 'Tailwind CSS',
    category: 'Frontend',
    icon: TailwindIcon,
    accent: 'teal',
    accentText: 'text-teal-400',
    accentBg: 'bg-teal-400/10',
    accentBorder: 'border-teal-400/30',
    glowColor: 'group-hover:shadow-teal-400/10',
    description: 'Utility-first modern styling',
  },
  // Tools
  {
    name: 'VS Code',
    fullName: 'Visual Studio Code',
    category: 'Tools',
    icon: VsCodeIcon,
    accent: 'blue',
    accentText: 'text-blue-400',
    accentBg: 'bg-blue-400/10',
    accentBorder: 'border-blue-400/30',
    glowColor: 'group-hover:shadow-blue-400/10',
    description: 'Primary IDE & Debugging suite',
  },
  {
    name: 'Git',
    fullName: 'Git',
    category: 'Tools',
    icon: GitIcon,
    accent: 'orange',
    accentText: 'text-orange-500',
    accentBg: 'bg-orange-500/10',
    accentBorder: 'border-orange-500/30',
    glowColor: 'group-hover:shadow-orange-500/10',
    description: 'Distributed version control & branching',
  },
  {
    name: 'GitHub',
    fullName: 'GitHub',
    category: 'Tools',
    icon: GithubIcon,
    accent: 'slate',
    accentText: 'text-slate-200',
    accentBg: 'bg-slate-200/10',
    accentBorder: 'border-slate-200/30',
    glowColor: 'group-hover:shadow-slate-200/10',
    description: 'Collaboration, CI/CD & repositories',
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { name: 'All', icon: Layers, count: SKILLS.length },
    { name: 'Frontend', icon: Code2, count: SKILLS.filter(s => s.category === 'Frontend').length },
    { name: 'Tools', icon: Wrench, count: SKILLS.filter(s => s.category === 'Tools').length },
  ];

  const filteredSkills = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 border-t border-slate-900 scroll-mt-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 -right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12" yOffset={35}>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Tech Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Skills &amp;{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Core frontend technologies, frameworks, and developer tools I leverage to build responsive, robust web experiences.
          </p>
        </ScrollReveal>

        {/* Category Tabs: All, Frontend, Tools */}
        <ScrollReveal className="flex items-center justify-center gap-2 mb-10" delay={0.1} yOffset={25}>
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  type="button"
                  onClick={() => setActiveCategory(cat.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-indigo-500/25'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.name}</span>
                  <span
                    className={`ml-1 px-1.5 py-0.2 rounded-full text-[11px] font-mono ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Flexible Responsive Grid: grid-cols-2 sm:grid-cols-3 md:grid-cols-4 */}
        <StaggerContainer
          key={activeCategory}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6"
          staggerDelay={0.06}
          viewportAmount={0.1}
        >
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <StaggerItem key={skill.name} className="h-full">
                <div
                  tabIndex={0}
                  role="button"
                  className={`h-full group relative p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-sm flex flex-col justify-between transition-all duration-300 cursor-pointer select-none touch-manipulation hover:-translate-y-1.5 hover:bg-slate-900/90 hover:border-slate-700 active:scale-95 active:bg-slate-850 active:border-indigo-500/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 shadow-sm ${skill.glowColor}`}
                >
                  {/* Top Row: Icon & Category Tag */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${skill.accentBg} ${skill.accentBorder} border flex items-center justify-center ${skill.accentText} transition-transform duration-300 group-hover:scale-110 group-active:scale-95 shadow-sm`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span
                      className={`text-[10px] font-mono uppercase font-semibold px-2 py-0.5 rounded-full border ${
                        skill.category === 'Frontend'
                          ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                          : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                      }`}
                    >
                      {skill.category}
                    </span>
                  </div>

                  {/* Skill Title & Detail */}
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {/* Bottom Active Indicator Bar */}
                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span className="flex items-center gap-1.5 group-hover:text-slate-300 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Proficient
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400">
                      Active
                    </span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom Helper Ribbon */}
        <ScrollReveal delay={0.2} yOffset={25}>
          <div className="mt-12 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/70 text-center flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>8 Frontend Core Technologies</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <span>3 Essential Development &amp; Workflow Tools</span>
            </div>
            <div className="text-slate-500 font-mono text-xs">
              Optimized for Modern Web Standards
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
