"use client";

import { motion } from "framer-motion";
import { ArrowDown, Orbit, Rocket } from "lucide-react";
import { SpaceScene } from "./SpaceScene";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-28">
      <SpaceScene />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 text-center">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.2 }}>
          <div className="mx-auto mb-7 flex w-fit items-center gap-3 rounded-full border border-ion/30 bg-ion/10 px-5 py-2 text-xs uppercase tracking-[0.32em] text-ion shadow-neon backdrop-blur-xl">
            <Orbit size={16} />
            Intergalactic Spaceship Marketplace
          </div>
          <h1 className="hologram-title glitch mx-auto max-w-6xl font-display text-6xl font-black uppercase leading-[0.9] text-white sm:text-8xl lg:text-[9.5rem]" data-text="Space JacoB">
            Space JacoB
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg font-medium text-white/78 sm:text-2xl">Engineering The Future Beyond The Stars</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#fleet" className="neon-button group">
              <Rocket size={18} />
              Explore Fleet
            </a>
            <a href="#ship-builder" className="neon-button neon-button-alt">
              Build Your Ship
            </a>
          </div>
        </motion.div>
        <motion.div className="mx-auto grid h-16 w-10 place-items-center rounded-full border border-white/20 bg-white/5 text-ion" animate={{ y: [0, 12, 0], opacity: [0.45, 1, 0.45] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ArrowDown size={20} />
        </motion.div>
      </div>
    </section>
  );
}
