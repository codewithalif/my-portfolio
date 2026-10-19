import g3ArchitectImg from '../assets/projects/G3-Architect.jpg';
import influencerGearImg from '../assets/projects/Influencer-Gear.jpg';
import devStackImg from '../assets/projects/dev-stack.jpg';

export const projectsData = [
  {
    id: 1,
    title: "G3 Architects",
    category: "Architecture & Agency",
    description: "A responsive landing page for an architectural firm built with modern web technologies, fluid layouts, and clean typography.",
    techStack: ["HTML5", "CSS3", "Tailwind CSS", "Responsive"],
    liveLink: "https://codewithalif.github.io/g3-architects/",
    gitrepolink: "https://github.com/codewithalif/g3-architects",
    image: g3ArchitectImg,
    badgeText: "RESPONSIVE",
    status: "Live Demo",
    accentColor: "text-amber-400",
    imageGradient: "from-amber-600/30 via-orange-600/20 to-slate-900/40",
    featured: true,
  },
  {
    id: 2,
    title: "Influencer Gear",
    category: "E-Commerce & Gear Store",
    description: "An e-commerce showcase landing page tailored for influencers and content creators with interactive product grids and shopping features.",
    techStack: ["React", "JavaScript", "Tailwind CSS", "UI Design"],
    liveLink: "https://codewithalif.github.io/Influencer_gear/",
    gitrepolink: "https://github.com/codewithalif/Influencer_gear",
    image: influencerGearImg,
    badgeText: "E-COMMERCE",
    status: "Live Demo",
    accentColor: "text-pink-400",
    imageGradient: "from-pink-600/30 via-purple-600/20 to-slate-900/40",
    featured: true,
  },
  {
    id: 3,
    title: "Dev_Stack-A5",
    category: "Developer Resource Hub",
    description: "A modern web platform designed for developers to manage and showcase tech resources, workflow assignments, and frontend components.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Netlify"],
    liveLink: "https://dev-stack-a-05.netlify.app/#",
    gitrepolink: "https://github.com/codewithalif/Dev_Stack-A5",
    image: devStackImg,
    badgeText: "DEV PLATFORM",
    status: "Live Demo",
    accentColor: "text-cyan-400",
    imageGradient: "from-cyan-600/30 via-indigo-600/20 to-slate-900/40",
    featured: true,
  }
];

export default projectsData;
;