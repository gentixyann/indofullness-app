"use client";

import React, { useState } from "react";
import ReactPlayer from "react-player";

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
      <div className="space-y-4 w-full max-w-lg">
        {links.map((link, index) => (
          <div key={index} className="flex flex-col space-y-2">
            <input
              type="text"
              placeholder={`動画リンクを入力 (${index + 1})`}
              value={link}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="border border-gray-300 p-2 rounded-md w-full"
            />
            <div>
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
          </div>
        ))}
      </div>
      <button
        onClick={addField}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        フィールドを追加
      </button>
    </div>
  );
}
