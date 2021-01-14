import React from "react";
import { Issue } from "../api/issuesAPI.types";
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
  DrawerCloseButton,
  DrawerHeader,
} from "@chakra-ui/react";
interface Props {
  issue: Issue;
}

export const IssueInfo: React.FC<Props> = ({ issue }) => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false });
  return (
    <Tr>
      <Td>
        <Button
          onClick={onOpen}
          colorScheme="transparent"
          _hover={{ bg: "secondary.100" }}
          fontSize="lg"
        >
          {issue.id}
        </Button>
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
    </Tr>
  );
};
