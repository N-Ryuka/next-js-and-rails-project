import { FC } from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";

const MyApp: FC = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
