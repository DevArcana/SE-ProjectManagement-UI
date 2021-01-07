import React from "react";
import { Box, Button, VStack } from "@chakra-ui/react";
const projectShortcut = "1";
const projectName = "fullProjectName";
export const ProjectIcon: React.FC = () => {
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
        {projectShortcut}
      </Box>
      <Box width="fit-content">{projectName}</Box>
    </VStack>
  );
};
