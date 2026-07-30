"use client";

import { motion } from "framer-motion";

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Primary rose orb */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(196,99,122,0.16) 0%, transparent 70%)",
          filter: "blur(80px)",
          top: -120,
          right: -120,
        }}
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 40, -20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Gold orb */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 450,
          height: 450,
          background:
            "radial-gradient(circle, rgba(212,168,83,0.11) 0%, transparent 70%)",
          filter: "blur(80px)",
          bottom: 200,
          left: -100,
        }}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -60, 20, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center purple orb */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 350,
          height: 350,
          background:
            "radial-gradient(circle, rgba(80,20,70,0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom rose accent */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 300,
          height: 300,
          background:
            "radial-gradient(circle, rgba(140,40,80,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
          bottom: 0,
          right: "20%",
        }}
        animate={{
          x: [0, -20, 30, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "150px",
        }}
      />
    </div>
  );
}
