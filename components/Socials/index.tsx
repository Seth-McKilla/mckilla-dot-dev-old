import SocialLink from "./SocialLink";

// Mui
import Grid from "@mui/material/Grid";

export default function Socials() {
  return (
    <Grid container spacing={2} justifyContent="center">
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
        title="Email"
        href="mailto:seth@endevrs.dev"
        imgSrc="/socials/email.svg"
      />
    </Grid>
  );
}
