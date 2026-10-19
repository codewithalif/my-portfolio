import { useEffect, useRef } from 'react';

export default function TechBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse coordinates
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140, // Distance within which lines connect to cursor
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    // Particle setup
    let particles = [];

    const colors = [
      { r: 6, g: 182, b: 212 },   // Cyan
      { r: 139, g: 92, b: 246 },  // Purple
      { r: 99, g: 102, b: 241 },  // Indigo
      { r: 241, g: 245, b: 249 }, // Faint Star White
    ];

    function initParticles() {
      particles = [];
      const count = window.innerWidth < 768 ? 30 : 60;
      for (let i = 0; i < count; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: -0.15 - Math.random() * 0.35, // Subtle upward drift
          radius: 1 + Math.random() * 1.5,
          baseAlpha: 0.15 + Math.random() * 0.25,
          color,
        });
      }
    }

    initParticles();

    // Canvas draw loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw constellation connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            const alpha = (1 - dist / 90) * 0.08;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Draw and update each particle + connect to mouse cursor
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Check distance to mouse
        const dxMouse = mouse.x - p.x;
        const dyMouse = mouse.y - p.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        let currentAlpha = p.baseAlpha;

        // Lightly connect to and illuminate near user's cursor
        if (distMouse < mouse.radius) {
          const mouseConnectionAlpha = (1 - distMouse / mouse.radius) * 0.25;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(6, 182, 212, ${mouseConnectionAlpha})`;
          ctx.lineWidth = 0.85;
          ctx.stroke();

          // Increase particle glow near cursor
          currentAlpha = Math.min(0.9, p.baseAlpha + (1 - distMouse / mouse.radius) * 0.5);
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${currentAlpha})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${currentAlpha * 0.8})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-[#030712]"
    >
      {/* 1. Deep Solid Dark Base */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* 2. Thin, Barely Visible Tech Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b14_1px,transparent_1px),linear-gradient(to_bottom,#1e293b14_1px,transparent_1px)] [background-size:48px_48px] opacity-40" 
      />

      {/* 3. HTML5 Canvas for Constellation Dust Particles & Interactive Mouse Lines */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* 4. Micro Floating Minimal Geometric / Code Shapes */}
      {/* Shape 1: Code Bracket { } in Upper-Left */}
      <div className="animate-micro-1 absolute top-[18%] left-[8%] hidden sm:block pointer-events-none select-none">
        <span className="font-mono text-2xl lg:text-3xl font-light text-cyan-400/20 tracking-widest drop-shadow-[0_0_8px_rgba(6,182,212,0.15)]">
          {'{ }'}
        </span>
      </div>

      {/* Shape 2: Code Tag < / > in Middle-Right */}
      <div className="animate-micro-2 absolute top-[48%] right-[8%] hidden sm:block pointer-events-none select-none">
        <span className="font-mono text-xl lg:text-2xl font-light text-purple-400/20 tracking-wider drop-shadow-[0_0_8px_rgba(139,92,246,0.15)]">
          {'< / >'}
        </span>
      </div>

      {/* Shape 3: Wireframe Tech Diamond Ring in Lower-Left */}
      <div className="animate-micro-3 absolute bottom-[18%] left-[12%] hidden sm:flex items-center justify-center w-8 h-8 rounded-lg border border-indigo-400/20 rotate-12 pointer-events-none shadow-[0_0_12px_rgba(99,102,241,0.1)]">
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/30" />
      </div>

      {/* 5. Very Faint Film Grain Overlay */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none mix-blend-overlay"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="film-grain-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#film-grain-filter)" />
      </svg>
    </div>
  );
}
