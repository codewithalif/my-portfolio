export default function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-[#020617]"
    >
      {/* 1. Subtle Dot Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:32px_32px] opacity-30" 
      />

      {/* 2. Liquid Glowing Aurora Gradient Waves */}
      <div className="absolute -inset-[15%] filter blur-[55px] sm:blur-[75px] saturate-200 transform-gpu pointer-events-none">
        
        {/* Wave 1: Flowing Cyan & Electric Teal Ribbon */}
        <div
          className="animate-aurora-1 absolute top-[0%] left-[5%] w-[65vw] h-[55vh] min-w-[380px] min-h-[350px] opacity-65 mix-blend-screen transform-gpu"
          style={{
            background: 'radial-gradient(ellipse at center, #06b6d4 0%, #00f2fe 30%, #0891b2 60%, transparent 75%)',
          }}
        />

        {/* Wave 2: Shifting Electric Purple & Indigo Ribbon */}
        <div
          className="animate-aurora-2 absolute top-[20%] right-[0%] w-[70vw] h-[65vh] min-w-[400px] min-h-[380px] opacity-60 mix-blend-screen transform-gpu"
          style={{
            background: 'radial-gradient(ellipse at center, #8b5cf6 0%, #7c3aed 35%, #4f46e5 65%, transparent 75%)',
          }}
        />

        {/* Wave 3: Undulating Violet & Magenta Ribbon */}
        <div
          className="animate-aurora-3 absolute -bottom-[10%] left-[15%] w-[60vw] h-[55vh] min-w-[360px] min-h-[340px] opacity-55 mix-blend-screen transform-gpu"
          style={{
            background: 'radial-gradient(ellipse at center, #a855f7 0%, #c026d3 35%, #9333ea 65%, transparent 75%)',
          }}
        />

        {/* Wave 4: Central Cyan & Violet Swell for Vibrant Core Glow */}
        <div
          className="animate-aurora-4 absolute top-[35%] left-[25%] w-[55vw] h-[50vh] min-w-[340px] min-h-[320px] opacity-50 mix-blend-screen transform-gpu"
          style={{
            background: 'radial-gradient(circle at center, #06b6d4 0%, #8b5cf6 45%, #ec4899 70%, transparent 80%)',
          }}
        />

      </div>

      {/* 3. Floating Luminous Particle Accents */}
      <div 
        className="animate-aurora-2 absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-cyan-300 blur-[2px] opacity-70 shadow-[0_0_16px_#06b6d4]" 
      />
      <div 
        className="animate-aurora-1 absolute top-2/3 right-1/4 w-3.5 h-3.5 rounded-full bg-purple-300 blur-[2px] opacity-70 shadow-[0_0_16px_#8b5cf6]" 
      />
      <div 
        className="animate-aurora-3 absolute bottom-1/3 left-1/5 w-2.5 h-2.5 rounded-full bg-pink-300 blur-[2px] opacity-60 shadow-[0_0_12px_#ec4899]" 
      />

      {/* 4. Film Grain / Noise Texture for Cinematic Tactile Feel */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none mix-blend-overlay"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="aurora-noise-filter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.8" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#aurora-noise-filter)" />
      </svg>

      {/* 5. Gentle Non-Intrusive Vignette (Allows Waves to Shine while keeping corners dark) */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_90%_90%_at_50%_50%,transparent_40%,rgba(2,6,23,0.65)_100%)] pointer-events-none" 
      />
    </div>
  );
}
