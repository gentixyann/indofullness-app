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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="p-3 rounded-lg shadow-lg w-4/5 max-w-md border border-white bg-[#00000080] 
                      max-h-[95vh] flex flex-col"
      >
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

        {/* スクロール可能なコンテンツ */}
        <div className="scrollable overflow-y-auto max-h-[50vh] px-2 text-sm">
          <Image
            src="/images/modal/slide_image.svg"
            alt="スライド画像"
            width={300}
            height={50}
            className="w-[100%] mb-5"
          />
          <p className="mb-4">
            情報が溢れる外界と自己を切り離し、より意識の中心を自己へと集中させる瞑想の一種「マインドフルネス」。
          </p>
          <p className="mb-4">
            盛んにこの効果が叫ばれ10年以上、果たして世界はコスモによって変わっただろうか？
            <br />
            マインドフルネスがコスモを生み出すのなら、その逆のカオスを生み出す装置を開発しようと。
          </p>
          <p>
            「カオス理論」（「変数が少し変わるだけで結果が全く予想できなくなる」ような状態を指す）を用いてカオスの要素を紐解いていく。
          </p>
          <p>・構成要素は日常に溢れている</p>
          <p>・常に変化している</p>
          <p>・不規則である</p>
          <p>
            これらをヒントに、2つの方向性で映像と音楽を作成し、視覚、聴覚で体感してもらうためにこのサービスを開発した。ぜひ体感してほしい。
          </p>
        </div>

        {/* 閉じるボタン */}
        <div className="mt-4 flex justify-center">
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
    </div>
  );
}
