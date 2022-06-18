import { useState } from "react";
import {
  Box,
  Flex,
  Container,
  SimpleGrid,
  Heading,
  Input,
} from "@chakra-ui/react";
import { Layout, CardPost } from "components";
import { getAllPosts } from "lib";

import type { NextPage } from "next";
import type { Post } from "types";

interface Props {
  allPosts: Post[];
}

const Posts: NextPage<Props> = ({ allPosts }) => {
  const [posts, setPosts] = useState<Post[]>(allPosts);
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;

    setSearch(search);
    setPosts(
      allPosts.filter((post: Post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <Layout
      title="ENDEVRS | Posts"
      description="Posts created by Seth on various web development topics."
    >
      <Flex p={8} mt={20} flex={1} align="center" direction="column">
        <Container maxW="container.lg">
          <Heading fontSize={{ base: "3xl", lg: "5xl" }} mb={5}>
            Posts
          </Heading>

          <Input
            placeholder="Search posts by title, tag, etc."
            value={search}
            onChange={handleChange}
            mb={5}
          />

          <SimpleGrid minChildWidth="120px" spacing="40px">
            {posts?.map((post: Post, idx) => (
              <Box key={`${idx}-${post.slug}`}>
                <CardPost {...post} />
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Flex>
    </Layout>
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
