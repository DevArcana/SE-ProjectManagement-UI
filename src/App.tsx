import * as React from "react"
import { AuthProvider } from './authentication/context/AuthProvider';
import { AppRouter } from './routing/AppRouter';
import {
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
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </ChakraProvider>
  )
}
