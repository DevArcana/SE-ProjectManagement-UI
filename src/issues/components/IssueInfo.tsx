import React, { useState } from "react";
import { Issue } from "../api/issuesAPI.types";
import { updateIssue } from "../api/issuesAPI";
import { useParams } from "react-router-dom";
import {
  Tr,
  Td,
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Text,
  Select
} from "@chakra-ui/react";
interface Props {
  issue: Issue;
}

export const IssueInfo: React.FC<Props> = props => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false });
  const { projectId } = useParams();
  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const newIssue = {...issue, status: parseInt(value)}
    setIssue(newIssue);
    updateIssue(newIssue, projectId);
  }
  const [issue, setIssue] = useState(props.issue);
  return (
    <Tr>
      <Td>
        <Text
          as={Button}
          onClick={onOpen}
          bg="transparent"
          _hover={{ bg: "secondary.100", fontSize: "lg" }}
        >
          {issue.id}
        </Text>
      </Td>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        trapFocus={false}
        useInert={false}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader color="#fff">Update: {issue.name}</DrawerHeader>
            <DrawerBody color="#fff">
              change name, desc, assignee,status - insert IssueUpdate component
            </DrawerBody>
            <DrawerFooter>
              <Button
                colorScheme="primary"
                mr={3}
                color="#fff"
                type={"submit"}
                onClick={onClose}
              >
                Save
              </Button>
              <Button colorScheme="secondary" onClick={onClose} color="#fff">
                Cancel
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      <Td>{issue.name}</Td>
      <Td>{issue.description}</Td>
      <Td>{issue.assignee}</Td>
      <Td>
      <Select onChange={handleStatusChange} value={issue.status}>
        <option value={0}>To do</option>
        <option value={1}>Doing</option>
        <option value={2}>Done</option>
      </Select>
        
        {/* {(() => {
        switch (issue.status) {
          case 0:
            return "To do";
          case 1:
            return "Doing";
          case 2:
            return "Done";
          default:
            return "";
      }})()} */}
      </Td>
    </Tr>
  );
};
