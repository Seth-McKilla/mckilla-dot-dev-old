import Head from "next/head";
import type { NextPage } from "next";

// Mui
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// Components
import {
  Container,
  FloatingHead,
  TypingAnimation,
  Socials,
} from "../components";

const Home: NextPage = () => {
  const theme = useTheme();

  const bold = {
    color: theme.palette.primary.main,
  };

  return (
    <Container>
      <Head>
        <title>Welcome to ENDEVRS</title>
        <meta
          name="description"
          content="ENDEVRS - Software development endeavors"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container direction="column" spacing={2} alignItems="center">
        <Grid item xs={12}>
          <FloatingHead />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h2" gutterBottom>
            Hey there!
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5">
            {"I'm"} Seth, a self-taught full-stack software engineer.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Welcome to my <b style={bold}>en</b>deavo<b style={bold}>rs</b> in
            software <b style={bold}>dev</b>elopment.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <TypingAnimation />
        </Grid>

        <Grid item xs={6} mt={3}>
          <Typography variant="h3" gutterBottom>
            Get in touch!
          </Typography>

          <Socials />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
