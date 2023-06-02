"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Skills() {
  const frontSkills = [
    "html",
    "css",
    "javascript",
    "react",
    "nextjs",
    "firebase",
    "tailwind",
  ];

  const backSkills = ["aws", "github"];

  const [front, setFront] = useState(true);

  return (
    <div className="w-full p-2 mt-32">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center items-center bg-white/10 p-8 rounded-3xl">
        <p className="text-5xl text-purple-500 tracking-widest uppercase font-bold">
          Skills
        </p>
        <h2 className="py-4 text-2xl mb-4">What I Can Do</h2>
        <div className="w-full min-w-[500px] flex flex-col sm:flex-row gap-6 items-center justify-between mb-10">
          <button
            onClick={() => setFront(true)}
            className="w-2/5 p-8 text-2xl font-bold hover:scale-105 hover:text-3xl hover:tracking-widest ease-in-out duration-300"
          >
            frontend
          </button>
          <button
            onClick={() => setFront(false)}
            className="w-2/5 p-8 text-2xl font-bold hover:scale-105 hover:text-3xl hover:tracking-widest ease-in-out duration-300"
          >
            backend
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {front
            ? frontSkills.map((skill, index) => (
                <div key={index} className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white">
                  <div className="flex flex-col items-center justify-center">
                    <Image
                      src={`/images/skills/${skill}.png`}
                      alt={skill}
                      width={200}
                      height={200}
                    />
                    <span className="uppercase text-lg font-bold text-black py-2">
                      {skill}
                    </span>
                  </div>
                </div>
              ))
            : backSkills.map((skill, index) => (
                <div key={index} className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white">
                  <div className="flex flex-col items-center justify-center">
                    <Image
                      src={`/images/skills/${skill}.png`}
                      alt={skill}
                      width={200}
                      height={200}
                    />
                    <span className="uppercase text-lg font-bold text-black py-2">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
