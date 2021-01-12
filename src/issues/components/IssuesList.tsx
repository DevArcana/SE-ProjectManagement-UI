import React from "react";
import {IssueInfo} from "./IssueInfo";
import {Issue} from "../api/issuesAPI.types";

interface Props {
  issues: Issue[]
}

export const IssuesList: React.FC<Props> = ({issues}) => {
  return (
    <div>
      {issues.map(issue => <IssueInfo key={issue.id} issue={issue}/>)}
    </div>
  );
}