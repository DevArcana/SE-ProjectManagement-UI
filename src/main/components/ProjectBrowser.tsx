import {
  Button,
  Box,
  SimpleGrid,
  VStack,
  Skeleton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useProjects } from "../../projects/hooks/useProjects";
import { ProjectInfo } from "../components/ProjectInfo";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
const ProjectBrowser: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { projects, fetchProjects, isFetching } = useProjects();
  useEffect(() => {
    fetchProjects();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Skeleton isLoaded={!isFetching}>
      <VStack
        direction="row"
        align="left"
        paddingTop="50px"
        paddingLeft="15%"
        w="90%"
      >
        <Box width="fit-content" fontSize="20px">
          Browse Projects
        </Box>
        <hr />
        <SimpleGrid columns={10} spacing="10px" paddingTop="20px">
          {projects.map((project) => (
            <ProjectInfo key={project.id} project={project} />
          ))}
          <VStack>
            <Box
              as={Button}
              w="160px"
              h="160px"
              borderRadius="lg"
              textAlign="center"
              fontSize="72px"
              colorScheme="primary"
              color="#fff"
              boxShadow="lg"
              onClick={onOpen}
            >
              +
            </Box>
            <Modal
              isOpen={isOpen}
              onClose={onClose}
              closeOnOverlayClick={false}
            >
              <ModalOverlay />
              <ModalContent color="#fff">
                <ModalHeader>Create a new Project</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FormControl>
                    <FormLabel>Project name</FormLabel>
                    <Input placeholder="Project name" />
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button
                    colorScheme="primary"
                    mr={3}
                    color="#fff"
                    type="submit"
                  >
                    Save
                  </Button>
                  <Button
                    colorScheme="secondary"
                    onClick={onClose}
                    color="#fff"
                  >
                    Cancel
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Box width="fit-content">Create Project</Box>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Skeleton>
  );
};
export default ProjectBrowser;
