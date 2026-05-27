"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Rocket, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative z-10 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title max-w-4xl">Transmit your mission brief to the Poznan command showroom.</h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
          <div className="grid gap-4">
            {[
              [MapPin, "Address", "Poznan Stary Rynek 88"],
              [Phone, "Phone", "+48 234 567 890"],
              [Mail, "Email", "contact@spacejacob.space"]
            ].map(([Icon, label, value]) => {
              const TypedIcon = Icon as typeof MapPin;
              return (
                <motion.div key={String(label)} className="glass-panel holographic-card p-6" whileHover={{ y: -6 }}>
                  <TypedIcon className="text-ion" size={26} />
                  <p className="mt-5 text-xs uppercase tracking-[0.24em] text-white/45">{String(label)}</p>
                  <p className="mt-2 font-display text-xl font-bold text-white">{String(value)}</p>
                </motion.div>
              );
            })}
          </div>
          <motion.form className="glass-panel relative overflow-hidden p-6 sm:p-8" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="absolute inset-0 opacity-30 galaxy-grid" />
            <div className="relative grid gap-4 sm:grid-cols-2">
              <input className="neon-input" placeholder="Name" />
              <input className="neon-input" placeholder="Company" />
              <input className="neon-input sm:col-span-2" placeholder="Email" type="email" />
              <textarea className="neon-input min-h-36 resize-none sm:col-span-2" placeholder="Mission requirements" />
              <button type="button" className="neon-button w-full justify-center sm:col-span-2">
                <Send size={18} />
                Send Transmission
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-white/10 px-4 py-12 sm:px-6">
      <div className="absolute inset-0 opacity-40">
        <div className="stars-layer" />
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-full border border-ion/40 bg-ion/10 text-ion shadow-neon"><Rocket /></span>
          <div>
            <p className="font-display text-xl font-black uppercase tracking-[0.16em] text-white">Space JacoB</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/45">Beyond The Stars</p>
          </div>
        </a>
        <div className="flex flex-wrap gap-4 text-sm uppercase tracking-[0.18em] text-white/55">
          {["Home", "Fleet", "Categories", "Ship Builder", "About", "Contact"].map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="hover:text-ion">{link}</a>
          ))}
        </div>
        <div className="flex items-center gap-3 text-white/70">
          {[Instagram, Linkedin, Github].map((Icon, index) => (
            <a key={index} href="#home" aria-label="Social link" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 hover:border-ion/50 hover:text-ion">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
      <p className="relative mx-auto mt-8 max-w-7xl text-xs uppercase tracking-[0.22em] text-white/35">Copyright 2026 Space JacoB Corporation. All orbital rights reserved.</p>
    </footer>
  );
}
