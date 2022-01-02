import Head from "next/head";
import type { NextPage } from "next";
import { useState } from "react";

// Mui
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

// Components
import { Container } from "../../components";

type Post = {
  image: string;
  title: string;
  tags: string[];
  description: string;
};

const Posts: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;

    setSearch(search);
    setPosts(
      posts.filter((post: Post) =>
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

        <Grid item xs={12}>
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
      </Grid>
    </Container>
  );
};

export default Posts;
