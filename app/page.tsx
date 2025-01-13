"use client";

import React, { useState } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import videoUrls from "../public/json/videoUrls.json";

const frogImage = "/images/frog.gif";

export default function Page() {
  const [selectedVideos, setSelectedVideos] = useState<string[]>([]); // 選ばれた動画URL

  // ランダムで5つの動画URLを取得
  const fetchRandomVideos = () => {
    const shuffled = [...videoUrls].sort(() => Math.random() - 0.5);
    const randomVideos = shuffled.slice(0, 5); // 上位5つを選択
    setSelectedVideos(randomVideos);
  };

  return (
    <div className="flex flex-col items-center p-4">
      {/* Imageコンポーネントでロゴ画像を表示 */}
      <div className="mb-4">
        <Image
          src="/images/logo.svg" // ロゴ画像のパス
          alt="アプリロゴ"
          width={200} // 画像幅
          height={50} // 画像高さ
          priority // 優先的にロード
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
                    className="rounded-md"
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
                    className="rounded-md"
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
