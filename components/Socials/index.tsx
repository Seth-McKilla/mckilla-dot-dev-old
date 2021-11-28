import SocialLink from "./SocialLink";

// Mui
import Grid from "@mui/material/Grid";

const Socials = () => {
  return (
    <Grid container spacing={2}>
      <SocialLink
        title="GitHub"
        href="https://github.com/Seth-McKilla"
        imgSrc="/socials/github.svg"
      />
      <SocialLink
        title="Twitter"
        href="https://twitter.com/SethMcKilla"
        imgSrc="/socials/twitter.svg"
      />
      <SocialLink
        title="GitCoin"
        href="https://gitcoin.co/seth-mckilla"
        imgSrc="/socials/gitcoin.svg"
      />
      <SocialLink
        title="Email"
        href="mailto:seth@endevrs.dev"
        imgSrc="/socials/email.svg"
      />
    </Grid>
  );
};

export default Socials;
