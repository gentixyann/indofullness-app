"use client";

import React, { useState } from "react";
import ReactPlayer from "react-player";
import style from "./style.module.css";

export default function Page() {
  const [links, setLinks] = useState<string[]>([""]); // 初期状態で1つのフィールド

  const handleInputChange = (index: number, value: string) => {
    const updatedLinks = [...links];
    updatedLinks[index] = value;
    setLinks(updatedLinks);
  };

  const addField = () => {
    setLinks([...links, ""]);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">動画音声再生アプリ</h1>

      {/* 入力フィールド（上部にまとめる） */}
      <div className="space-y-2 w-full max-w-lg mb-4">
        {links.map((link, index) => (
          <div key={index} className="flex flex-row space-x-2">
            <input
              type="text"
              placeholder={`動画リンクを入力 (${index + 1})`}
              value={link}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="border border-gray-300 p-2 rounded-md w-full"
            />
          </div>
        ))}
      </div>

      {/* フィールド追加ボタン */}
      <button
        onClick={addField}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4"
      >
        入力フィールドを追加
      </button>

      {/* 動画表示（下部に配置） */}
      {/* <div className="space-y-4 w-full max-w-lg"> */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
        {links.map((link, index) => (
          <div key={index} className={style.videoWrapper}>
            {link && (
              <ReactPlayer
                key={link} // URLごとに異なるキーを設定
                url={link}
                controls={true}
                playing={true}
                width="100%"
                height="100%"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
