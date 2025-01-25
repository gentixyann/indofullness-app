// components/ImageSection.tsx

"use client";

import React from "react";
import Image from "next/image";

interface ImageSectionProps {
  imageSrc: string;
  isVisible: boolean; // 表示・非表示の状態を管理
  isFullWidth: boolean; // 横幅を管理
}

export default function ImageSection({
  imageSrc,
  isVisible,
  isFullWidth,
}: ImageSectionProps) {
  return (
    <div
      className={`${
        isFullWidth ? "w-full" : "w-[30%]"
      } mx-auto mb-4 flex justify-center`}
    >
      <Image
        src={imageSrc}
        alt="Related Image"
        width={300}
        height={200}
        className={`rounded-md transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
