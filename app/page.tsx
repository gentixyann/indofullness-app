"use client";

import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import videoUrls from "../public/json/videoUrls.json";

const frogImage = "/images/frog.gif";

export default function Page() {
  const [selectedVideos, setSelectedVideos] = useState<string[]>([]); // 動画URLリスト
  const [imageVisibility, setImageVisibility] = useState<boolean[]>([]); // 画像の表示状態

  // ランダムで5つの動画URLを取得
  const fetchRandomVideos = () => {
    const shuffled = [...videoUrls].sort(() => Math.random() - 0.5);
    const randomVideos = shuffled.slice(0, 5); // 上位5つを選択
    setSelectedVideos(randomVideos);
    setImageVisibility(Array(randomVideos.length).fill(true)); // 初期状態ではすべて表示
  };

  // ランダムに点滅させる
  useEffect(() => {
    if (selectedVideos.length === 0) return;

    const intervals = selectedVideos.map((_, index) => {
      return setInterval(() => {
        setImageVisibility((prev) => {
          const updated = [...prev];
          updated[index] = !updated[index]; // 状態をトグル
          return updated;
        });
      }, Math.random() * 4000 + 1000); // 1秒から5秒間隔
    });

    return () => {
      intervals.forEach(clearInterval); // コンポーネントがアンマウントされたらクリーンアップ
    };
  }, [selectedVideos]);

  return (
    <div className="flex flex-col items-center p-4">
      {/* Imageコンポーネントでロゴ画像を表示 */}
      <div className="mb-4">
        <Image
          src="/images/logo.svg"
          alt="アプリロゴ"
          width={200}
          height={50}
          priority
        />
      </div>
      <button
        onClick={fetchRandomVideos}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4"
      >
        再生する
      </button>

      {/* 動画と画像の表示 */}
      <div className="w-full max-w-3xl">
        {selectedVideos.map((url, index) => {
          const isLeftVideo = index % 2 === 0; // 偶数は動画が左、奇数は画像が左
          return (
            <div key={index} className="flex flex-row mb-4">
              {/* 左側 (動画または画像) */}
              <div
                className={`${
                  isLeftVideo ? "w-[70%]" : "w-[30%]"
                } flex-shrink-0`}
              >
                {isLeftVideo ? (
                  <ReactPlayer
                    url={url}
                    controls
                    playing
                    width="100%"
                    height="100%"
                  />
                ) : (
                  <Image
                    src={frogImage}
                    alt="frogImage"
                    className={`rounded-md ${
                      imageVisibility[index] ? "opacity-100" : "opacity-0"
                    } transition-opacity duration-500`}
                    width={600}
                    height={338}
                  />
                )}
              </div>

              {/* 右側 (画像または動画) */}
              <div
                className={`${
                  isLeftVideo ? "w-[30%]" : "w-[70%]"
                } flex-shrink-0`}
              >
                {!isLeftVideo ? (
                  <ReactPlayer
                    url={url}
                    controls
                    playing
                    width="100%"
                    height="100%"
                  />
                ) : (
                  <Image
                    src={frogImage}
                    alt="frogImage"
                    className={`rounded-md ${
                      imageVisibility[index] ? "opacity-100" : "opacity-0"
                    } transition-opacity duration-500`}
                    width={600}
                    height={338}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
