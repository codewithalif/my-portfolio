import { useEffect, useRef, useState } from 'react';

export default function TechCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  // Position references (avoiding state re-renders on mousemove for 60/120fps)
  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const isTouchDevice = typeof window !== 'undefined' && (
    'ontouchstart' in window || 
    navigator.maxTouchPoints > 0 || 
    window.matchMedia('(pointer: coarse)').matches
  );

  useEffect(() => {
    if (isTouchDevice) return;

    let animationFrameId;

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Instant positioning for precision focal dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Detect hover on interactive UI elements
    const handleMouseOver = (e) => {
      const interactive = e.target.closest(
        'a, button, input, textarea, select, [role="button"], .cursor-pointer, label'
      );
      setIsHovered(Boolean(interactive));
    };

    // Smooth physics loop for fluid constellation orbit ring
    const render = () => {
      // Elastic lerp factor (0.18 for smooth organic trailing)
      ring.current.x += (mouse.current.x - ring.current.x) * 0.18;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* 1. Fluid Trailing Constellation Orbit Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 -ml-4 -mt-4 w-8 h-8 rounded-full border pointer-events-none will-change-transform transition-all duration-200 ease-out flex items-center justify-center ${
          !isVisible ? 'opacity-0' : isHovered ? 'opacity-100' : 'opacity-70'
        } ${
          isHovered
            ? 'scale-[1.65] border-cyan-400/90 bg-gradient-to-tr from-cyan-500/15 via-indigo-500/10 to-purple-500/15 shadow-[0_0_20px_rgba(6,182,212,0.35)]'
            : isClicked
            ? 'scale-[0.8] border-purple-400 bg-purple-500/25 shadow-[0_0_15px_rgba(139,92,246,0.4)]'
            : 'scale-100 border-cyan-400/40 bg-cyan-500/5 shadow-[0_0_12px_rgba(6,182,212,0.15)]'
        }`}
      >
        {/* Subtle crosshair micro-ticks on hover */}
        {isHovered && (
          <>
            <span className="absolute -top-1 w-0.5 h-1 bg-cyan-400 rounded-full" />
            <span className="absolute -bottom-1 w-0.5 h-1 bg-cyan-400 rounded-full" />
            <span className="absolute -left-1 w-1 h-0.5 bg-cyan-400 rounded-full" />
            <span className="absolute -right-1 w-1 h-0.5 bg-cyan-400 rounded-full" />
          </>
        )}
      </div>

      {/* 2. Precision Luminous Focal Star Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full pointer-events-none will-change-transform transition-all duration-150 ${
          !isVisible ? 'opacity-0' : 'opacity-100'
        } ${
          isHovered
            ? 'bg-gradient-to-r from-cyan-300 to-indigo-300 scale-75 shadow-[0_0_10px_#06b6d4]'
            : 'bg-cyan-400 shadow-[0_0_8px_#06b6d4,0_0_2px_#ffffff]'
        }`}
      />
    </div>
  );
}
