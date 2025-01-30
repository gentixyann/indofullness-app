"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import videoUrls from "../public/json/videoUrls.json";
import imageSources from "../public/json/imageSources.json";
import VideoSection from "@/components/VideoSection";
import ImageSection from "@/components/ImageSection";
import Link from "next/link";
import Modal from "@/components/Modal";
import AssassinFromIndiaButton from "@/components/AssassinFromIndiaButton";

export default function Page() {
  const [selectedVideos, setSelectedVideos] = useState<string[]>([]);
  const [imageVisibility, setImageVisibility] = useState<boolean[]>([]);
  const [showModal, setShowModal] = useState(false);

  // 🎯 初回・画像リスト更新時に visibility 配列をセット
  useEffect(() => {
    setImageVisibility(Array(imageSources.length).fill(true));
    setShowModal(true);
  }, []);

  // 🎯 ボタンで呼び出せるように useCallback でラップ
  const fetchRandomVideos = useCallback(() => {
    const shuffled = [...videoUrls].sort(() => Math.random() - 0.5);
    setSelectedVideos(shuffled.slice(0, 5));
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
    <div className="flex flex-col items-center max-w-screen-sm mx-auto p-4 overflow-x-hidden">
      {showModal && <Modal onClose={() => setShowModal(false)} />}
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
      <div className="mb-12">
        <Image
          src="/images/reset_button.svg"
          alt="アプリロゴ"
          width={50}
          height={50}
          priority
          onClick={fetchRandomVideos}
        />
      </div>

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
        <div className="flex justify-between items-center">
          <ImageSection
            imageSrc={imageSources[2]}
            width="50%"
            isVisible={imageVisibility[2]}
          />
          <ImageSection
            imageSrc={imageSources[3]}
            width="80%"
            isVisible={imageVisibility[3]}
            className="-mr-20"
          />
        </div>

        {/* 5番目のセット: 右に動画 */}
        {selectedVideos.length > 2 && (
          <div className="flex justify-end">
            <VideoSection videoUrl={selectedVideos[2]} width="70%" />
          </div>
        )}

        {/* 6番目のセット: 左右に画像２段 */}
        <div className="flex justify-between items-start">
          <ImageSection
            imageSrc={imageSources[4]}
            width="40%"
            isVisible={imageVisibility[4]}
          />
          <ImageSection
            imageSrc={imageSources[5]}
            width="50%"
            isVisible={imageVisibility[5]}
            className="mt-20"
          />
        </div>

        {/* 7番目のセット: 左に画像 */}
        <div className="flex justify-between items-start">
          <ImageSection
            imageSrc={imageSources[6]}
            width="30%"
            isVisible={imageVisibility[6]}
            className="-mb-20"
          />
        </div>

        {/* 8番目のセット: 左に画像 */}
        <div className="flex justify-center items-center">
          <ImageSection
            imageSrc={imageSources[7]}
            width="80%"
            isVisible={imageVisibility[7]}
            className="-mb-10"
          />
        </div>

        {/* 9番目のセット: 中央に動画 */}
        {selectedVideos.length > 3 && (
          <div className="flex justify-center">
            <VideoSection videoUrl={selectedVideos[3]} width="70%" />
          </div>
        )}

        {/* 10番目のセット: 左右に画像 */}
        <div className="flex justify-between items-start">
          <ImageSection
            imageSrc={imageSources[8]}
            width="40%"
            isVisible={imageVisibility[8]}
          />
          <ImageSection
            imageSrc={imageSources[9]}
            width="50%"
            isVisible={imageVisibility[9]}
          />
        </div>

        {/* 11番目のセット: 動画右寄せ */}
        {selectedVideos.length > 0 && (
          <div className="flex justify-end">
            <VideoSection videoUrl={selectedVideos[4]} width="70%" />
          </div>
        )}

        {/* 12番目のセット: 画像中央 */}
        <div className="flex justify-center items-center">
          <ImageSection
            imageSrc={imageSources[10]}
            width="80%"
            isVisible={imageVisibility[10]}
          />
        </div>
      </div>
      <div className="mb-10">
        <Image
          src="/images/asassin_from_india.svg"
          alt="chai_bottom"
          width={300}
          height={50}
          priority
        />
      </div>
      <div className="mb-10">
        <AssassinFromIndiaButton />
      </div>

      <div className="mb-2">
        <Link href="https://100banch.com/magazine/63461/" target="_blank">
          <Image
            src="/images/about_indofullness.svg"
            alt="chai_bottom"
            width={300}
            height={50}
            priority
          />
        </Link>
      </div>

      <div className="-mb-4">
        <Image
          src="/images/chai_bottom.svg"
          alt="chai_bottom"
          width={300}
          height={50}
          priority
        />
      </div>
    </div>
  );
}
