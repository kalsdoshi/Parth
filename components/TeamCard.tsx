"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TeamMember } from "@/lib/teamData";

export default function TeamSection({ member }: { member: TeamMember }) {
  return (
    <section className="relative w-full">

      {/* ── FULL WIDTH PHOTO ── */}
      <div className="relative w-full" style={{ height: "60svh" }}>
        <Image
          src={member.photoUrl}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes="100vw"
          unoptimized
        />
        {/* Bottom fade into background */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            height: "55%",
            background:
              "linear-gradient(to top, #0b080e 0%, rgba(11,8,14,0.6) 45%, transparent 100%)",
          }}
        />
      </div>

      {/* ── MESSAGE + NAME — fully centered ── */}
      <motion.div
        className="flex flex-col items-center text-center px-8 pt-8 pb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Message */}
        <p
          className="font-display italic text-white/75 leading-[1.75] max-w-[34ch]"
          style={{ fontSize: "clamp(1.05rem, 4.2vw, 1.3rem)" }}
        >
          {member.message}
        </p>

        {/* Attribution — same font, same style, slightly muted */}
        <p
          className="font-display italic gold-shimmer mt-5"
          style={{ fontSize: "clamp(1rem, 4vw, 1.2rem)" }}
        >
          — {member.name}
        </p>
      </motion.div>

    </section>
  );
}
