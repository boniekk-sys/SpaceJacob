"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  ["2500+", "Ships Delivered"],
  ["120", "Galactic Systems Served"],
  ["35", "Years of Innovation"],
  ["98%", "Client Satisfaction"]
];

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const numeric = Number.parseInt(value, 10);
  const count = useMotionValue(0);
  const spring = useSpring(count, { duration: 1800, bounce: 0 });

  useEffect(() => {
    if (inView) count.set(numeric);
  }, [count, inView, numeric]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (!ref.current) return;
      ref.current.textContent = `${Math.round(latest)}${value.includes("+") ? "+" : value.includes("%") ? "%" : ""}`;
    });
  }, [spring, value]);

  return <span ref={ref}>0</span>;
}

export function About() {
  return (
    <section id="about" className="relative z-10 px-4 py-24 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div className="glass-panel p-8 sm:p-10" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="section-kicker">About Space JacoB</p>
          <h2 className="section-title">A galaxy-scale engineering corporation with starship DNA.</h2>
          <p className="mt-6 text-base leading-8 text-white/72">
            Space JacoB is one of the most advanced spaceship corporations in the galaxy, specializing in luxury spacecraft, military ships, cargo ships, racing ships, exploration vessels, and custom modifications.
            With decades of innovation and interstellar engineering expertise, our orbital foundries turn ambitious missions into precision-built vessels.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Luxury spacecraft", "Military ships", "Cargo ships", "Racing ships", "Exploration vessels", "Custom modifications"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm uppercase tracking-[0.16em] text-white/70">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map(([value, label], index) => (
            <motion.div key={label} className="glass-panel holographic-card p-6" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} viewport={{ once: true }}>
              <p className="font-display text-4xl font-black text-white text-glow"><Counter value={value} /></p>
              <p className="mt-3 text-xs uppercase tracking-[0.22em] text-ion/80">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
