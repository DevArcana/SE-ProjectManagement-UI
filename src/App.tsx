import * as React from "react"
import {RegisterView} from "./authentication/views/RegisterView"
import {LoginView} from "./authentication/views/LoginView"
import {
  Flex,
  ChakraProvider,
} from "@chakra-ui/react"

export const App: React.FC = () => (
  <ChakraProvider>
    <Flex height='100vh' alignItems='center' justifyContent='center'>
      <RegisterView />
    </Flex>
  </ChakraProvider>
)
