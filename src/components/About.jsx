import {
  GraduationCap,
  Code2,
  Palette,
  Rocket,
  MapPin,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import myPhoto from "../assets/MY_Photo .jpg";
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const STATS = [
  {
    icon: Rocket,
    value: "6+Months",
    label: "Hands-on Coding",
    description: "Continuous learning & real-world building",
  },
  {
    icon: Code2,
    value: "10+",
    label: "Completed Projects",
    description: "Full-stack apps, SPAs & UI templates",
  },
  {
    icon: Palette,
    value: "15+",
    label: "Tech & Tools",
    description: "React, Next.js, Tailwind, Node & more",
  },
  {
    icon: GraduationCap,
    value: "PPI",
    label: "CST Department",
    description: "Pabna Polytechnic Institute",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 border-t border-slate-900 scroll-mt-24 relative overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16" yOffset={35}>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Bridging Engineering with{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Creative UI Design
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Get to know my academic background, technical passions, and vision
            for building next-generation web applications.
          </p>
        </ScrollReveal>

        {/* 2-Column Responsive Grid Layout (grid-cols-1 md:grid-cols-2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Profile Card */}
          <ScrollReveal className="relative group" delay={0.1} yOffset={40}>
            {/* Ambient Card Glow */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-600/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-500 -z-10" />

            {/* Profile Card Container */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800/90 shadow-2xl backdrop-blur-xl flex flex-col items-center text-center">
              
              {/* Avatar Box with Profile Image */}
              <div className="relative mb-6">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl p-1 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 shadow-xl shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
                  <div className="w-full h-full rounded-[22px] bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden">
                    
                    {/* Profile Image with Proper Fit & Background Match */}
                    <img 
                      src={myPhoto} 
                      alt="Md. Alif" 
                      className="w-full h-full object-cover object-top rounded-[20px]"
                    />

                    {/* Subtle Overlay Glow */}
                    <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-indigo-950/60 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Pulsing Status Dot Badge */}
                <div className="absolute -bottom-2 right-2 px-3 py-1 rounded-full bg-slate-900/95 border border-slate-700 shadow-lg flex items-center gap-1.5 text-[11px] font-semibold text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Student &amp; Dev</span>
                </div>
              </div>

              {/* Profile Card Info */}
              <h3 className="text-2xl font-bold text-white mb-1">Md Alif</h3>
              <p className="text-sm font-medium text-cyan-400 mb-3 font-mono">
                Frontend Developer 
              </p>

              {/* Education & Location Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Pabna Polytechnic Institute</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>Pabna, Bangladesh</span>
                </span>
              </div>

              {/* Key Skill Badges on Profile Card */}
              <div className="w-full pt-4 border-t border-slate-800/80 flex flex-wrap justify-center gap-1.5">
                {[
                  "React ",
                  "Next.js",
                  "Tailwind CSS",
                  "Node.js",
                  "UI/UX",
                ].map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-800/50 text-slate-300 border border-slate-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Bio */}
          <ScrollReveal className="space-y-6" delay={0.2} yOffset={40}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold mb-3">
                <span>Who I Am</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                Computer Science &amp; Technology Student at{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Pabna Polytechnic Institute
                </span>
              </h3>
            </div>

            <p className="text-slate-300 text-base leading-relaxed">
              I am a dedicated{" "}
              <strong className="text-white">
                Computer Science &amp; Technology (CST)
              </strong>{" "}
              student at{" "}
              <strong className="text-cyan-400 font-semibold">
                Pabna Polytechnic Institute
              </strong>
              . My journey revolves around mastering modern full-stack web
              architectures, software engineering principles, and contemporary
              frontend frameworks.
            </p>

            <p className="text-slate-400 text-base leading-relaxed">
              What sets me apart is my deep passion for both{" "}
              <strong className="text-slate-200">
                robust full-stack engineering
              </strong>{" "}
              and{" "}
              <strong className="text-slate-200">UI design</strong>. I
              don&apos;t just write backend APIs or component logic; I obsess
              over typography, spacing, responsive ergonomics, and fluid
              animations to ensure every digital product feels responsive,
              intuitive, and delightful to use.
            </p>

            {/* Core Competencies Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="font-semibold text-white">
                    Frontend Development:{" "}
                  </span>
                  <span className="text-slate-400">
                    Architecting end-to-end web apps with React, Next.js.
                    
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="font-semibold text-white">
                    Modern UI/UX Design:{" "}
                  </span>
                  <span className="text-slate-400">
                    Translating concepts into accessible, responsive interfaces
                    using Tailwind CSS and component systems.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="font-semibold text-white">
                    Academic Fundamentals:{" "}
                  </span>
                  <span className="text-slate-400">
                    Strong CST foundations in data structures, algorithms,
                    databases, and computer systems.
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Link */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
              >
                <span>Let&apos;s collaborate on a project</span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Responsive Stats / Highlight Cards at the Bottom */}
        <StaggerContainer
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 sm:mt-16"
          staggerDelay={0.12}
        >
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <StaggerItem
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-300 group shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </div>
                <div className="font-bold text-white text-sm sm:text-base mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  {stat.description}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}