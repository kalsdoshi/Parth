"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

export default function HeroHeader() {
  return (
    <motion.section
      className="relative z-10 flex flex-col items-center justify-center text-center px-5 pt-24 pb-20 min-h-[100svh]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* ── Floating Badge ── */}
      <motion.div variants={itemVariants} className="mb-8">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] sm:text-xs font-mono tracking-widest uppercase badge-glow"
          style={{
            background: "rgba(212,168,83,0.07)",
            border: "1px solid rgba(212,168,83,0.32)",
          }}
        >
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-glow opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-glow" />
          </span>
          <span className="gold-shimmer font-semibold">
            PRODUCTION RELEASE &bull; FAREWELL
          </span>
        </div>
      </motion.div>

      {/* ── Main Title ── */}
      <motion.div variants={itemVariants} className="mb-5 px-2">
        <h1
          className="font-display italic font-bold leading-[1.05] gold-shimmer"
          style={{
            fontSize: "clamp(2.8rem, 12vw, 7rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Until Next
          <br />
          Time, Parth.
        </h1>
      </motion.div>

      {/* ── Subtitle ── */}
      <motion.div variants={itemVariants} className="mb-8 max-w-sm px-2">
        <p
          className="font-body leading-relaxed text-dusty-rose/75"
          style={{ fontSize: "clamp(0.9rem, 3.5vw, 1.1rem)" }}
        >
          A chic, emotional, and slightly chaotic tribute
          <br className="hidden sm:block" />
          from your team.
        </p>
      </motion.div>

      {/* ── Decorative divider ── */}
      <motion.div
        variants={itemVariants}
        className="w-16 sm:w-24 h-px mb-8"
        style={{
          background: "linear-gradient(90deg, transparent, #d4a853, transparent)",
        }}
      />

      {/* ── Scroll hint ── */}
      <motion.div
        variants={itemVariants}
        className="flex items-center gap-2 text-[10px] sm:text-xs text-white/25 font-mono tracking-wider uppercase"
      >
        <Sparkles className="w-3 h-3 text-champagne/50" />
        <span>Scroll to explore</span>
        <Sparkles className="w-3 h-3 text-champagne/50" />
      </motion.div>

      {/* ── Animated scroll arrow ── */}
      <motion.div
        variants={itemVariants}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-20">
          <path
            d="M6 9l6 6 6-6"
            stroke="#d4a853"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </motion.section>
  );
}
