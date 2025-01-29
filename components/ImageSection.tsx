// components/ImageSection.tsx

"use client";

import React from "react";
import Image from "next/image";

interface ImageSectionProps {
  imageSrc: string;
  width?: string;
  isVisible: boolean;
}

export default function ImageSection({
  imageSrc,
  width = "70%",
  isVisible,
}: ImageSectionProps) {
  return (
    <div style={{ width }}>
      <Image
        src={imageSrc}
        alt="gif"
        className={`rounded-md transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        width={500}
        height={500}
      />
    </div>
  );
}
