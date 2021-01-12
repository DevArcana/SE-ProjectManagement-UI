import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useIssues} from "../hooks/useIssues";
import {IssueCreationForm, IssueCreationFormData} from "../components/IssueCreationForm";
import {IssuesList} from "../components/IssuesList";

export const IssuesView: React.FC = () => {
  const { projectId } = useParams();
  const { issues, isFetching, fetchIssues, createIssue } = useIssues(projectId);

  useEffect(() => {
    fetchIssues();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [error, setError] = useState<string | null>(null);

  const onIssueCreate = async (data: IssueCreationFormData) => {
    const result = await createIssue(data.name, data.description);

    if (!result) {
      setError("Something went wrong while creating the issue.");
    } else {
      setError(null);
    }
  };

  return (
    <div>
      <h2>List of issues for project {projectId}</h2>
      {error !== null && <div>{error}</div>}
      {isFetching ? <div>Fetching...</div> : <IssuesList issues={issues} />}
      <hr/>
      <IssueCreationForm onSubmit={onIssueCreate} />
    </div>
  );
}