"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AssassinFromIndiaButton() {
  return (
    <Link
      className="w-[70%]"
      href="https://100banch.com/projects/assassin-from-india"
      target="_blank"
    >
      <button
        className="
             w-full
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
          インドからの刺客とは？
        </span>
        <Image
          width={30}
          height={30}
          src="/images/arrow_forward.svg"
          alt="矢印"
          className="ml-2"
        />
      </button>
    </Link>
  );
}
