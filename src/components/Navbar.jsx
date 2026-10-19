import { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Home, 
  User, 
  Code2, 
  FolderGit2, 
  Mail, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const NAV_LINKS = [
  { name: 'Home', href: '#home', id: 'home', icon: Home },
  { name: 'About', href: '#about', id: 'about', icon: User },
  { name: 'Skills', href: '#skills', id: 'skills', icon: Code2 },
  { name: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
  { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isClickScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  // 1. Lightweight sticky header listener (RAF throttled, no DOM queries or forced reflows)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 20;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Off-thread IntersectionObserver for silky smooth active section tracking without layout thrashing
  useEffect(() => {
    const observerCallback = (entries) => {
      // Don't update active section during programmatic click smooth scroll
      if (isClickScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -55% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    NAV_LINKS.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // 3. Lock body scroll when mobile drawer is open & handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  // 4. Buttery-smooth programmatic scroll with sticky navbar offset
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);

    // Suppress scroll listener updates during the smooth animation to eliminate stutter
    isClickScrolling.current = true;
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);

    if (sectionId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const navHeight = 75;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Sticky Header Container */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
            : 'bg-slate-950/40 backdrop-blur-sm border-b border-slate-800/30 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo on the left with subtle gradient text */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="group flex items-center gap-2.5 text-xl font-bold tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg py-1 px-1.5 transition-transform duration-200 active:scale-95"
            >
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 p-0.5 shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
                <div className="h-full w-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              <span className="flex items-center text-lg sm:text-xl font-extrabold tracking-tight">
                <span className="text-slate-100 group-hover:text-white transition-colors">Md Alif</span>
                <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent font-black ml-1">
                  
                </span>
              </span>
            </a>

            {/* Desktop Navigation: Horizontal links with smooth scrolling */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-gradient-to-r from-indigo-600/90 to-purple-600/90 shadow-sm shadow-indigo-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Right CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="group relative inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-lg hover:from-cyan-400 hover:to-indigo-500 transition-all duration-300 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Mobile / Tablet: Hamburger Menu Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative inline-flex items-center justify-center p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
                aria-controls="mobile-drawer"
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span
                    className={`bg-current block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                    }`}
                  />
                  <span
                    className={`bg-current block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm my-0.5 ${
                      isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`bg-current block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${
                      isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile / Tablet: Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile / Tablet: Clean Side Drawer Menu with Smooth Animation */}
      <aside
        id="mobile-drawer"
        aria-label="Mobile Navigation Drawer"
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 sm:w-80 bg-slate-900/95 border-l border-slate-800 backdrop-blur-xl shadow-2xl flex flex-col justify-between p-6 transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="flex items-center gap-2"
            >
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 p-0.5">
                <div className="h-full w-full bg-slate-950 rounded-[6px] flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                </div>
              </div>
              <span className="text-lg font-bold tracking-tight">
                <span className="text-white">Alif</span>
                <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent font-black ml-1">
                  .dev
                </span>
              </span>
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              const IconComponent = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`flex items-center gap-3 px-3.5 py-3 rounded-xl font-medium text-base transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-cyan-400 border border-indigo-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <IconComponent
                    className={`w-5 h-5 ${
                      isActive ? 'text-cyan-400' : 'text-slate-400'
                    }`}
                  />
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Drawer Footer & Socials */}
        <div className="pt-6 border-t border-slate-800/80">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 text-center font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl hover:from-cyan-400 hover:to-indigo-500 transition-all duration-200 shadow-md shadow-cyan-500/20 mb-4"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <div className="flex items-center justify-center gap-4 text-slate-400">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="GitHub profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-2 rounded-lg hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Email me"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
