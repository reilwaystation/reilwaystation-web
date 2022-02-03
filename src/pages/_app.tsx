import { AppProps } from "next/app";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import newTheme from "../chakra";
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ChakraProvider theme={newTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;
