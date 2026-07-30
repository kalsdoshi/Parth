"use client";

import AmbientBackground from "@/components/AmbientBackground";
import DeveloperConsole from "@/components/DeveloperConsole";
import TeamMessagesFeed from "@/components/TeamMessagesFeed";
import VideoSection from "@/components/VideoSection";
import CelebrationFooter from "@/components/CelebrationFooter";
import DeveloperEasterEgg from "@/components/DeveloperEasterEgg";

export default function Home() {
  return (
    <main className="relative min-h-[100dvh] overflow-x-hidden">
      <AmbientBackground />
      <DeveloperEasterEgg />

      <div className="relative z-10">
        {/* 1. Dev Console — landing page (auto-runs on load) */}
        <DeveloperConsole />

        {/* 2. Team — one person per section */}
        <TeamMessagesFeed />

        {/* 3. Autoplay video */}
        <VideoSection />

        {/* 4. Ambient confetti farewell */}
        <CelebrationFooter />
      </div>
    </main>
  );
}
