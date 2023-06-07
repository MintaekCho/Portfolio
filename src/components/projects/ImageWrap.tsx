import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

export default function ImageWrap({
  title,
  imageCount,
}: {
  title: string;
  imageCount: number;
}) {
  const [count, setCount] = useState<number>(1);
  const handleUpCount = () => {
    if (count > imageCount - 1) setCount(1);
    else setCount((count) => count + 1);
  };

  const handleDownCount = () => {
    if (count < 2) setCount(imageCount);
    else setCount((count) => count - 1);
  };

  useEffect(() => {
    setCount(1);
  }, [imageCount]);

  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center">
        <Image
          src={`/images/projects/${title}/${title}${count}.png`}
          alt={"projectImage"}
          width={800}
          height={600}
        />
        <div className="flex items-center gap-10 mb-4">
          <div className="text-5xl">
            <BsFillCaretLeftFill
              className="cursor-pointer hover:text-[#c4c4c4]"
              onClick={handleDownCount}
            />
          </div>
          <p className="text-lg">
            {count} / <span className="font-bold">{imageCount}</span>
          </p>
          <div className="text-5xl">
            <BsFillCaretRightFill
              className="cursor-pointer hover:text-[#c4c4c4]"
              onClick={handleUpCount}
            />
          </div>
        </div>
      </div>
    </>
  );
}
