"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

export default function Profile() {
  const [count, setCount] = useState<number>(1);
  const handleUpCount = () => {
    if (count > 3) setCount(1);
    else setCount((count) => count + 1);
  };

  const handleDownCount = () => {
    if (count < 2) setCount(4);
    else setCount((count) => count - 1);
  };
  return (
    <article className="flex flex-col items-center justify-center gap-4 my-10">
      <Image
        className="rounded-3xl hover:scale-105 ease-in-out duration-300"
        src={`/images/profile${count}.jpeg`}
        alt={`profile${count}`}
        width={500}
        height={600}
      />
      <div className="flex gap-10 items-center mt-6">
        <div className="text-5xl">
          <BsFillCaretLeftFill
            className="cursor-pointer hover:text-[#c4c4c4]"
            onClick={handleDownCount}
          />
        </div>
        <p>
          {count} / <span className="font-bold">4</span>
        </p>
        <div className="text-5xl">
          <BsFillCaretRightFill
            className="cursor-pointer hover:text-[#c4c4c4]"
            onClick={handleUpCount}
          />
        </div>
      </div>
    </article>
  );
}
