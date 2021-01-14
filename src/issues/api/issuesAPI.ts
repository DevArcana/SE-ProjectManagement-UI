import axios from "axios";
import { Issue } from "./issuesAPI.types";

export const postIssue = (
  projectId: number,
  name: string,
  description: string | null = null
): Promise<Issue | null> =>
  axios
    .post(`/api/projects/${projectId}/issues`, {
      name,
      description,
    })
    .then((response) => response.data)
    .catch(() => null);

export function getIssues(projectId: number): Promise<Issue[]> {
  return axios
    .get(`/api/projects/${projectId}/issues`)
    .then((response) => response.data)
    .catch(() => null);
}
