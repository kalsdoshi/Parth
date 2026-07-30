"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, RotateCcw } from "lucide-react";
import { consoleLines } from "@/lib/teamData";

interface LogLine {
  text: string;
  type: string;
}

const lineColorMap: Record<string, string> = {
  cmd:     "text-white/75",
  success: "text-emerald-glow",
  warning: "text-yellow-300",
  error:   "text-dusty-rose",
  final:   "text-champagne-light font-semibold",
};

const promptSymbol: Record<string, string> = {
  cmd:     ">",
  success: " ",
  warning: "!",
  error:   "✗",
  final:   "★",
};

export default function DeveloperConsole() {
  const [displayedLines, setDisplayedLines] = useState<LogLine[]>([]);
  const [isRunning, setIsRunning]           = useState(false);
  const [isComplete, setIsComplete]         = useState(false);
  const [showScroll, setShowScroll]         = useState(false);

  const scrollRef  = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  const runCompile = (auto = false) => {
    clearAllTimeouts();
    setDisplayedLines([]);
    setIsRunning(true);
    setIsComplete(false);
    setShowScroll(false);

    consoleLines.forEach((line, i) => {
      const t = setTimeout(() => {
        setDisplayedLines(prev => [...prev, { text: line.text, type: line.type }]);
        if (i === consoleLines.length - 1) {
          setIsRunning(false);
          setIsComplete(true);
          // Delay scroll hint a beat after last line
          timeoutsRef.current.push(setTimeout(() => setShowScroll(true), 900));
        }
      }, line.delay + (auto ? 600 : 200));   // slight delay on auto-start
      timeoutsRef.current.push(t);
    });
  };

  // Auto-run on mount
  useEffect(() => {
    runCompile(true);
    return () => clearAllTimeouts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-scroll terminal output
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [displayedLines]);

  return (
    <section className="relative z-10 min-h-[100svh] flex flex-col items-center justify-center px-4 py-12">

      {/* ── Badge ── */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-6"
      >
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-mono tracking-widest uppercase badge-glow"
          style={{
            background: "rgba(212,168,83,0.07)",
            border: "1px solid rgba(212,168,83,0.3)",
          }}
        >
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-glow opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-glow" />
          </span>
          <span className="gold-shimmer font-semibold">PRODUCTION RELEASE · FAREWELL</span>
        </div>
      </motion.div>

      {/* ── Title ── */}
      <motion.h1
        className="font-display italic font-bold gold-shimmer text-center mb-8 leading-none"
        style={{ fontSize: "clamp(2.2rem, 9vw, 5rem)" }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
      >
        Until Next Time, Parth.
      </motion.h1>

      {/* ── Terminal card ── */}
      <motion.div
        className="w-full max-w-2xl"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 22 }}
      >
        <div
          className="overflow-hidden rounded-2xl"
          style={{
            background: "rgba(10,6,16,0.9)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(212,168,83,0.2)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)",
          }}
        >
          {/* Traffic lights */}
          <div
            className="flex items-center gap-2 px-5 py-4"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
          >
            <span className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-[0_0_6px_rgba(255,95,87,0.7)]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e] shadow-[0_0_6px_rgba(254,188,46,0.7)]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840] shadow-[0_0_6px_rgba(40,200,64,0.7)]" />
            <div className="flex-1 text-center -ml-7">
              <span className="font-mono text-xs text-white/25 tracking-wider">
                parth_farewell.ts
              </span>
            </div>
            <Terminal className="w-3.5 h-3.5 text-white/15" />
          </div>

          {/* Output area */}
          <div
            ref={scrollRef}
            className="terminal-scrollbar overflow-y-auto px-5 py-5 font-mono text-sm"
            style={{
              minHeight: 240,
              maxHeight: "38svh",
              background: "rgba(6,4,10,0.85)",
            }}
          >
            {displayedLines.length === 0 && (
              <span className="text-white/20 cursor-blink text-sm">&nbsp;</span>
            )}

            <AnimatePresence>
              {displayedLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.18 }}
                  className={`leading-relaxed mb-0.5 ${lineColorMap[line.type] ?? "text-white/70"}`}
                >
                  <span className="text-white/15 mr-2 select-none">
                    {promptSymbol[line.type] ?? " "}
                  </span>
                  {line.text}
                </motion.div>
              ))}
            </AnimatePresence>

            {isRunning && (
              <div className="text-white/20 cursor-blink mt-1 font-mono">&nbsp;</div>
            )}
          </div>

          {/* Footer bar */}
          <div
            className="flex items-center justify-between px-5 py-3"
            style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
          >
            <span className="text-[10px] text-white/20 font-mono">
              {isRunning
                ? "running..."
                : isComplete
                ? "exit code: 0"
                : "ready"}
            </span>

            {/* Replay button — only shown after complete */}
            <AnimatePresence>
              {isComplete && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => runCompile(false)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-[11px] transition-colors"
                  style={{
                    color: "rgba(212,168,83,0.5)",
                    border: "1px solid rgba(212,168,83,0.15)",
                  }}
                  whileHover={{ color: "#d4a853", borderColor: "rgba(212,168,83,0.4)" }}
                >
                  <RotateCcw className="w-3 h-3" />
                  replay
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* ── Scroll hint — appears after animation finishes ── */}
      <AnimatePresence>
        {showScroll && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-10 flex flex-col items-center gap-2"
          >
            <p className="text-[11px] font-mono text-white/25 tracking-widest uppercase">
              scroll to continue
            </p>
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-20">
                <path d="M6 9l6 6 6-6" stroke="#d4a853" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
