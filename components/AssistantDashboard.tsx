"use client";

import { motion } from "framer-motion";
import { Bot, Map, RadioTower } from "lucide-react";
import { assistantCards } from "@/data/ships";

export function AssistantDashboard() {
  return (
    <section className="relative z-10 px-4 py-24 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div className="glass-panel p-6 sm:p-8" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="mb-7 flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl border border-plasma/30 bg-plasma/10 text-plasma"><Bot /></span>
            <div>
              <p className="section-kicker">AI Recommendation Assistant</p>
              <h2 className="font-display text-3xl font-black text-white">Mission-fit guidance</h2>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {assistantCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 transition hover:border-ion/40 hover:bg-ion/10">
                  <Icon className="text-ion" size={24} />
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">{card.text}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div className="glass-panel overflow-hidden p-6 sm:p-8" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="section-kicker">Interactive Galaxy Map</p>
              <h2 className="font-display text-3xl font-black text-white">Live systems dashboard</h2>
            </div>
            <RadioTower className="text-ion" />
          </div>
          <div className="relative mt-8 aspect-[1.45] overflow-hidden rounded-[1.7rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(0,229,255,.22),transparent_28%),radial-gradient(circle_at_22%_72%,rgba(255,43,214,.18),transparent_20%),#03040d]">
            <div className="absolute inset-0 galaxy-grid" />
            {[["Poznan Prime", "20%", "46%"], ["Vega Relay", "68%", "24%"], ["Aurelia Port", "76%", "72%"], ["Atlas Gate", "36%", "76%"]].map(([label, left, top], index) => (
              <motion.div key={label} className="absolute" style={{ left, top }} animate={{ scale: [1, 1.18, 1] }} transition={{ duration: 2 + index * 0.4, repeat: Infinity }}>
                <span className="block h-4 w-4 rounded-full bg-ion shadow-[0_0_24px_#00e5ff]" />
                <span className="mt-2 block whitespace-nowrap rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/70 backdrop-blur">{label}</span>
              </motion.div>
            ))}
            <Map className="absolute bottom-5 right-5 text-white/35" size={42} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
