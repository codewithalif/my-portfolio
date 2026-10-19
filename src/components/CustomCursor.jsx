import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  
  // Track cursor coordinates
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch / coarse pointer devices
    const checkTouch = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches;
      setIsTouchDevice(hasTouch);
    };
    checkTouch();

    let animationFrameId;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Instantly position center dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Track hover on interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const interactive = target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer, label');
      if (interactive) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    // Smooth physics loop for the trailing outer ring
    const render = () => {
      // Elastic lerp interpolation (0.16 factor for fluid lag)
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.16;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.16;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
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
  }, [isVisible]);

  // Don't render on mobile/touch devices
  if (isTouchDevice) return null;

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Trailing Outer Ring / Glowing Aura */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 -ml-5 -mt-5 w-10 h-10 rounded-full border pointer-events-none will-change-transform transition-all duration-200 ease-out ${
          !isVisible ? 'opacity-0' : isHovered ? 'opacity-90' : 'opacity-60'
        } ${
          isHovered
            ? 'scale-[1.8] border-cyan-400 bg-cyan-400/10 shadow-[0_0_20px_rgba(6,182,212,0.4)]'
            : isClicked
            ? 'scale-[0.85] border-purple-400 bg-purple-500/20 shadow-[0_0_15px_rgba(139,92,246,0.3)]'
            : 'scale-100 border-indigo-400/70 bg-indigo-500/5 shadow-[0_0_12px_rgba(99,102,241,0.2)]'
        }`}
      />

      {/* Center Sharp Core Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full pointer-events-none will-change-transform transition-opacity duration-150 ${
          !isVisible ? 'opacity-0' : 'opacity-100'
        } ${
          isHovered
            ? 'bg-gradient-to-r from-cyan-300 to-indigo-300 scale-75'
            : 'bg-cyan-400 shadow-[0_0_8px_#06b6d4]'
        }`}
      />
    </div>
  );
}

