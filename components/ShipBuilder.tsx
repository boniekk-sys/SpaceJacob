"use client";

import { motion } from "framer-motion";
import { Cpu, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { builderOptions } from "@/data/ships";
import { ShipRender } from "./ShipRender";

export function ShipBuilder() {
  const [color, setColor] = useState(builderOptions.colors[0].value);
  const [weapon, setWeapon] = useState(builderOptions.weapons[0]);
  const [engine, setEngine] = useState(builderOptions.engines[0]);
  const [shield, setShield] = useState(builderOptions.shields[0]);
  const [wing, setWing] = useState(builderOptions.wings[0]);
  const [cockpit, setCockpit] = useState(builderOptions.cockpits[0]);
  const [power, setPower] = useState(72);
  const [armor, setArmor] = useState(64);

  const palette = useMemo<[string, string, string]>(() => [color, weapon.includes("Plasma") ? "#ff2bd6" : "#8f4dff", engine.includes("Quantum") ? "#37ffb5" : "#00e5ff"], [color, engine, weapon]);

  return (
    <section id="ship-builder" className="relative z-10 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <p className="section-kicker">Ship Builder</p>
        <h2 className="section-title max-w-4xl">Customize a live holographic vessel in the Space JacoB garage.</h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_.85fr]">
          <motion.div className="glass-panel p-5 sm:p-8" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-black/20">
              <ShipRender palette={palette} variant="builder" />
              <div className="absolute left-5 top-5 rounded-full border border-ion/30 bg-ion/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-ion">Live Preview</div>
              <div className="absolute bottom-5 right-5 rounded-full border border-plasma/30 bg-plasma/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-plasma">Garage Sync</div>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {[
                ["Output", `${power + 18}%`],
                ["Armor", `${armor}%`],
                ["Signature", cockpit]
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">{label}</p>
                  <p className="mt-2 font-display text-lg font-bold text-white">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div className="glass-panel p-5 sm:p-8" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl border border-ion/30 bg-ion/10 text-ion"><SlidersHorizontal size={20} /></span>
              <h3 className="font-display text-2xl font-bold text-white">Customization Console</h3>
            </div>
            <div className="space-y-6">
              <div>
                <label className="control-label">Color customization</label>
                <div className="mt-3 flex flex-wrap gap-3">
                  {builderOptions.colors.map((item) => (
                    <button
                      key={item.value}
                      onClick={() => setColor(item.value)}
                      aria-label={item.label}
                      className={`h-11 w-11 rounded-full border-2 transition ${color === item.value ? "border-white scale-110" : "border-white/20"}`}
                      style={{ background: item.value, boxShadow: `0 0 24px ${item.value}88` }}
                    />
                  ))}
                </div>
              </div>
              <SelectControl label="Weapon upgrades" value={weapon} onChange={setWeapon} options={builderOptions.weapons} />
              <SelectControl label="Engine upgrades" value={engine} onChange={setEngine} options={builderOptions.engines} />
              <SelectControl label="Shield upgrades" value={shield} onChange={setShield} options={builderOptions.shields} />
              <SelectControl label="Wing modifications" value={wing} onChange={setWing} options={builderOptions.wings} />
              <SelectControl label="Cockpit selection" value={cockpit} onChange={setCockpit} options={builderOptions.cockpits} />
              <RangeControl label="Engine power" value={power} onChange={setPower} />
              <RangeControl label="Shield density" value={armor} onChange={setArmor} />
              <button className="neon-button w-full justify-center"><Cpu size={18} /> Save Configuration</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SelectControl({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: string[] }) {
  return (
    <div>
      <label className="control-label">{label}</label>
      <select value={value} onChange={(event) => onChange(event.target.value)} className="mt-3 w-full rounded-2xl border border-ion/20 bg-[#071024] px-4 py-3 text-sm text-white outline-none transition focus:border-ion focus:shadow-neon">
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </div>
  );
}

function RangeControl({ label, value, onChange }: { label: string; value: number; onChange: (value: number) => void }) {
  return (
    <div>
      <div className="flex justify-between">
        <label className="control-label">{label}</label>
        <span className="text-xs uppercase tracking-[0.2em] text-ion">{value}%</span>
      </div>
      <input value={value} onChange={(event) => onChange(Number(event.target.value))} min="0" max="100" type="range" className="mt-3 w-full accent-cyan-300" />
    </div>
  );
}
