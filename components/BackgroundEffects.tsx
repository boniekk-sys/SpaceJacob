"use client";

import { useEffect, useState } from "react";

export function BackgroundEffects() {
  const [pos, setPos] = useState({ x: 50, y: 30 });

  useEffect(() => {
    const move = (event: PointerEvent) => {
      setPos({ x: (event.clientX / window.innerWidth) * 100, y: (event.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#11184b_0%,#050612_42%,#02030a_100%)]" />
      <div className="stars-layer" />
      <div className="stars-layer stars-layer-two" />
      <div className="absolute -left-32 top-20 h-[42rem] w-[42rem] rounded-full bg-fuchsia-600/20 blur-[120px] animate-nebula" />
      <div className="absolute -right-44 top-1/3 h-[46rem] w-[46rem] rounded-full bg-cyan-400/16 blur-[140px] animate-nebula-slow" />
      <div className="absolute bottom-0 left-1/4 h-[34rem] w-[34rem] rounded-full bg-violet-600/18 blur-[120px] animate-nebula" />
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(0,229,255,.20), rgba(255,43,214,.10) 18%, transparent 38%)`
        }}
      />
      <div className="scanner-line" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
    </div>
  );
}
