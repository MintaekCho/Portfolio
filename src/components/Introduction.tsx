"use client";

import Image from "next/image";
import React from "react";
import { useTypewriter } from "use-typewriter-hook";

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
          className="rounded-full w-[100px] h-[100px] mb-4"
          src={"/images/profile.jpeg"}
          alt={"profile"}
          width={200}
          height={200}
        />
        <p className="text-xs sm:text-sm md:text-md uppercase text-gray-500 tracking-[8px] sm:tracking-[10px] md:tracking-[12px]">
          Software Enginner
        </p>
        <p className="font-bold text-[10px] sm:text-[12px] md:text-[14px]">
          {typeText}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p>트러블슈팅을 좋아하고 즐기는 개발자입니다.</p>
        <p>새로운 기술 배우는 것을 기피하지 않고 지식이 쌓여갈때마다 성취감을 느낍니다.</p>
      </div>
    </section>
  );
}
