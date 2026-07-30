"use client";

import { useEffect, useRef } from "react";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full" style={{ height: "100svh" }}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/video.mp4"
        muted
        playsInline
        loop
        preload="metadata"
      />
    </section>
  );
}
