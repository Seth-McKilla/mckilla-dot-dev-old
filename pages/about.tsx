import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import _ from "lodash";
import Typewriter from "typewriter-effect";
import { Layout, Social } from "components";
import headShot from "../public/seth-headshot.png";

const passions = [
  "all things javascript.",
  "React and the NextJS framework in particular.",
  "the Legend of Zelda series.",
  "Software as a Service.",
  "the occassional hackathon.",
  "solving interesting problems with software.",
  "talking with / teaching others about software.",
  "collaborating with people who also have a passion for software.",
  "entrepreneurial ventures within the tech space.",
  "consistently learning new things.",
  "getting my hands dirty by exploring new technology.",
  "meditation and self-betterment.",
];

const Home: NextPage = () => {
  return (
    <div>Homepage</div>
    // <Container>
    //   <Head>
    //     <title>{"Welcome to ENDEVRS"}</title>
    //     <meta
    //       name="description"
    //       content="ENDEVRS - Software development endeavors"
    //     />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <Grid container direction="column" spacing={2} alignItems="center">
    //     <Grid item xs={12}>
    //       <Box
    //         sx={{
    //           zIndex: 10,
    //           height: "250px",
    //           width: "250px",
    //           border: `5px solid ${theme.palette.primary.main}`,
    //           backgroundColor: theme.palette.primary.main,
    //           borderRadius: "50%",
    //           boxShadow: "0 10px 15px 0px rgba(0, 0, 0, 0.8)",
    //           animation: "logo-float 5s ease-in-out infinite",
    //           "@keyframes logo-float": {
    //             "0%": {
    //               boxShadow: "0 10px 15px 0px rgba(0, 0, 0, 0.8)",
    //               transform: "translatey(0px)",
    //             },
    //             "50%": {
    //               boxShadow: "0 35px 15px 0px rgba(0, 0, 0, 0.4)",
    //               transform: "translatey(-25px)",
    //             },
    //             "100%": {
    //               boxShadow: "0 10px 15px 0px rgba(0, 0, 0, 0.8)",
    //               transform: "translatey(0px)",
    //             },
    //           },
    //         }}
    //       >
    //         <Image
    //           width={250}
    //           height={250}
    //           src={headShot}
    //           alt="seth-headshot"
    //         />
    //       </Box>
    //     </Grid>

    //     <Grid item xs={12}>
    //       <Typography variant="h2" gutterBottom>
    //         {"Hey there!"}
    //       </Typography>
    //     </Grid>

    //     <Grid item xs={12}>
    //       <Typography variant="h5">
    //         {"I'm Seth, a self-taught full-stack software developer."}
    //       </Typography>
    //     </Grid>

    //     <Grid item xs={12}>
    //       <Typography variant="h5" gutterBottom>
    //         Welcome to my <b style={bold}>en</b>deavo<b style={bold}>rs</b> in
    //         software <b style={bold}>dev</b>elopment.
    //       </Typography>
    //     </Grid>

    //     <Grid item xs={12}>
    //       <Typography variant="h6" align="center">
    //         {"Some things I'm passionate about are..."}
    //         <Typewriter
    //           options={{
    //             strings: _.shuffle(passions),
    //             autoStart: true,
    //             loop: true,
    //             delay: 50,
    //             deleteSpeed: 25,
    //           }}
    //         />
    //       </Typography>
    //     </Grid>

    //     <Grid item xs={6} mt={3}>
    //       <Typography variant="h3" gutterBottom>
    //         {"Get in touch!"}
    //       </Typography>

    //       <Grid container spacing={2} justifyContent="center">
    //         <Social
    //           title="GitHub"
    //           href="https://github.com/Seth-McKilla"
    //           imgSrc="/socials/github.svg"
    //         />
    //         <Social
    //           title="Twitter"
    //           href="https://twitter.com/SethMcKilla"
    //           imgSrc="/socials/twitter.svg"
    //         />
    //         <Social
    //           title="Email"
    //           href="mailto:seth@endevrs.dev"
    //           imgSrc="/socials/email.svg"
    //         />
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </Container>
  );
};

export default Home;
