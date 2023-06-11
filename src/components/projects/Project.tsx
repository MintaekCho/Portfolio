import { getProjects } from "@/service/project";
import React from "react";
import ProjectSection from "./ProjectSection";

export type ProjectData = {
  data: {
    project: {
      front: Project[];
      back: Project[];
    };
  };
};

export type Project = {
  title: string;
  name: string;
  period: string;
  type: string;
  description1: string;
  description2: string[];
  tech: string;
  deploy: string;
  imageCount: number;
};

export default async function Project() {
  const projects = await getProjects();

  return <ProjectSection projects={projects} />
}
