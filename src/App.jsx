import TechBackground from './components/TechBackground';
import TechCursor from './components/TechCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative isolate min-h-screen bg-transparent text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Clean Pitch-Dark Background with Subtle Interactive Constellation Particles & Code Shapes */}
      <TechBackground />

      {/* Constellation-Matched Interactive Mouse Cursor */}
      <TechCursor />

      {/* Sticky Responsive Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
