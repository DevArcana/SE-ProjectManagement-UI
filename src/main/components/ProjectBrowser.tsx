import { Button, Box, SimpleGrid, VStack, Skeleton } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useProjects } from "../hooks/useProjectAPI";
import { ProjectInfo } from "../components/ProjectInfo";

const ProjectBrowser: React.FC = () => {
  const { projects, fetchProjects, isFetching } = useProjects();
  useEffect(() => {
    fetchProjects();
  }, []);

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
        <Box
          borderBottom="1px"
          //opacity="0%"
          borderColor="#000"
          backgroundColor="black"
        ></Box>
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
            >
              +
            </Box>
            <Box width="fit-content">Create Project</Box>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Skeleton>
  );
};
export default ProjectBrowser;
