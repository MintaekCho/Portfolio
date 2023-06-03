"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

export default function Profile() {
  const [count, setCount] = useState<number>(0);
  const handleUpCount = () => {
    if (count > 2) setCount(0);
    else setCount((count) => count + 1);
  };

  const handleDownCount = () => {
    if (count < 1) setCount(3);
    else setCount((count) => count - 1);
  };
  return (
    <article className="flex items-center gap-4 my-10">
      <div className="text-5xl">
        <BsFillCaretLeftFill className="cursor-pointer" onClick={handleDownCount} />
      </div>
      <Image
      className="rounded-3xl hover:scale-105 ease-in-out duration-300"
        src={`/images/profile${count}.jpeg`}
        alt={`profile${count}`}
        width={500}
        height={600}
      />
      <div className="text-5xl">
        <BsFillCaretRightFill className="cursor-pointer" onClick={handleUpCount} />
      </div>
    </article>
  );
}
