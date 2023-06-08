import React, { useState } from "react";
import Description from "./Description";
import ImageWrap from "./ImageWrap";

export default function Project() {
  const frontProjects = [{ projectTitle: "shoopy", projectCount: 4 }];

  const backProjects = [
    { projectTitle: "omu", projectCount: 5 },
    { projectTitle: "foodiary", projectCount: 6 },
  ];

  const [front, setFront] = useState(true);

  const [project, setProject] = useState<{
    projectTitle: string;
    projectCount: number;
  }>(frontProjects[0]);
  console.log(project)
  const { projectTitle, projectCount } = project;
  return (
    <section
    id="project"
      data-aos="fade-up"
      className="w-4/5 max-w-[1240px] flex flex-col items-center justify-center p-4 bg-white/10 rounded-3xl mt-10"
    >
      <h1 className="text-3xl md:text-4xl xl:text-5xl text-purple-500 font-bold mb-4">Project</h1>
      <div className="w-full min-w-[320px] flex flex-col sm:flex-row gap-6 items-center justify-between mb-10">
          <button
            onClick={() => {
              setFront(true);
              setProject(frontProjects[0]);
            }}
            className="w-2/5 p-8 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl font-bold hover:scale-105 hover:text-md sm:hover:lg md:hover:text-xl lg:hover:text-2xl xl:hover:text-3xl hover:tracking-widest ease-in-out duration-300"
          >
            frontend
          </button>
          <button
            onClick={() => {
              setFront(false);
              setProject(backProjects[0]);
            }}
            className="w-2/5 p-8 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl font-bold hover:scale-105 hover:text-md sm:hover:lg md:hover:text-xl lg:hover:text-2xl xl:hover:text-3xl hover:tracking-widest ease-in-out duration-300"
          >
            backend
          </button>
        </div>
      {front ? (
        <ul className="flex gap-4 mb-4">
          {frontProjects.map((p, i) => (
            <li
              key={i}
              className={
                projectTitle === p.projectTitle
                  ? "bg-red-400 py-2 px-4 text-lg font-bold rounded-lg text-center"
                  : "bg-white py-2 px-4 text-lg text-black font-bold rounded-lg text-center hover:bg-[#c4c4c4] hover:text-white"
              }
              onClick={() => setProject(p)}
            >
              {p.projectTitle}
            </li>
          ))}
        </ul>
      ) : (
        <ul className="flex gap-4 mb-4">
          {backProjects.map((p, i) => (
            <li
              key={i}
              className={
                projectTitle === p.projectTitle
                  ? "bg-red-400 py-2 px-4 text-lg font-bold rounded-lg text-center"
                  : "bg-white py-2 px-4 text-lg text-black font-bold rounded-lg text-center hover:bg-[#c4c4c4] hover:text-white"
              }
              onClick={() => setProject(p)}
            >
              {p.projectTitle}
            </li>
          ))}
        </ul>
      )}

      <ImageWrap title={projectTitle} imageCount={projectCount} />
      <Description title={project.projectTitle} />
    </section>
  );
}
