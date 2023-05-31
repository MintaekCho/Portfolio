"use client";

import Image from "next/image";
import React from "react";
import { useTypewriter } from "use-typewriter-hook";

export default function Introduction() {
  const {textValue: typeText} = useTypewriter({
    targetText: "Hi I'm frontend Developer",
    autoStartDelay: 0,
    typingDelayMillis: 100,
  });
  return (
    <div className="w-[500px] h-[500px] border-2 border-white rounded-full flex items-center justify-center flex-col">
      <Image
        className="rounded-full w-[100px] h-[100px] mb-4"
        src={"/images/profile.jpeg"}
        alt={"profile"}
        width={200}
        height={200}
      />
      <p className="text-md uppercase text-gray-500 tracking-[12px]">Software Enginner</p>
      <p className="font-bold">{typeText}</p>

    </div>
  );
}
