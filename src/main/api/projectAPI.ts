import axios from "axios";
import { Project } from "../api/projectAPI.types";

export const createProject = (name: string): Promise<string | null> =>
  axios
    .post("api/projects", {
      name,
    })
    .then((response) => response.data)
    .catch(() => null);

export function getProjects(): Promise<Project[]> {
  return axios
    .get("api/projects")
    .then((response) => response.data)
    .catch(() => null);
}
