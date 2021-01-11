import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import { FaUser } from "react-icons/fa";
import { Username } from "../../authentication/helpers/tokenStorage";
export const UserMenu: React.FC = () => {
  return (
    <HStack w="100% " color="#fff" fontSize="xl" paddingLeft="3px">
      <Box color="#fff" colorScheme="transparent">
        <FaUser />
      </Box>
      <Box w="100%" textAlign="center">
        {Username()}
      </Box>
    </HStack>
  );
};
