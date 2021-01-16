import React from "react";
import { IssueInfo } from "./IssueInfo";
import { Issue } from "../api/issuesAPI.types";
import { Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react";

interface Props {
  issues: Issue[];
}

export const IssuesList: React.FC<Props> = ({ issues }) => {
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
          <IssueInfo key={issue.id} issue={issue} />
        ))}
      </Tbody>
    </Table>
  );
};
