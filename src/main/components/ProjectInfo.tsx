import { Button, Box, VStack } from "@chakra-ui/react";
import React from "react";
import { Project } from "../../projects/api/projectsAPI.types";

interface Props {
  project: Project;
}

export const ProjectInfo: React.FC<Props> = ({ project }) => {
  return (
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
      >
        {project.id}
      </Box>
      <Box width="fit-content">{project.name}</Box>
    </VStack>
  );
};
