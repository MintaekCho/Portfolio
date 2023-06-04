import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

export default function ImageWrap({title, imageCount}: {title:string, imageCount:number}) {
  const [count, setCount] = useState<number>(1);
  const handleUpCount = () => {
    if (count > imageCount-1) setCount(1);
    else setCount((count) => count + 1);
  };

  const handleDownCount = () => {
    if (count < 2) setCount(imageCount);
    else setCount((count) => count - 1);
  };

  useEffect(() => {
    setCount(1)
  }, [imageCount])

  return (
    <>
      <div className="flex gap-4 items-center justify-center">
        <div className="text-5xl">
          <BsFillCaretLeftFill
            className="cursor-pointer"
            onClick={handleDownCount}
          />
        </div>

        <Image
          src={`/images/projects/${title}/${title}${count}.png`}
          alt={"projectImage"}
          width={800}
          height={600}
          className='ease-in-out duration-500'
        />
        <div className="text-5xl">
          <BsFillCaretRightFill
            className="cursor-pointer"
            onClick={handleUpCount}
          />
        </div>
      </div>
      <p className="text-lg">{count} / {imageCount}</p>
    </>
  );
}
