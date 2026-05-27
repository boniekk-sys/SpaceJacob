"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { categories, ships, type Ship } from "@/data/ships";
import { ShipRender } from "./ShipRender";

function StatBar({ label, value, suffix = "%" }: { label: string; value: number; suffix?: string }) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-xs uppercase tracking-[0.18em] text-white/60">
        <span>{label}</span>
        <span className="text-ion">{value}{suffix}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div className="h-full rounded-full bg-gradient-to-r from-ion via-nova to-plasma" initial={{ width: 0 }} whileInView={{ width: `${Math.min(value, 100)}%` }} viewport={{ once: true }} />
      </div>
    </div>
  );
}

export function Categories() {
  return (
    <section id="categories" className="relative z-10 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <p className="section-kicker">Spaceship Categories</p>
        <h2 className="section-title max-w-4xl">Choose a vessel class engineered for the next frontier.</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.article key={category.title} className="glass-panel group overflow-hidden p-5" initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} viewport={{ once: true }} whileHover={{ y: -8 }}>
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-ion/30 bg-ion/10 text-ion">
                    <Icon size={22} />
                  </span>
                  <span className="text-xs uppercase tracking-[0.22em] text-white/40">Class {index + 1}</span>
                </div>
                <ShipRender palette={category.palette} />
                <h3 className="font-display text-2xl font-bold text-white">{category.title}</h3>
                <p className="mt-3 min-h-20 text-sm leading-6 text-white/62">{category.description}</p>
                <div className="mt-6 space-y-4">
                  <StatBar label="Speed" value={category.speed} />
                  <StatBar label="Shield" value={category.shields} />
                  <StatBar label="Hyperdrive" value={category.hyperdrive * 10} suffix="" />
                </div>
                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-xs uppercase tracking-[0.18em] text-white/55">Crew capacity: {category.crew}</div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FleetGallery() {
  const [selected, setSelected] = useState<Ship | null>(null);

  return (
    <section id="fleet" className="relative z-10 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <p className="section-kicker">Spaceship Gallery</p>
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <h2 className="section-title max-w-4xl">Premium fleet showcase for starfighters, cargo vessels, yachts, racers, and explorers.</h2>
          <a href="#comparison" className="neon-button w-fit">Compare Ships</a>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          {ships.map((ship, index) => (
            <motion.button
              key={ship.id}
              onClick={() => setSelected(ship)}
              className="glass-panel group min-h-[25rem] overflow-hidden p-4 text-left lg:odd:mt-10"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.015 }}
            >
              <ShipRender palette={ship.palette} />
              <p className="text-xs uppercase tracking-[0.24em] text-ion">{ship.className}</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-white">{ship.name}</h3>
              <p className="mt-3 text-sm leading-6 text-white/62">{ship.description}</p>
            </motion.button>
          ))}
        </div>
      </div>
      <ShipModal ship={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function ShipModal({ ship, onClose }: { ship: Ship | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {ship && (
        <motion.div className="fixed inset-0 z-[70] grid place-items-center bg-black/70 p-4 backdrop-blur-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="glass-panel max-h-[90vh] w-full max-w-5xl overflow-auto p-5 sm:p-8" initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.96 }}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="section-kicker">{ship.category}</p>
                <h3 className="font-display text-4xl font-black text-white text-glow">{ship.name}</h3>
              </div>
              <button aria-label="Close modal" onClick={onClose} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white hover:text-ion">
                <X size={20} />
              </button>
            </div>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
              <ShipRender palette={ship.palette} variant="builder" />
              <div className="space-y-4">
                <p className="text-white/68">{ship.description}</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ["Speed", `${ship.speed}%`],
                    ["Weapons", ship.weapons],
                    ["Shields", `${ship.shields}%`],
                    ["Crew", ship.crew],
                    ["Hyperdrive", `Level ${ship.hyperdrive}`],
                    ["Fuel", ship.fuel]
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-ion/70">{label}</p>
                      <p className="mt-2 text-sm font-semibold text-white">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a href="#ship-builder" onClick={onClose} className="neon-button justify-center">Customize Ship</a>
                  <button className="neon-button neon-button-alt justify-center">Purchase</button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Comparison() {
  return (
    <section id="comparison" className="relative z-10 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <p className="section-kicker">Comparison System</p>
        <h2 className="section-title max-w-4xl">Fleet metrics at a glance for confident procurement.</h2>
        <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.055] shadow-glass backdrop-blur-2xl">
          <div className="grid min-w-[760px] grid-cols-6 border-b border-white/10 bg-white/[0.04] p-4 text-xs uppercase tracking-[0.2em] text-ion">
            <span>Ship</span><span>Class</span><span>Speed</span><span>Shields</span><span>Hyperdrive</span><span>Crew</span>
          </div>
          <div className="overflow-x-auto">
            {ships.map((ship) => (
              <div key={ship.id} className="grid min-w-[760px] grid-cols-6 items-center border-b border-white/10 p-4 text-sm text-white/72 last:border-b-0">
                <span className="font-display font-bold text-white">{ship.name}</span>
                <span>{ship.className}</span>
                <span>{ship.speed}%</span>
                <span>{ship.shields}%</span>
                <span>Level {ship.hyperdrive}</span>
                <span>{ship.crew}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
