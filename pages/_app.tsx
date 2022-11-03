import { ChakraProvider } from "@chakra-ui/react";
import PlausibleProvider from "next-plausible";

import { DialogSubscribe, NavMenu, NavFooter } from "components";
import theme from "styles/theme";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="endevrs.dev">
      <ChakraProvider resetCSS theme={theme}>
        <DialogSubscribe />
        <NavMenu />
        <Component {...pageProps} />
        <NavFooter />
      </ChakraProvider>
    </PlausibleProvider>
  );
}
