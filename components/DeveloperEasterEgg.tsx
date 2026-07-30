"use client";

import { useEffect } from "react";

export default function DeveloperEasterEgg() {
  useEffect(() => {
    const styles = [
      "color: #d4a853; font-size: 18px; font-weight: bold; font-family: 'Cormorant Garamond', Georgia, serif;",
      "color: #e8a2b8; font-size: 13px; font-family: 'Plus Jakarta Sans', sans-serif;",
      "color: #10d9a4; font-size: 11px; font-family: 'Fira Code', monospace;",
      "color: #f0c97a; font-size: 12px; font-family: 'Plus Jakarta Sans', sans-serif;",
      "color: #c4637a; font-size: 13px; font-family: 'Plus Jakarta Sans', sans-serif;",
    ];

    const asciiArt = `
%c
  ╔══════════════════════════════════════════════════════════╗
  ║                                                          ║
  ║      Until Next Time, Parth.                             ║
  ║      — A tribute from the team who loved you best.       ║
  ║                                                          ║
  ╚══════════════════════════════════════════════════════════╝
%c
  Hey Parth 👋 — You actually opened DevTools. 
  Of course you did. Some things never change.

%c  parth.contributions.forEach(c => c.status = 'LEGENDARY');
  // No errors. As expected.

%c
  The fact that you're inspecting this page means 
  you're exactly the developer we always knew you were.
  Curious. Thorough. Impossibly good.
  
  We miss you already, and you haven't even left yet.

%c  — With love, bugs, and slightly passive-aggressive PR comments.
    Your team. ❤️
`;

    console.log(
      asciiArt,
      styles[0],
      styles[1],
      styles[2],
      styles[3],
      styles[4]
    );
  }, []);

  return null;
}
