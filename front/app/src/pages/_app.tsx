import { AppProps } from "next/app";
import { NextPage } from "next";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
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

/**
 * MyApp
 * @param {AppProps} { Component, pageProps }
 * @returns
 */
const MyApp: NextPage = ({ Component, pageProps }: AppProps) => {
  return (
    <RootContextProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </RootContextProvider>
  );
};

export default MyApp;
