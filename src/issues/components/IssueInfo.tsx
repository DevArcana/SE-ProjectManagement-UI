import React from "react";
import { Issue } from "../api/issuesAPI.types";
import { Tr, Td } from "@chakra-ui/react";
interface Props {
  issue: Issue;
}

export const IssueInfo: React.FC<Props> = ({ issue }) => {
  return (
    <Tr>
      <Td isNumeric>{issue.id} </Td>
      <Td>{issue.name}</Td>
      <Td>{issue.description}</Td>
    </Tr>
  );
};
