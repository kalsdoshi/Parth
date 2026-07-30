"use client";

import { motion } from "framer-motion";
import { Video, Play } from "lucide-react";

export default function VideoStage() {
  return (
    <motion.section
      className="relative z-10 px-4 sm:px-6 py-10 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Section Label */}
      <div className="flex items-center gap-3 mb-8">
        <div className="section-divider flex-1" />
        <span className="text-xs font-mono text-champagne/60 tracking-widest uppercase">
          video tribute
        </span>
        <div className="section-divider flex-1" />
      </div>

      {/* Card wrapper */}
      <div className="glass-card p-3 sm:p-4"
        style={{
          boxShadow: "0 20px 80px rgba(0,0,0,0.6), 0 0 40px rgba(212,168,83,0.08)"
        }}
      >
        {/* Video label bar */}
        <div className="flex items-center gap-3 px-3 py-2.5 mb-3 rounded-lg"
          style={{ background: "rgba(212,168,83,0.06)", border: "1px solid rgba(212,168,83,0.12)" }}
        >
          <Video className="w-4 h-4 text-champagne/60" />
          <span className="font-mono text-xs text-champagne/60 tracking-wider uppercase">
            farewell_tribute_parth_final_v3_ACTUALFINAL.mp4
          </span>
          <span className="ml-auto text-xs text-white/20 font-mono">HD • 16:9</span>
        </div>

        {/* 16:9 video frame */}
        <div className="video-frame">
          {/* Placeholder content when no video is embedded */}
          <div className="absolute inset-0 flex flex-col items-center justify-center"
            style={{
              background: "linear-gradient(135deg, rgba(20,10,30,0.97) 0%, rgba(40,18,50,0.97) 50%, rgba(20,10,30,0.97) 100%)"
            }}
          >
            {/* Decorative grid lines */}
            <div className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `linear-gradient(rgba(212,168,83,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,0.5) 1px, transparent 1px)`,
                backgroundSize: "40px 40px"
              }}
            />

            <motion.div
              className="relative flex flex-col items-center gap-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 }}
            >
              {/* Play button */}
              <motion.div
                className="w-20 h-20 rounded-full flex items-center justify-center cursor-pointer"
                style={{
                  background: "rgba(212,168,83,0.12)",
                  border: "2px solid rgba(212,168,83,0.4)",
                  boxShadow: "0 0 40px rgba(212,168,83,0.2)"
                }}
                whileHover={{ scale: 1.08, boxShadow: "0 0 60px rgba(212,168,83,0.4)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Play className="w-8 h-8 text-champagne ml-1" />
              </motion.div>

              <div className="text-center px-6">
                <p className="font-display text-3xl italic font-semibold gold-shimmer mb-2">
                  A Message From the Team
                </p>
                <p className="text-sm text-dusty-rose/60 font-body">
                  Drop your video file here — or embed a YouTube / Loom link
                  <br />
                  in <code className="font-mono text-emerald-glow/70 text-xs">VideoStage.tsx</code>
                </p>
              </div>
            </motion.div>
          </div>

          {/* ─── To embed your video, replace the div above with: ───────────
          <iframe
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            className="absolute inset-0 w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          ──────────────────────────────────────────────────────────── */}
        </div>

        {/* Below-video meta */}
        <div className="flex items-center gap-4 mt-3 px-1">
          <span className="text-xs text-white/25 font-mono">
            Recorded with love • Team farewell session
          </span>
          <div className="ml-auto flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-glow animate-pulse" />
            <span className="text-xs text-rose-glow/60 font-mono">LIVE PREMIERE</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
