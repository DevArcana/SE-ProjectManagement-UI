import React from "react";
import { Button, VStack } from "@chakra-ui/react";
import { FaRegCheckSquare, FaHome } from "react-icons/fa";

export const SideButtons: React.FC = () => {
  return (
    <>
      <br></br>
      <VStack>
        <Button
          colorScheme="secondary"
          w="100%"
          leftIcon={<FaHome />}
          justifyContent="left"
          color="gray.200"
        >
          Home
        </Button>
        <Button
          w="100%"
          colorScheme="secondary"
          leftIcon={<FaRegCheckSquare />}
          justifyContent="left"
          color="gray.200"
        >
          My Tasks
        </Button>
      </VStack>

      <br></br>
      <br></br>
    </>
  );
};
