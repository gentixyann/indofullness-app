"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!isVisible) return null;

  return (
    <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="p-3 rounded-lg shadow-lg w-3/4 max-w-md border border-white bg-[#00000080]">
        <Image
          width={100}
          height={100}
          src="/images/modal/title.svg"
          alt="title"
          className="w-full mb-5"
        />
        <div className="mb-5 flex justify-center">
          <Image
            src="/images/logo.svg"
            alt="アプリロゴ"
            width={300}
            height={50}
            className="w-[70%]"
          />
        </div>
        <div className="font-bold text-xl mb-5">
          <h2>必要なのはコスモではなく</h2>
          <h2>カオスなのではないか</h2>
        </div>
        <Image
          src="/images/modal/slide_image.svg"
          alt="スライド画像"
          width={300}
          height={50}
          className="w-[100%] mb-5"
        />

        <p className="mb-4">このサイトへようこそ！</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={() => {
            setIsVisible(false);
            onClose();
          }}
        >
          閉じる
        </button>
      </div>
    </div>
  );
}
