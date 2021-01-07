import { Button, Box, SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";
import { ProjectIcon } from "../components/ProjectIcon";

export const ProjectBrowser: React.FC = () => {
  return (
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
      <Box
        borderBottom="1px"
        //opacity="0%"
        borderColor="#000"
        backgroundColor="black"
      ></Box>
      <SimpleGrid
        columns={10}
        spacing="10px"
        paddingTop="20px"
        direction="row-reverse"
      >
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
            +
          </Box>
          <Box width="fit-content">Create Project</Box>
        </VStack>
        <ProjectIcon></ProjectIcon>
      </SimpleGrid>
    </VStack>
  );
};
