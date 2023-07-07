import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { Project } from "./Project";

export default function ImageWrap({ project }: { project: Project }) {
  const images = [];

  const { title, imageCount } = project;
  const [count, setCount] = useState<number>(1);

  for (let i = 1; i <= project.imageCount; i++) {
    images.push(`/images/projects/${project.title}/${project.title}${i}.png`);
  }

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
        {images.map((image, i) => (
          <Image
            key={i}
            className={`${count === i + 1 ? "" : "hidden"}`}
            src={image}
            alt={title}
            width={800}
            height={600}
            loading="lazy"
          />
        ))}
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
