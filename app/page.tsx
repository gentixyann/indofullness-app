"use client";

import React, { useState } from "react";
import ReactPlayer from "react-player";
import styles from "./style.module.css";

import videoUrls from "../public/json/videoUrls.json";

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
      <h1 className="text-2xl font-bold mb-4">ランダム動画再生アプリ</h1>
      <button
        onClick={fetchRandomVideos}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4"
      >
        再生する
      </button>

      {/* 動画表示（2カラム） */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl">
        {selectedVideos.map((url, index) => (
          <div key={index} className={styles.videoWrapper}>
            <ReactPlayer
              url={url}
              controls
              playing
              width="100%"
              height="100%"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
