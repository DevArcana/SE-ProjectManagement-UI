import axios from "axios";
import { Issue, User } from "./issuesAPI.types";

export const postIssue = (
  projectId: number,
  name: string,
  description: string | null = null
): Promise<Issue | null> => (
  axios
    .post(`/api/projects/${projectId}/issues`, {
      name,
      description,
    })
    .then(response => response.data)
    .catch(() => null)
);

export function getIssues(projectId: number): Promise<Issue[]> {
  return axios
    .get(`/api/projects/${projectId}/issues`)
    .then(response => response.data)
    .catch(() => null);
}

export const updateIssue = (
  issue: Issue,
  projectId: number
): Promise<Issue | null> => (
  axios
    .put(`/api/projects/${projectId}/issues/${issue.id}`, issue)
    .then(response => response.data)
    .catch(() => null)
);

export const getUsers = (): Promise<User[] | null> => (
  axios
    .get('/api/users')
    .then(response => response.data)
    .catch(() => null)
);

export const getCollaborators = (projectId: number): Promise<User[] | null> => (
  axios
    .get(`/api/projects/${projectId}/collaborators`)
    .then(response => response.data)
    .catch(() => null)
);

export const postCollaborator = (
  projectId: number,
  username: string
): Promise<User[] | null> => (
  axios
    .post(`/api/projects/${projectId}/collaborators`, {username})
    .then(response => response.data)
    .catch(() => null)
);
