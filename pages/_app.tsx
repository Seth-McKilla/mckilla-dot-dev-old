import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Navbar } from "../components";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
