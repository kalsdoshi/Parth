"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function CelebrationFooter() {
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isRunning = useRef(false);

  const startShower = async () => {
    if (isRunning.current) return;
    isRunning.current = true;

    const confetti = (await import("canvas-confetti")).default;

    const burst = () => {
      // Left side drizzle
      confetti({
        particleCount: 4,
        angle: 80,
        spread: 40,
        origin: { x: Math.random() * 0.3, y: 0 },
        colors: ["#d4a853", "#f0c97a", "#e8a2b8", "#ffffff", "#c4637a"],
        startVelocity: 18,
        gravity: 0.55,
        ticks: 220,
        scalar: 0.85,
        drift: 0.4,
      });

      // Right side drizzle
      confetti({
        particleCount: 4,
        angle: 100,
        spread: 40,
        origin: { x: 0.7 + Math.random() * 0.3, y: 0 },
        colors: ["#c9a84c", "#e8c96a", "#e8a2b8", "#fdf3e0", "#c4637a"],
        startVelocity: 18,
        gravity: 0.55,
        ticks: 220,
        scalar: 0.85,
        drift: -0.4,
      });

      // Occasional center drop
      if (Math.random() > 0.6) {
        confetti({
          particleCount: 3,
          angle: 90,
          spread: 60,
          origin: { x: 0.3 + Math.random() * 0.4, y: 0 },
          colors: ["#d4a853", "#ffffff", "#e8a2b8"],
          startVelocity: 12,
          gravity: 0.45,
          ticks: 260,
          scalar: 0.7,
        });
      }
    };

    // First burst immediately
    burst();

    // Then repeat on a slow interval
    intervalRef.current = setInterval(burst, 900);
  };

  const stopShower = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    isRunning.current = false;
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startShower();
          } else {
            stopShower();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      stopShower();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="relative z-10 px-6 pt-20 pb-32 text-center max-w-xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      

      <h2
        className="font-display italic font-bold gold-shimmer mb-6 leading-tight"
        style={{ fontSize: "clamp(2.2rem, 10vw, 4rem)" }}
      >
        Fly High, Parth.
      </h2>

    


      <p className="text-dusty-rose/50 font-body text-sm leading-relaxed mb-12 max-w-sm mx-auto">
        Thank you for all the Drama, the fun, the perfectly timed dark humour,
        and for always showing up. 
      </p>

      {/* Farewell code snippet */}
      <div
        className="text-left rounded-xl p-5 mb-10 mx-auto max-w-xs"
        style={{
          background: "rgba(8,5,12,0.85)",
          border: "1px solid rgba(16,217,164,0.12)",
        }}
      >
        <p className="font-mono text-sm leading-loose">
          <span className="text-white/20">{"// farewell"}</span>
          <br />
          <span className="text-emerald-glow">const</span>{" "}
          <span className="text-champagne-light">parth</span>{" "}
          <span className="text-white/30">= {"{"}</span>
          <br />
          <span className="text-white/25">&nbsp;&nbsp;status:</span>{" "}
          <span className="text-dusty-rose">&apos;legendary&apos;</span>
          <span className="text-white/25">,</span>
          <br />
          <span className="text-white/25">&nbsp;&nbsp;missingYou:</span>{" "}
          <span className="text-emerald-glow">true</span>
          <span className="text-white/25">,</span>
          <br />
          <span className="text-white/30">{"}"}</span>
        </p>
      </div>

      <div className="flex items-center justify-center gap-2 text-white/15 text-xs font-mono">
        <Heart className="w-3 h-3 text-rose-glow/30 animate-pulse" />
        <span>with eternal affection, Kunal & Aadil</span>
        <Heart className="w-3 h-3 text-rose-glow/30 animate-pulse" />
      </div>
    </motion.section>
  );
}
