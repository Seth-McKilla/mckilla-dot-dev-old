import { ChakraProvider } from "@chakra-ui/react";
import PlausibleProvider from "next-plausible";
import theme from "styles/theme";
import { Navbar, Footer } from "components";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="endevrs.dev">
      <ChakraProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </PlausibleProvider>
  );
}
