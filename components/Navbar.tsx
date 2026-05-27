"use client";

import { motion } from "framer-motion";
import { Menu, Rocket, Volume2, VolumeX, X } from "lucide-react";
import { useState } from "react";

const links = ["Home", "Fleet", "Categories", "Ship Builder", "About", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [sound, setSound] = useState(false);

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6"
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/15 bg-white/[0.06] px-4 py-3 shadow-glass backdrop-blur-2xl">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-ion/50 bg-ion/10 text-ion shadow-neon">
            <Rocket size={20} />
          </span>
          <span className="font-display text-lg font-black uppercase tracking-[0.16em] text-white">Space JacoB</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="rounded-full px-4 py-2 text-sm uppercase tracking-[0.18em] text-white/72 transition hover:bg-white/10 hover:text-ion">
              {link}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle ambient sound"
            onClick={() => setSound((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-ion/70 hover:text-ion"
          >
            {sound ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>
          <button
            aria-label="Open navigation"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      {open && (
        <motion.div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/15 bg-[#050714]/90 p-4 shadow-glass backdrop-blur-2xl lg:hidden" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.2em] text-white/75 hover:bg-white/10 hover:text-ion">
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
