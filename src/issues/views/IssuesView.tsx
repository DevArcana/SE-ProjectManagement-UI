import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useIssues } from "../hooks/useIssues";
import {
  IssueCreationForm,
  IssueCreationFormData,
} from "../components/IssueCreationForm";
import { IssuesList } from "../components/IssuesList";
import SideMenu from "../../main/components/SideMenu";
import {
  VStack,
  Alert,
  AlertIcon,
  Box,
  HStack,
  Skeleton,
  Center,
} from "@chakra-ui/react";

export const IssuesView: React.FC = () => {
  const { projectId } = useParams();
  const { issues, isFetching, fetchIssues, createIssue } = useIssues(projectId);

  useEffect(() => {
    fetchIssues();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [error, setError] = useState<string | null>(null);

  const onIssueCreate = async (data: IssueCreationFormData) => {
    const result = await createIssue(data.name, data.description);

    if (!result) {
      setError("Something went wrong while creating the issue.");
    } else {
      setError(null);
    }
  };

  return (
    <>
      <SideMenu></SideMenu>
      <Center>
        <VStack
          direction="row"
          align="left"
          paddingTop="50px"
          // paddingLeft="15%"
          minWidth="50%"
        >
          <HStack justify="space-between">
            <Box width="fit-content" fontSize="20px">
              Project: {projectId} | Issues
            </Box>
            <IssueCreationForm onSubmit={onIssueCreate} />
          </HStack>

          <hr />
          <Skeleton
            isLoaded={!isFetching}
            startColor="#fff"
            endColor="blue.300"
          >
            {error !== null && (
              <Alert status="error">
                <AlertIcon />
                {error}
              </Alert>
            )}
            {isFetching ? (
              <div>Fetching...</div>
            ) : (
              <IssuesList issues={issues} />
            )}
          </Skeleton>
        </VStack>
      </Center>
    </>
  );
};
