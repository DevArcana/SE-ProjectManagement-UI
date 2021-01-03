import * as React from "react";
import { AuthProvider } from "./authentication/context/AuthProvider";
import { AppRouter } from "./routing/AppRouter";
import { ChakraProvider } from "@chakra-ui/react";

export const App: React.FC = () => {
  return (
    <ChakraProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </ChakraProvider>
  );
};
