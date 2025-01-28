"use client";

import React, { useState, useEffect, useCallback } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import videoUrls from "../public/json/videoUrls.json";

const overlayImage = "/images/tv_frame.png";
const frogImage = "/images/frog.gif";

export default function Page() {
  const [selectedVideos, setSelectedVideos] = useState<string[]>([]);
  const [imageVisibility, setImageVisibility] = useState<boolean[]>([
    true,
    true,
    true,
  ]);

  // 🎯 ボタンで呼び出せるように useCallback でラップ
  const fetchRandomVideos = useCallback(() => {
    const shuffled = [...videoUrls].sort(() => Math.random() - 0.5);
    setSelectedVideos(shuffled.slice(0, 3));
    setImageVisibility([true, true, true]); // 初期状態リセット
  }, []);

  // 🎯 初回レンダリング時に動画を取得
  useEffect(() => {
    fetchRandomVideos();
  }, [fetchRandomVideos]);

  useEffect(() => {
    if (selectedVideos.length === 0) return; // データがないときは実行しない

    const intervals = selectedVideos.map((_, index) => {
      return setInterval(() => {
        setImageVisibility((prev) => {
          const updated = [...prev];
          updated[index] = !updated[index];
          return updated;
        });
      }, Math.random() * 4000 + 1000);
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, [selectedVideos]);

  return (
    <div className="flex flex-col items-center max-w-screen-sm mx-auto p-4">
      {/* ロゴの表示 */}
      <div className="my-12">
        <Image
          src="/images/logo.svg"
          alt="アプリロゴ"
          width={300}
          height={50}
          priority
        />
      </div>

      {/* ボタン */}
      <button
        onClick={fetchRandomVideos}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4"
      >
        再生する
      </button>

      {/* 各動画と画像を個別に配置 */}
      <div className="w-full flex flex-col gap-6">
        {/* 1番目のセット: 動画右寄せ */}
        {selectedVideos.length > 0 && (
          <div className="flex justify-end">
            <div className="relative aspect-video w-[70%]">
              <ReactPlayer
                url={selectedVideos[0]}
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
          </div>
        )}

        {/* 2番目のセット: 左右に画像 */}
        <div className="flex justify-between items-end">
          <div className="w-[80%]">
            <Image
              src="/images/horse.gif"
              alt="horse"
              className={`rounded-md transition-opacity duration-500 ${
                imageVisibility[0] ? "opacity-100" : "opacity-0"
              }`}
              width={500}
              height={500}
            />
          </div>

          <div className="w-[50%]">
            <Image
              src="/images/potate.gif"
              alt="horse"
              className={`rounded-md transition-opacity duration-500 ${
                imageVisibility[1] ? "opacity-100" : "opacity-0"
              }`}
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* 3番目のセット: 動画左寄せ */}
        {selectedVideos.length > 1 && (
          <div className="flex justify-start">
            <div className="relative aspect-video w-[70%]">
              <ReactPlayer
                url={selectedVideos[1]}
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
          </div>
        )}

        {/* 4番目のセット: 画像右寄せ */}
        <div className="flex justify-end">
          <div className="w-[30%]">
            <Image
              src={frogImage}
              alt="frogImage"
              className={`rounded-md transition-opacity duration-500 ${
                imageVisibility[2] ? "opacity-100" : "opacity-0"
              }`}
              width={300}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
