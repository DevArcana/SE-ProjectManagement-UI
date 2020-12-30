import * as React from "react"
import {RegisterView} from "./authentication/views/RegisterView"
import {LoginView} from "./authentication/views/LoginView"
import {login, register} from "./authentication/api/authAPI"
import {
  Flex,
  ChakraProvider,
  extendTheme
} from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    brand: {
      100: '#0F4C81',
      200: '#9E6EB5',
    },
  },
})

export const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Flex height='100vh' alignItems='center' justifyContent='center'>
        <RegisterView />
      </Flex>
    </ChakraProvider>
  )
}
