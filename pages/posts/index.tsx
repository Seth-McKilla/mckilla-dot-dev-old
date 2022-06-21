import { Fragment } from "react";
import { Flex, Container, Heading, HStack } from "@chakra-ui/react";
import { CardPost } from "components";
import { BasicLayout } from "layouts";
import { getAllPosts } from "lib";

import type { NextPage } from "next";
import type { Post } from "types";

interface Props {
  posts: Post[];
}

const Posts: NextPage<Props> = ({ posts }) => (
  <BasicLayout
    meta={{
      title: "ENDEVRS | Posts",
      description:
        "A list of articles on various web development topics including SaaS, NextJS, and Typescript.",
      cardImage: "/images/logo-black.png",
    }}
  >
    <Flex mt={20} p={{ base: 0, sm: 8 }} flex={1} direction="column">
      <Container maxW="container.lg">
        <Heading fontSize={{ base: "3xl", sm: "5xl" }} mb={{ base: 0, sm: 5 }}>
          Featured Posts
        </Heading>

        <HStack justify={{ base: "center", sm: "left" }}>
          {posts?.map((post: Post, idx) => (
            <Fragment key={`${idx}-${post.slug}`}>
              <CardPost {...post} />
            </Fragment>
          ))}
        </HStack>
      </Container>
    </Flex>
  </BasicLayout>
);

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
}

export default Posts;
