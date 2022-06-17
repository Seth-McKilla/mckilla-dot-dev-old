import Link from "next/link";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

import type { Post } from "types";

export default function PostPreview(props: Post) {
  const { title, series, tags, excerpt, image, date, slug } = props;

  return (
    <Card
      component={motion.div}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: 0.95 }}
      elevation={10}
    >
      {/* <Link href={`/posts/${slug}`} passHref> */}
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
          sx={{ height: 200 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            color="text.secondary"
          >
            {series}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {new Date(date).toLocaleDateString()}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {excerpt}
          </Typography>
          <Stack direction="row" spacing={1} mb={2}>
            {tags?.split(",").map((tag, idx) => (
              <Chip key={`${idx}-${tag}`} label={tag} variant="outlined" />
            ))}
          </Stack>
        </CardContent>
      </CardActionArea>
      {/* </Link> */}
    </Card>
  );
}
