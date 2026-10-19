import { motion } from 'framer-motion';

export default function DeveloperIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto flex items-center justify-center select-none">
      {/* Ambient Glow Aura */}
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-indigo-500/25 to-purple-500/20 rounded-3xl blur-2xl opacity-75 pointer-events-none -z-10 animate-pulse duration-1000" />

      {/* Outer Floating Container with Anti-Gravity Effect */}
      <motion.div
        animate={{
          y: [-6, 6, -6],
          rotate: [-0.6, 0.6, -0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-full relative"
      >
        <svg
          viewBox="0 0 640 540"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="deskTopGrad" x1="120" y1="260" x2="520" y2="340" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </linearGradient>

            <linearGradient id="deskEdgeGrad" x1="120" y1="330" x2="520" y2="350" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
            </linearGradient>

            <linearGradient id="screenGrad1" x1="180" y1="130" x2="370" y2="250" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#030712" />
              <stop offset="100%" stopColor="#0b0f19" />
            </linearGradient>

            <linearGradient id="screenGrad2" x1="390" y1="120" x2="490" y2="270" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#050b14" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            <linearGradient id="hoodieGrad" x1="180" y1="280" x2="270" y2="440" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4338ca" />
              <stop offset="50%" stopColor="#312e81" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </linearGradient>

            <linearGradient id="lampGlowGrad" x1="535" y1="150" x2="470" y2="320" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="chairBackGrad" x1="130" y1="260" x2="200" y2="430" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="50%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#090d16" />
            </linearGradient>

            <linearGradient id="plantPotGrad" x1="135" y1="280" x2="165" y2="310" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#d946ef" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>

            {/* Drop Shadow Filter */}
            <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000000" floodOpacity="0.5" />
            </filter>
          </defs>

          <style>
            {`
              /* Keyframes */
              @keyframes headBob {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(2.5px) rotate(1.2deg); }
              }
              @keyframes typingHandLeft {
                0%, 100% { transform: translateY(0px); }
                25% { transform: translateY(-2px); }
                75% { transform: translateY(1.5px); }
              }
              @keyframes typingHandRight {
                0%, 100% { transform: translateY(0px); }
                25% { transform: translateY(1.5px); }
                75% { transform: translateY(-2.5px); }
              }
              @keyframes typingLinesPulse {
                0%, 100% { opacity: 0.2; transform: scaleY(0.7); }
                50% { opacity: 0.95; transform: scaleY(1.2); }
              }
              @keyframes cursorBlink {
                0%, 45% { opacity: 1; }
                55%, 100% { opacity: 0; }
              }
              @keyframes steamDrift {
                0% { opacity: 0; transform: translateY(0) scaleX(0.8); }
                50% { opacity: 0.7; }
                100% { opacity: 0; transform: translateY(-16px) scaleX(1.3); }
              }
              @keyframes lampPulse {
                0%, 100% { opacity: 0.75; }
                50% { opacity: 0.95; }
              }
              @keyframes codeLineFlow {
                0% { transform: scaleX(0.92); opacity: 0.7; }
                50% { transform: scaleX(1); opacity: 1; }
                100% { transform: scaleX(0.92); opacity: 0.7; }
              }
              @keyframes floatBadge1 {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-7px); }
              }
              @keyframes floatBadge2 {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(7px); }
              }

              /* Animation Classes */
              .anim-head {
                animation: headBob 3.6s ease-in-out infinite;
                transform-origin: 228px 230px;
              }
              .anim-hand-left {
                animation: typingHandLeft 0.35s ease-in-out infinite;
                transform-origin: 265px 335px;
              }
              .anim-hand-right {
                animation: typingHandRight 0.38s ease-in-out infinite;
                transform-origin: 300px 335px;
              }
              .anim-typing-lines {
                animation: typingLinesPulse 0.4s ease-in-out infinite alternate;
              }
              .anim-cursor {
                animation: cursorBlink 0.9s infinite;
              }
              .anim-steam {
                animation: steamDrift 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
              }
              .anim-lamp {
                animation: lampPulse 4s ease-in-out infinite;
              }
              .anim-badge-1 {
                animation: floatBadge1 4s ease-in-out infinite;
              }
              .anim-badge-2 {
                animation: floatBadge2 4.5s ease-in-out infinite 0.5s;
              }
              .anim-code-line {
                animation: codeLineFlow 3s ease-in-out infinite alternate;
              }
            `}
          </style>

          {/* 1. Isometric Base Platform Floor Glow */}
          <ellipse cx="320" cy="460" rx="260" ry="48" fill="#090d16" opacity="0.8" />
          <ellipse cx="320" cy="455" rx="210" ry="32" fill="url(#deskEdgeGrad)" opacity="0.3" filter="blur(16px)" />

          {/* 2. Sleek Desk Legs */}
          {/* Back Left Leg */}
          <path d="M145 320 L145 440" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
          {/* Back Right Leg */}
          <path d="M495 310 L495 430" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
          {/* Front Left Leg with Foot */}
          <path d="M175 350 L175 465" stroke="#475569" strokeWidth="7" strokeLinecap="round" />
          <path d="M162 465 L188 465" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />
          {/* Front Right Leg with Foot */}
          <path d="M525 340 L525 455" stroke="#475569" strokeWidth="7" strokeLinecap="round" />
          <path d="M512 455 L538 455" stroke="#a855f7" strokeWidth="4" strokeLinecap="round" />

          {/* 3. Desk Top Surface (Isometric Curved Bevel) */}
          {/* Desk Bottom Bevel / Thickness */}
          <path
            d="M 125 315 L 175 348 C 178 350, 185 352, 192 352 L 532 342 C 540 342, 546 339, 548 335 L 505 305 L 125 315 Z"
            fill="#090d16"
          />
          {/* Desk Edge Highlight Neon Line */}
          <path
            d="M 175 348 L 535 338"
            stroke="url(#deskEdgeGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Desk Top Polygon with Rounded Corners */}
          <polygon
            points="140,285 490,270 545,335 175,348"
            fill="url(#deskTopGrad)"
            stroke="#334155"
            strokeWidth="1.5"
            filter="url(#softShadow)"
          />

          {/* Desk Mat */}
          <polygon
            points="220,295 470,285 495,330 240,338"
            fill="#030712"
            stroke="#1e293b"
            strokeWidth="1.5"
            opacity="0.85"
          />
          {/* Desk Mat Edge Glow */}
          <line x1="240" y1="338" x2="495" y2="330" stroke="#06b6d4" strokeWidth="1.5" opacity="0.6" />

          {/* 4. Desk Lamp & Ambient Cone */}
          {/* Lamp Base */}
          <ellipse cx="505" cy="298" rx="14" ry="7" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
          {/* Lamp Curved Neck */}
          <path d="M505 298 Q 525 240 485 180" fill="none" stroke="#64748b" strokeWidth="4" strokeLinecap="round" />
          {/* Lamp Shade */}
          <path d="M472 170 L498 185 L480 198 Z" fill="#0ea5e9" stroke="#38bdf8" strokeWidth="1.5" />
          {/* Glowing Lamp Light Cone */}
          <polygon
            points="480,195 440,320 520,315"
            fill="url(#lampGlowGrad)"
            className="anim-lamp"
            style={{ mixBlendMode: 'screen' }}
          />

          {/* 5. Minimal Potted Plant (Left Side) */}
          <g transform="translate(142, 275)">
            {/* Pot */}
            <path d="M8 22 L26 22 L22 38 L12 38 Z" fill="url(#plantPotGrad)" stroke="#c084fc" strokeWidth="1" />
            <ellipse cx="17" cy="22" rx="9" ry="3" fill="#581c87" />
            {/* Succulent Leaves */}
            <path d="M17 22 Q 10 14 11 6 Q 16 14 17 22 Z" fill="#10b981" />
            <path d="M17 22 Q 24 13 26 8 Q 20 15 17 22 Z" fill="#34d399" />
            <path d="M17 22 Q 17 11 17 3 Q 19 12 17 22 Z" fill="#059669" />
            {/* Pot Rim Highlight */}
            <ellipse cx="17" cy="22" rx="9" ry="2" fill="none" stroke="#e879f9" strokeWidth="0.8" />
          </g>

          {/* 6. Coffee Mug with Animated Steam */}
          <g transform="translate(210, 310)">
            {/* Mug Body */}
            <rect x="0" y="6" width="13" height="15" rx="3" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
            <ellipse cx="6.5" cy="6" rx="6.5" ry="2.5" fill="#0f172a" />
            {/* Handle */}
            <path d="M13 9 C 16 9, 16 17, 13 17" fill="none" stroke="#38bdf8" strokeWidth="1.2" />
            {/* Animated Steam Trails */}
            <path d="M4 3 Q 2 -3 4 -8" stroke="#38bdf8" strokeWidth="1.2" fill="none" opacity="0.6" strokeLinecap="round" className="anim-steam" />
            <path d="M8 4 Q 10 -2 8 -7" stroke="#818cf8" strokeWidth="1" fill="none" opacity="0.5" strokeLinecap="round" className="anim-steam" style={{ animationDelay: '1.2s' }} />
          </g>

          {/* 7. Dual-Monitor Setup */}
          {/* Main Monitor Stand */}
          <path d="M295 240 L295 292" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
          <ellipse cx="295" cy="292" rx="20" ry="7" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" />

          {/* Primary Monitor (Front / Center - Coding Screen) */}
          <g filter="url(#softShadow)">
            {/* Outer Bezel */}
            <rect
              x="185"
              y="125"
              width="215"
              height="140"
              rx="10"
              fill="#090d16"
              stroke="#334155"
              strokeWidth="2.5"
            />
            {/* Screen Glass */}
            <rect
              x="191"
              y="131"
              width="203"
              height="128"
              rx="6"
              fill="url(#screenGrad1)"
            />
            {/* Top Bar with Window Dots */}
            <rect x="191" y="131" width="203" height="14" rx="4" fill="#0f172a" />
            <circle cx="201" cy="138" r="2.5" fill="#f43f5e" />
            <circle cx="208" cy="138" r="2.5" fill="#fbbf24" />
            <circle cx="215" cy="138" r="2.5" fill="#10b981" />
            <text x="228" y="141" fill="#64748b" fontSize="7" fontFamily="monospace">AlifCore.tsx</text>

            {/* Code Lines (Colorful rectangles & syntax elements) */}
            {/* Line 1: import React */}
            <rect x="201" y="152" width="26" height="4" rx="1.5" fill="#c084fc" />
            <rect x="231" y="152" width="34" height="4" rx="1.5" fill="#38bdf8" />
            <rect x="269" y="152" width="18" height="4" rx="1.5" fill="#94a3b8" />

            {/* Line 2: function Portfolio() { */}
            <rect x="201" y="161" width="36" height="4" rx="1.5" fill="#818cf8" />
            <rect x="241" y="161" width="48" height="4" rx="1.5" fill="#34d399" />
            <rect x="293" y="161" width="8" height="4" rx="1.5" fill="#fbbf24" />

            {/* Line 3: Indented code line */}
            <rect x="213" y="170" width="18" height="4" rx="1.5" fill="#f472b6" className="anim-code-line" />
            <rect x="235" y="170" width="44" height="4" rx="1.5" fill="#38bdf8" />
            <rect x="283" y="170" width="24" height="4" rx="1.5" fill="#a78bfa" />

            {/* Line 4: Staggered animated code lines */}
            <rect x="213" y="179" width="30" height="4" rx="1.5" fill="#fbbf24" />
            <rect x="247" y="179" width="52" height="4" rx="1.5" fill="#60a5fa" className="anim-code-line" />
            <rect x="303" y="179" width="22" height="4" rx="1.5" fill="#34d399" />

            {/* Line 5 */}
            <rect x="213" y="188" width="40" height="4" rx="1.5" fill="#c084fc" />
            <rect x="257" y="188" width="28" height="4" rx="1.5" fill="#38bdf8" />

            {/* Line 6 */}
            <rect x="213" y="197" width="22" height="4" rx="1.5" fill="#f43f5e" />
            <rect x="239" y="197" width="58" height="4" rx="1.5" fill="#a78bfa" />

            {/* Line 7 with Active Blinking Cursor */}
            <rect x="213" y="206" width="36" height="4" rx="1.5" fill="#38bdf8" />
            <rect x="253" y="206" width="24" height="4" rx="1.5" fill="#34d399" />
            {/* Blinking Cyan Cursor */}
            <rect x="280" y="204" width="2" height="8" fill="#22d3ee" className="anim-cursor" />

            {/* Mini Terminal Pane at Bottom of Screen */}
            <rect x="195" y="222" width="195" height="32" rx="4" fill="#020617" stroke="#1e293b" strokeWidth="1" />
            <circle cx="204" cy="229" r="1.5" fill="#10b981" />
            <text x="210" y="231" fill="#10b981" fontSize="6" fontFamily="monospace">Ready - compiled in 963ms</text>
            <rect x="204" y="236" width="12" height="2.5" rx="1" fill="#38bdf8" />
            <rect x="220" y="236" width="46" height="2.5" rx="1" fill="#64748b" />
            <rect x="270" y="236" width="30" height="2.5" rx="1" fill="#a78bfa" />
          </g>

          {/* Secondary Monitor (Angled Right - Website Wireframe Screen) */}
          {/* Secondary Monitor Stand */}
          <path d="M435 235 L435 285" stroke="#334155" strokeWidth="5" strokeLinecap="round" />
          <ellipse cx="435" cy="285" rx="16" ry="6" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />

          {/* Secondary Monitor Bezel & Wireframe */}
          <g filter="url(#softShadow)" transform="rotate(3, 440, 195)">
            <rect
              x="395"
              y="135"
              width="100"
              height="130"
              rx="8"
              fill="#090d16"
              stroke="#334155"
              strokeWidth="2"
            />
            <rect
              x="399"
              y="139"
              width="92"
              height="122"
              rx="5"
              fill="url(#screenGrad2)"
            />

            {/* Wireframe Header */}
            <rect x="404" y="145" width="82" height="8" rx="2" fill="#1e293b" />
            <circle cx="410" cy="149" r="2" fill="#06b6d4" />
            <rect x="450" y="147" width="14" height="4" rx="1" fill="#6366f1" />
            <rect x="468" y="147" width="14" height="4" rx="1" fill="#ec4899" />

            {/* Wireframe Hero Banner */}
            <rect x="404" y="157" width="82" height="26" rx="3" fill="#0f172a" stroke="#1e293b" strokeWidth="0.8" />
            <rect x="410" y="163" width="36" height="4" rx="1" fill="#38bdf8" />
            <rect x="410" y="170" width="24" height="3" rx="1" fill="#64748b" />
            <circle cx="465" cy="170" r="7" fill="#6366f1" opacity="0.6" />

            {/* Wireframe Cards Grid (3 cards representing portfolio projects) */}
            <rect x="404" y="188" width="38" height="30" rx="3" fill="#0f172a" stroke="#334155" strokeWidth="0.8" />
            <rect x="408" y="192" width="30" height="12" rx="2" fill="#06b6d4" opacity="0.3" />
            <rect x="408" y="208" width="20" height="3" rx="1" fill="#94a3b8" />

            <rect x="448" y="188" width="38" height="30" rx="3" fill="#0f172a" stroke="#334155" strokeWidth="0.8" />
            <rect x="452" y="192" width="30" height="12" rx="2" fill="#a855f7" opacity="0.3" />
            <rect x="452" y="208" width="20" height="3" rx="1" fill="#94a3b8" />

            {/* Wireframe Lower Block */}
            <rect x="404" y="223" width="82" height="18" rx="2" fill="#0f172a" />
            <rect x="409" y="227" width="42" height="3" rx="1" fill="#64748b" />
            <rect x="409" y="233" width="28" height="2.5" rx="1" fill="#475569" />
          </g>

          {/* 8. Keyboard & Mouse on Desk */}
          {/* Mechanical Keyboard */}
          <polygon
            points="260,320 345,316 350,332 263,337"
            fill="#090d16"
            stroke="#38bdf8"
            strokeWidth="1.5"
          />
          {/* Keys rows glow */}
          <line x1="265" y1="324" x2="343" y2="320" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="3 2" />
          <line x1="264" y1="329" x2="346" y2="325" stroke="#a855f7" strokeWidth="2" strokeDasharray="3 2" />
          <line x1="264" y1="334" x2="348" y2="330" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="4 2" />

          {/* Ergonomic Mouse */}
          <ellipse cx="372" cy="326" rx="8" ry="12" fill="#0f172a" stroke="#c084fc" strokeWidth="1.2" transform="rotate(-15, 372, 326)" />
          <line x1="370" y1="318" x2="368" y2="324" stroke="#a855f7" strokeWidth="1" />

          {/* 9. Ergonomic Developer Chair (Behind / With Developer) */}
          {/* 5-Star Chair Caster Base */}
          <g transform="translate(200, 465)">
            <ellipse cx="0" cy="0" rx="35" ry="8" fill="#050811" />
            <path d="M0 -3 L-28 4 M0 -3 L28 4 M0 -3 L-14 -6 M0 -3 L14 -6 M0 -3 L0 7" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
            <circle cx="-28" cy="4" r="3" fill="#64748b" />
            <circle cx="28" cy="4" r="3" fill="#64748b" />
            <circle cx="0" cy="7" r="3" fill="#64748b" />
          </g>
          {/* Gas Lift Cylinder */}
          <rect x="197" y="420" width="6" height="45" fill="#475569" rx="2" />

          {/* Chair Seat Cushion */}
          <ellipse cx="205" cy="415" rx="38" ry="15" fill="#0f172a" stroke="#334155" strokeWidth="2" />
          <ellipse cx="205" cy="412" rx="34" ry="12" fill="#1e293b" />

          {/* Chair Backrest */}
          <path
            d="M165 410 C 160 350, 162 290, 175 250 C 185 240, 215 240, 222 250 C 220 300, 215 360, 210 410 Z"
            fill="url(#chairBackGrad)"
            stroke="#334155"
            strokeWidth="2"
          />
          {/* Chair Ergonomic Lumbar Support Ridge */}
          <path d="M172 340 Q 192 345 212 340" stroke="#0ea5e9" strokeWidth="2" fill="none" opacity="0.6" />
          {/* Chair Headrest */}
          <rect x="180" y="222" width="34" height="20" rx="8" fill="#090d16" stroke="#475569" strokeWidth="1.5" />

          {/* Chair Armrest Left */}
          <path d="M175 365 L175 340 L195 338" stroke="#475569" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* Chair Armrest Right */}
          <path d="M232 375 L232 348 L255 346" stroke="#334155" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />

          {/* 10. The Developer (Hoodie, Typing Hands, Animated Nodding Head) */}
          {/* Developer Legs & Lower Torso */}
          <path d="M190 410 L235 408 L250 445 L225 450 Z" fill="#0f172a" stroke="#1e293b" strokeWidth="1.5" />

          {/* Torso in Cool Hoodie */}
          <path
            d="M185 395 C 182 350, 192 300, 215 285 C 235 285, 258 310, 260 365 C 262 390, 252 405, 240 408 Z"
            fill="url(#hoodieGrad)"
            stroke="#6366f1"
            strokeWidth="1.5"
            filter="url(#softShadow)"
          />
          {/* Hoodie Seams & Pocket */}
          <path d="M208 300 L212 340" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M218 360 Q 235 365 248 358" stroke="#3730a3" strokeWidth="2" fill="none" strokeLinecap="round" />

          {/* Left Arm & Hand reaching Keyboard */}
          <g className="anim-hand-left">
            <path
              d="M215 310 Q 235 330 265 335"
              stroke="url(#hoodieGrad)"
              strokeWidth="15"
              strokeLinecap="round"
              fill="none"
            />
            {/* Hand */}
            <circle cx="268" cy="334" r="5" fill="#fbcfe8" />
          </g>

          {/* Right Arm & Hand actively typing */}
          <g className="anim-hand-right">
            <path
              d="M235 318 Q 265 332 298 333"
              stroke="#312e81"
              strokeWidth="14"
              strokeLinecap="round"
              fill="none"
            />
            {/* Hand */}
            <circle cx="300" cy="332" r="5" fill="#fbcfe8" />
          </g>

          {/* Animated Typing Particles / Lines near hands */}
          <g className="anim-typing-lines">
            <line x1="266" y1="322" x2="266" y2="315" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" />
            <line x1="274" y1="320" x2="277" y2="313" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" />
            <line x1="298" y1="321" x2="298" y2="314" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
            <line x1="305" y1="319" x2="309" y2="312" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Developer Head with Hoodie & Subtle Head Nod Animation */}
          <g className="anim-head">
            {/* Hoodie Hood Outer */}
            <ellipse cx="230" cy="242" rx="22" ry="24" fill="#312e81" stroke="#6366f1" strokeWidth="1.5" />
            {/* Hood Opening & Face Silhouette */}
            <ellipse cx="237" cy="244" rx="14" ry="16" fill="#1e1b4b" />
            {/* Profile Face */}
            <path
              d="M232 235 C 242 235, 248 240, 248 248 C 248 254, 242 258, 234 258 Z"
              fill="#fbcfe8"
            />
            {/* Modern Glasses with Cyan Reflection */}
            <rect x="238" y="242" width="10" height="7" rx="2" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
            <line x1="233" y1="245" x2="238" y2="245" stroke="#22d3ee" strokeWidth="1" />
            <line x1="248" y1="245" x2="252" y2="246" stroke="#22d3ee" strokeWidth="1" />
            {/* Sleek Over-Ear Headphones */}
            <ellipse cx="225" cy="245" rx="5" ry="9" fill="#090d16" stroke="#06b6d4" strokeWidth="1.5" />
            <path d="M220 236 C 220 220, 236 218, 240 220" fill="none" stroke="#06b6d4" strokeWidth="2" />
          </g>

          {/* 11. Floating Futuristic Micro-Badges around the Workspace */}
          {/* Badge 1: React / TS Pill (Floating Top Left) */}
          <g className="anim-badge-1" transform="translate(130, 110)">
            <rect x="0" y="0" width="76" height="28" rx="14" fill="#090d16" stroke="#06b6d4" strokeWidth="1.2" opacity="0.95" filter="url(#softShadow)" />
            <circle cx="15" cy="14" r="5" fill="#0ea5e9" opacity="0.3" />
            <circle cx="15" cy="14" r="2.5" fill="#38bdf8" />
            <text x="27" y="18" fill="#e2e8f0" fontSize="10" fontWeight="bold" fontFamily="monospace">React 19</text>
          </g>

          {/* Badge 2: Next.js / Code Pill (Floating Top Right) */}
          <g className="anim-badge-2" transform="translate(470, 95)">
            <rect x="0" y="0" width="82" height="28" rx="14" fill="#090d16" stroke="#a855f7" strokeWidth="1.2" opacity="0.95" filter="url(#softShadow)" />
            <text x="14" y="18" fill="#c084fc" fontSize="11" fontWeight="bold" fontFamily="monospace">&lt;coder/&gt;</text>
          </g>

          {/* Floating Subtle Sparks/Stars */}
          <circle cx="170" cy="190" r="1.5" fill="#38bdf8" opacity="0.8" />
          <circle cx="530" cy="220" r="2" fill="#d946ef" opacity="0.7" />
          <circle cx="490" cy="380" r="1.5" fill="#06b6d4" opacity="0.8" />
          <circle cx="130" cy="380" r="1.5" fill="#a855f7" opacity="0.8" />
        </svg>
      </motion.div>
    </div>
  );
}

