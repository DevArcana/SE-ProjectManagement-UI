import { useState } from "react";
import { Issue } from "../api/issuesAPI.types";
import {getIssues, postIssue} from "../api/issuesAPI";

export function useIssues(projectId: number) {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [isFetching, setFetching] = useState(false);

  async function fetchIssues(): Promise<boolean> {
    setFetching(true);
    const issues = await getIssues(projectId);
    setFetching(false);

    if (issues !== null && issues.length > 0) {
      setIssues(issues);
      return true;
    }

    return false;
  }

  async function createIssue(name: string, description: string | null = null): Promise<boolean> {
    setFetching(true);
    const issue = await postIssue(projectId, name, description);

    if (issue == null) {
      setFetching(false);
      return false;
    }

    return await fetchIssues();
  }

  return { issues, isFetching, fetchIssues, createIssue };
}
