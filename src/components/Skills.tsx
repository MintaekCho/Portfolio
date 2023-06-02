import Image from "next/image";
import React from "react";

export default function Skills() {
  const skills = ["html", "css", "js"];
  return (
    <div className="w-full p-2 mt-32">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center items-center">
        <p className="text-4xl tracking-widest uppercase font-bold">Skills</p>
        <h2 className="py-4 text-4xl">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={`/images/skills/${skill}.png`}
                  alt={skill}
                  width={200}
                  height={200}
                />
                <span className="text-xl font-bold mt-4">{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
