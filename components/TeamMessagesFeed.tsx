"use client";

import { motion } from "framer-motion";
import { teamMembers } from "@/lib/teamData";
import TeamSection from "./TeamCard";

export default function TeamMessagesFeed() {
  return (
    <div className="relative z-10 w-full">
      {/* ── Section intro ── */}
      <motion.div
        className="text-center px-6 pt-16 pb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="section-divider flex-1" />
          <span className="text-[10px] font-mono text-champagne/50 tracking-widest uppercase">
            from the team
          </span>
          <div className="section-divider flex-1" />
        </div>
        <h2
          className="font-display italic font-bold gold-shimmer"
          style={{ fontSize: "clamp(2rem, 9vw, 3.5rem)" }}
        >
          What They Said
        </h2>
      </motion.div>

      {/* ── One section per person ── */}
      {teamMembers.map((member, i) => (
        <div key={member.id}>
          <TeamSection member={member} />

          {/* Hairline between people */}
          {i < teamMembers.length - 1 && (
            <div
              className="mx-auto my-2"
              style={{
                height: 1,
                width: "40%",
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
