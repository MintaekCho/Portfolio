import React from "react";
import { BsFillCheckCircleFill, BsGithub } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import { Project } from "./Project";

export default function Description({ project }: { project: Project }) {
  const {
    title,
    name,
    period,
    type,
    description1,
    description2,
    tech,
    deploy,
    gitUrl,
    webUrl,
  } = project;

  return (
    <section className="w-11/12 p-4 bg-white/10 rounded-3xl flex flex-col items-center">
      <h3 className="text-md sm:text-lg md:text-xl lg-text-2xl px-8 py-4 bg-red-400 text-white rounded-2xl mb-10">
        {name}
      </h3>
      <ul className="w-full text-center py-8 px-12 bg-white/60 rounded-2xl text-xs sm:text-sm md:text-md lg:text-lg xl:text:xl text-black font-semibold">
        {description2.map((d, i) => (
          <li key={i} className="list-disc mt-4">
            {d}
          </li>
        ))}
      </ul>
      <div className="w-full flex flex-col gap-2 items-center justify-between">
        <div className="w-full p-8 bg-white/60 rounded-2xl mt-4 flex flex-col items-center gap-2">
          <span className="text-xl font-bold">프로젝트 기간</span>
          <div className="text-xs sm:text-sm md:text-md lg:text-lg xl:text:xl flex flex-col gap-1">
            <p>{period}</p>
            <p>{type}</p>
          </div>
        </div>
        <div className="w-full p-8 bg-white/60 rounded-2xl mt-2 flex flex-col items-center gap-2">
          <div>
            <p className="flex gap-1 items-center text-xs sm:text-sm md:text-md lg:text-lg xl:text:xl font-bold shrink-0">
              <span>
                <BsFillCheckCircleFill />
              </span>
              <span>{`기술 스택 : ${tech}`}</span>
            </p>
            <p className="flex gap-1 items-center text-xs sm:text-sm md:text-md lg:text-lg xl:text:xl font-bold shrink-0 mt-2">
              <span>
                <BsFillCheckCircleFill />
              </span>
              <span>{`배포 : ${deploy}`}</span>
            </p>
            <a
              className="flex gap-1 underline items-center text-xs sm:text-sm md:text-md lg:text-lg xl:text:xl font-bold mt-2 hover:text-white/80"
              href={gitUrl}
              target="_blank"
            >
              <BsGithub />

              <span>github</span>
            </a>
            {webUrl && (
              <a
                className="flex gap-1 underline items-center text-xs sm:text-sm md:text-md lg:text-lg xl:text:xl font-bold mt-2 hover:text-white/80"
                href={webUrl}
                target="_blank"
              >
                <AiOutlineLink />
                <span>배포 링크</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
