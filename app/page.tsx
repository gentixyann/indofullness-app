"use client";

import React, { useState, useEffect, useCallback } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import videoUrls from "../public/json/videoUrls.json";
import VideoSection from "@/components/VideoSection";
import ImageSection from "@/components/ImageSection";

const overlayImage = "/images/tv_frame.png";
const frogImage = "/images/frog.gif";

// 📌 画像リストを配列で管理
const imageSources = [
  "/images/horse.gif",
  "/images/potate.gif",
  "/images/monkey.gif",
  "/images/chai.gif",
];

export default function Page() {
  const [selectedVideos, setSelectedVideos] = useState<string[]>([]);
  const [imageVisibility, setImageVisibility] = useState<boolean[]>([]);

  // 🎯 初回・画像リスト更新時に visibility 配列をセット
  useEffect(() => {
    setImageVisibility(Array(imageSources.length).fill(true));
  }, []);

  // 🎯 ボタンで呼び出せるように useCallback でラップ
  const fetchRandomVideos = useCallback(() => {
    const shuffled = [...videoUrls].sort(() => Math.random() - 0.5);
    setSelectedVideos(shuffled.slice(0, 3));
  }, []);

  // 🎯 初回レンダリング時に動画を取得
  useEffect(() => {
    fetchRandomVideos();
  }, [fetchRandomVideos]);

  // 🎯 画像ごとにランダムな点滅を設定（imageSources に対して動的に処理）
  useEffect(() => {
    const intervals = imageSources.map((_, index) =>
      setInterval(() => {
        setImageVisibility((prev) => {
          const updated = [...prev];
          updated[index] = !updated[index];
          return updated;
        });
      }, Math.random() * 4000 + 1000)
    );

    return () => intervals.forEach(clearInterval);
  }, []);

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
            <VideoSection videoUrl={selectedVideos[0]} width="70%" />
          </div>
        )}

        {/* 2番目のセット: 左右に画像 */}
        <div className="flex justify-between items-end">
          <ImageSection
            imageSrc={imageSources[0]}
            width="80%"
            isVisible={imageVisibility[0]}
          />
          <ImageSection
            imageSrc={imageSources[1]}
            width="50%"
            isVisible={imageVisibility[1]}
          />
        </div>

        {/* 3番目のセット: 動画左寄せ */}
        {selectedVideos.length > 1 && (
          <div className="flex justify-start">
            <VideoSection videoUrl={selectedVideos[1]} width="70%" />
          </div>
        )}

        {/* 4番目のセット: 左右に画像 */}
        <div className="flex justify-between items-center -mr-20">
          <ImageSection
            imageSrc={imageSources[2]}
            width="50%"
            isVisible={imageVisibility[2]}
          />
          <ImageSection
            imageSrc={imageSources[3]}
            width="80%"
            isVisible={imageVisibility[3]}
          />
        </div>

        {/* 5番目のセット: 右に動画 */}
        {selectedVideos.length > 2 && (
          <div className="flex justify-end">
            <VideoSection videoUrl={selectedVideos[2]} width="70%" />
          </div>
        )}
      </div>
    </div>
  );
}
