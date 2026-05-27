"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingGate() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1550);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-void"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(18px)" }}
          transition={{ duration: 0.7 }}
        >
          <motion.div initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
            <div className="mx-auto mb-8 h-28 w-28 rounded-full border border-ion/40 bg-ion/5 shadow-neon">
              <div className="h-full w-full animate-spin rounded-full border-t-2 border-plasma" />
            </div>
            <p className="font-display text-4xl font-black uppercase tracking-[0.22em] text-white text-glow sm:text-6xl">Space JacoB</p>
            <p className="mt-4 text-xs uppercase tracking-[0.5em] text-ion">Initializing galaxy systems</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
