import { ChakraProvider } from "@chakra-ui/react";
import PlausibleProvider from "next-plausible";
import theme from "styles/theme";
import { NavBar, NavFooter } from "components";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="endevrs.dev">
      <ChakraProvider resetCSS theme={theme}>
        <NavBar />
        <Component {...pageProps} />
        <NavFooter />
      </ChakraProvider>
    </PlausibleProvider>
  );
}
