import React from "react";
import { Flex, CSSReset, ChakraProvider } from "@chakra-ui/react";

import { MainView } from "./main/views/MainView";
import { theme } from "./Theme";
export const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Flex height="100vh" justifyContent="left">
        <MainView></MainView>
      </Flex>
    </ChakraProvider>
  );
};
