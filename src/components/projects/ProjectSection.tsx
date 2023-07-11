"use client";
import Aos from "aos";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Description from "./Description";
import ImageWrap from "./ImageWrap";
import { Project, ProjectData } from "./Project";


export default function ProjectSection({
  projects,
}: {
  projects: ProjectData;
}) {
  const {
    data: {
      project: { front, back },
    },
  } = projects;

  const [isFront, setIsFront] = useState(true);
  const [project, setProject] = useState<Project>(front[0]);
  console.log(project);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section
      id="project"
      data-aos="fade-up"
      className="w-4/5 max-w-[1240px] flex flex-col items-center justify-center p-4 bg-white/10 rounded-3xl mt-10"
    >
      <h1 className="text-3xl md:text-4xl xl:text-5xl text-purple-500 font-bold mb-4 text-center p-4">
        Project
      </h1>
      <div className="w-full min-w-[320px] flex flex-col sm:flex-row gap-6 items-center justify-between mb-10">
        <button
          onClick={() => {
            setIsFront(true);
            setProject(front[0]);
          }}
          className="w-2/5 p-8 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl font-bold hover:scale-105 hover:text-md sm:hover:lg md:hover:text-xl lg:hover:text-2xl xl:hover:text-3xl hover:tracking-widest ease-in-out duration-300"
        >
          frontend
        </button>
        <button
          onClick={() => {
            setIsFront(false);
            setProject(back[0]);
          }}
          className="w-2/5 p-8 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl font-bold hover:scale-105 hover:text-md sm:hover:lg md:hover:text-xl lg:hover:text-2xl xl:hover:text-3xl hover:tracking-widest ease-in-out duration-300"
        >
          backend
        </button>
      </div>
      {isFront ? (
        <ul className="flex gap-4 mb-4 justify-center">
          {front.map((f) => (
            <li
              key={f.title}
              className={
                project.title === f.title
                  ? "bg-red-400 py-2 px-4 text-lg font-bold rounded-lg text-center"
                  : "bg-white py-2 px-4 text-lg text-black font-bold rounded-lg text-center hover:bg-[#c4c4c4] hover:text-white"
              }
              onClick={() => setProject(f)}
            >
              {f.title}
            </li>
          ))}
        </ul>
      ) : (
        <ul className="flex gap-4 mb-4 justify-center">
          {back.map((b) => (
            <li
              key={b.title}
              className={
                project.title === b.title
                  ? "bg-red-400 py-2 px-4 text-lg font-bold rounded-lg text-center"
                  : "bg-white py-2 px-4 text-lg text-black font-bold rounded-lg text-center hover:bg-[#c4c4c4] hover:text-white"
              }
              onClick={() => setProject(b)}
            >
              {b.title}
            </li>
          ))}
        </ul>
      )}

      <ImageWrap project={project} />
      <Description project={project} />
    </section>
  );
}
