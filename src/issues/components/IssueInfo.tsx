import React from "react";
import {Issue} from "../api/issuesAPI.types";

interface Props {
  issue: Issue;
}

export const IssueInfo: React.FC<Props> = ({issue}) => {
  return (
    <div>
      {issue.id} {issue.name} {issue.description}
    </div>
  );
}