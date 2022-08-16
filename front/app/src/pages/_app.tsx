import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { FC } from "react";
import React from "react";

import "../styles/globals.css";
import { RootContextProvider } from "../contexts/index";

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
        <Component {...pageProps} />
      </ChakraProvider>
    </RootContextProvider>
  );
};

export default MyApp;
