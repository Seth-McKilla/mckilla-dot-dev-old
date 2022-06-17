import Image from "next/image";
import _ from "lodash";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

type SocialLinkProps = {
  title: string;
  href: string;
  imgSrc: string;
};

export default function SocialLink(props: SocialLinkProps) {
  const { title, href, imgSrc } = props;

  const theme = useTheme();

  return (
    <Grid item xs={3}>
      <a href={href} target="__blank">
        <Tooltip title={title}>
          <IconButton
            sx={{
              "&:hover": {
                boxShadow: `0px 0px 15px ${theme.palette.info.main}`,
              },
            }}
          >
            <Image
              src={imgSrc}
              alt={_.kebabCase(title)}
              height={40}
              width={40}
            />
          </IconButton>
        </Tooltip>
      </a>
    </Grid>
  );
}
