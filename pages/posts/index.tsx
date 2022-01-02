import Head from "next/head";
import type { NextPage } from "next";
import { useState } from "react";
import { getAllPosts } from "../../lib/api";

// Mui
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

// Components
import { Container, PostCard } from "../../components";
// Types
import type { PostCardProps } from "../../components";

type Props = {
  allPosts: PostCardProps[];
};

const Posts: NextPage<Props> = (props: Props) => {
  const { allPosts } = props;

  const [posts, setPosts] = useState<PostCardProps[]>(allPosts);
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;

    setSearch(search);
    setPosts(
      allPosts.filter((post: PostCardProps) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <Container>
      <Head>
        <title>ENDEVRS | Posts</title>
        <meta name="description" content="ENDEVRS - Posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container spacing={3} direction="column" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h2" align="center">
            Posts
          </Typography>
        </Grid>

        <Grid item xs={12} mb={5}>
          <TextField
            label="Search Posts"
            placeholder="Search by title, tag, etc."
            sx={{
              minWidth: "300px",
              textAlign: "center",
              [`& fieldset`]: {
                borderRadius: 5,
              },
            }}
            value={search}
            onChange={handleChange}
          />
        </Grid>

        <Grid container item xs={12}>
          {posts?.map((post: PostCardProps) => (
            <Grid key={post.slug} item xs={12} sm={6} md={4}>
              <PostCard {...post} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Posts;

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "series",
    "tags",
    "excerpt",
    "image",
    "date",
    "slug",
  ]);

  return {
    props: { allPosts },
  };
}
