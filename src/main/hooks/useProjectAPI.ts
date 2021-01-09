import { useState } from "react";
import { Project } from "../api/projectAPI.types";
import { getProjects } from "../api/projectAPI";

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isFetching, setFetching] = useState(false);

  async function fetchProjects(): Promise<boolean> {
    setFetching(true);
    const projects = await getProjects();
    setFetching(false);

    if (projects !== null && projects.length > 0) {
      setProjects(projects);
      return true;
    }

    return false;
  }

  return { projects, isFetching, fetchProjects };
}
