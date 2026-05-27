"use client";

import { motion } from "framer-motion";

type ShipRenderProps = {
  palette: [string, string, string];
  variant?: "compact" | "hero" | "builder";
  glow?: boolean;
};

export function ShipRender({ palette, variant = "compact", glow = true }: ShipRenderProps) {
  const [primary, secondary, accent] = palette;
  const size = variant === "hero" ? "h-[360px] sm:h-[460px]" : variant === "builder" ? "h-72" : "h-48";

  return (
    <motion.div
      className={`relative grid w-full place-items-center ${size}`}
      animate={{ y: [0, -10, 0], rotate: variant === "hero" ? [0, 1, 0, -1, 0] : [0, 0.7, 0] }}
      transition={{ duration: variant === "hero" ? 7 : 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div
        className="absolute inset-x-8 top-1/2 h-20 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: `linear-gradient(90deg, ${primary}66, ${secondary}55, ${accent}66)` }}
      />
      <svg viewBox="0 0 780 360" className="relative z-10 h-full w-full drop-shadow-[0_0_34px_rgba(0,229,255,.45)]" role="img" aria-label="futuristic spaceship render">
        <defs>
          <linearGradient id={`hull-${primary}`} x1="0" x2="1">
            <stop offset="0%" stopColor={primary} />
            <stop offset="48%" stopColor="#ffffff" />
            <stop offset="100%" stopColor={secondary} />
          </linearGradient>
          <linearGradient id={`glass-${accent}`} x1="0" x2="1">
            <stop offset="0%" stopColor={accent} stopOpacity=".25" />
            <stop offset="100%" stopColor="#fff" stopOpacity=".85" />
          </linearGradient>
          <filter id={`glow-${primary}`}>
            <feGaussianBlur stdDeviation="5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.path
          d="M54 184 C178 126 316 92 514 84 L738 180 L514 275 C320 270 180 238 54 184Z"
          fill={`url(#hull-${primary})`}
          opacity=".18"
          stroke={primary}
          strokeWidth="3"
          filter={glow ? `url(#glow-${primary})` : undefined}
          animate={{ pathLength: [0.55, 1, 0.55] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <path d="M192 183 C300 120 462 126 614 176 C472 226 306 238 192 183Z" fill="#071024" stroke={accent} strokeWidth="2" opacity=".92" />
        <path d="M282 172 C346 136 450 137 526 172 C440 199 344 202 282 172Z" fill={`url(#glass-${accent})`} stroke={accent} strokeWidth="3" opacity=".9" />
        <path d="M320 214 L182 322 L422 248Z" fill={secondary} opacity=".28" stroke={secondary} strokeWidth="2" />
        <path d="M326 150 L190 38 L430 118Z" fill={primary} opacity=".26" stroke={primary} strokeWidth="2" />
        <path d="M590 159 L728 184 L590 204 C616 188 616 174 590 159Z" fill={accent} opacity=".88" />
        <motion.path
          d="M62 184 C18 168 18 200 62 184Z"
          fill={primary}
          opacity=".82"
          animate={{ opacity: [0.25, 1, 0.25], scaleX: [0.8, 1.18, 0.8] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
        <g stroke={accent} strokeWidth="2" opacity=".72">
          <path d="M160 184 H704" />
          <path d="M250 140 L398 116" />
          <path d="M250 226 L398 248" />
          <path d="M492 124 L604 164" />
          <path d="M492 242 L604 202" />
        </g>
      </svg>
    </motion.div>
  );
}
