// components/VideoSection.tsx

"use client";

import React from "react";
import ReactPlayer from "react-player";
import Image from "next/image";

interface VideoSectionProps {
  videoUrl: string;
  width?: string;
}

const overlayImage = "/images/tv_frame.png";

export default function VideoSection({
  videoUrl,
  width = "70%",
}: VideoSectionProps) {
  return (
    <div className="relative aspect-video" style={{ width }}>
      <ReactPlayer
        url={videoUrl}
        controls
        playing
        width="100%"
        height="100%"
        className="relative z-10"
      />
      <Image
        src={overlayImage}
        alt="Overlay"
        className="absolute inset-0 z-20 pointer-events-none"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
