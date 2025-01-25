// components/VideoSection.tsx

"use client";

import React from "react";
import ReactPlayer from "react-player";

interface VideoSectionProps {
  videoUrl: string;
  isFullWidth: boolean; // 横幅を管理
}

export default function VideoSection({
  videoUrl,
  isFullWidth,
}: VideoSectionProps) {
  return (
    <div
      className={`${
        isFullWidth ? "w-full" : "w-[70%]"
      } mx-auto mb-4 rounded-md overflow-hidden`}
    >
      <ReactPlayer url={videoUrl} controls playing width="100%" height="100%" />
    </div>
  );
}
