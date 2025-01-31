"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsClosing(true);

    // 1.5秒後にモーダルを完全に削除
    setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 1500); // 1500ms のフェードアウト
  };

  // モーダルが完全に非表示になったら削除
  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
      style={{ transition: "opacity 1.5s ease-in-out" }} // 0.3秒のフェードアウト
    >
      <div
        className={`p-3 rounded-lg shadow-lg w-4/5 max-w-md border border-white bg-[#00000080] 
                      max-h-[95vh] flex flex-col transition-transform ${
                        isClosing
                          ? "scale-90 opacity-0"
                          : "scale-100 opacity-100"
                      }`}
        style={{
          transition: "opacity 31.5s ease-in-out, transform 1.5s ease-in-out",
        }}
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
        <div className="my-4 w-full flex justify-center">
          <button
            className="
                       w-[90%]
                       px-4
                       py-2
                       rounded-full
                       bg-[#D94399CC]
                       border
                       border-white
                       backdrop-blur-sm
                       opacity-0.5
                       flex
                       items-center
                       justify-center
                       "
            onClick={handleClose}
          >
            <span
              className="
                       text-white
                       font-zen-kaku-gothic-new
                       text-base
                       font-bold
                       leading-[23.17px]
                       text-left"
            >
              マ!?インドフルネスを始める
            </span>
            <Image
              width={30}
              height={30}
              src="/images/arrow_forward.svg"
              alt="矢印"
              className="ml-2"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
