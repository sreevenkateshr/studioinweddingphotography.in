"use client"; // ✅ Required for autoplay + interactivity

import React, { useRef, useState } from "react";

export function FullScreenVideoWithOverlay({
  src,
  overlayColor = "#000000",
  overlayOpacity = 0.24,
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) video.pause();
      else video.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
        }}
      />

      {/* Play / Pause Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={togglePlay}
          className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center shadow-lg hover:scale-105 transition"
        >
          {isPlaying ? (
            // Pause Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-black"
            >
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            // Play Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-black"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <FullScreenVideoWithOverlay
      src="https://weddingbellsstories.com/video_library/three.mp4"
      overlayColor="#000000"
      overlayOpacity={0.24}
    />
  );
}
