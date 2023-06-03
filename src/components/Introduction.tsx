"use client";

import Image from "next/image";
import React from "react";
import { useTypewriter } from "use-typewriter-hook";
import { Open_Sans } from "next/font/google";

const sans = Open_Sans({ subsets: ["latin"] });

export default function Introduction() {
  const { textValue: typeText } = useTypewriter({
    targetText: "안녕하세요. 프론트엔드 개발자 조민택입니다.",
    autoStartDelay: 0,
    typingDelayMillis: 100,
  });
  return (
    <section className="flex flex-col items-center gap-10">
      <div className="motion-safe:animate-bounce w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] border-2 border-white rounded-full flex items-center justify-center flex-col z-[-1]">
        <Image
          className="rounded-full w-[130px] h-[130px] mb-4"
          src={"/images/profile0.jpeg"}
          alt={"profile"}
          width={200}
          height={200}
        />
        <p className="text-xs sm:text-sm md:text-md uppercase text-gray-500 tracking-[8px] sm:tracking-[10px] md:tracking-[12px] mb-2">
          Software Enginner
        </p>
        <p className="font-bold text-[10px] sm:text-[12px] md:text-[14px]">
          {typeText}
        </p>
      </div>
    </section>
  );
}
