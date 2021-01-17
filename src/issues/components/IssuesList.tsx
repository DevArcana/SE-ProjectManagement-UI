import React from "react";
import { IssueInfo } from "./IssueInfo";
import {Collaborator, Issue} from "../api/issuesAPI.types";
import { Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react";

interface Props {
  issues: Issue[];
  onAssign: (user: Collaborator, issue: Issue) => void;
  assignableUsers: Collaborator[];
}

export const IssuesList: React.FC<Props> = ({ issues, onAssign, assignableUsers }) => {
  return (
    <Table colorScheme="primary" size="lg" variant="simple">
      {/* <TableCaption>Issues</TableCaption> */}
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Name</Th>
          <Th>Description</Th>
          <Th>Assignee</Th>
          <Th>Status</Th>
        </Tr>
      </Thead>
      <Tbody>
        {issues.map(issue => (
          <IssueInfo key={issue.id} issue={issue} onAssign={onAssign} assignableUsers={assignableUsers} />
        ))}
      </Tbody>
    </Table>
  );
};
