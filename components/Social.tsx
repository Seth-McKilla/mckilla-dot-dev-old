import Image from "next/image";
import _ from "lodash";

interface Props {
  title: string;
  href: string;
  imgSrc: string;
}

export default function SocialLink({ title, href, imgSrc }: Props) {
  return (
    <div>Social</div>
    // <Grid item xs={3}>
    //   <a href={href} target="__blank">
    //     <Tooltip title={title}>
    //       <IconButton
    //         sx={{
    //           "&:hover": {
    //             boxShadow: `0px 0px 15px ${theme.palette.info.main}`,
    //           },
    //         }}
    //       >
    //         <Image
    //           src={imgSrc}
    //           alt={_.kebabCase(title)}
    //           height={40}
    //           width={40}
    //         />
    //       </IconButton>
    //     </Tooltip>
    //   </a>
    // </Grid>
  );
}
