"use client";

import React, { useRef } from "react";
import Image from "next/image";

interface ImageSectionProps {
  imageSrc: string;
  width?: string;
  isVisible: boolean;
  className?: string;
  mp3File?: string;
}

export default function ImageSection({
  imageSrc,
  width = "70%",
  isVisible,
  className = "",
  mp3File,
}: ImageSectionProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayAudio = () => {
    if (mp3File && audioRef.current) {
      // 音声が再生中なら一旦停止、なければ再生
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  return (
    <div
      className={`${className} relative cursor-pointer`}
      style={{ width }}
      onClick={handlePlayAudio}
    >
      <Image
        src={imageSrc}
        alt="gif"
        className={`rounded-md transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        width={500}
        height={500}
      />
      {mp3File && <audio ref={audioRef} src={mp3File} preload="auto" />}
    </div>
  );
}
