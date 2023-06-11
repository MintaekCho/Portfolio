import { ProjectData } from "@/components/projects/Project";
import { readFile } from "fs/promises";
import path from "path";

export async function getProjects(): Promise<ProjectData> {
  const filePath = path.join(process.cwd(), "public/projectData.json");
  return readFile(filePath, "utf-8").then<ProjectData>(JSON.parse);
}
