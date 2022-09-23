import { AppProps } from "next/app";
import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react";
import { FC } from "react";
import React from "react";

import "../styles/globals.css";
import { RootContextProvider } from "../contexts/index";
import { Header } from "../components/common/molecules/Header";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.200",
        color: "black",
      },
    },
  },
});

const MyApp: FC = ({ Component, pageProps }: AppProps) => {
  return (
    <RootContextProvider>
      <ChakraProvider theme={theme}>
        <Header />
        <Container maxW="4xl" centerContent>
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </RootContextProvider>
  );
};

export default MyApp;
