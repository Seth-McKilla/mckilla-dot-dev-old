import { Flex, Container } from "@chakra-ui/react";
import { Layout } from "components";
import { getAllPosts, getPostBySlug, markdownToHtml } from "lib";

import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import type { Post } from "types";

const Post: NextPage<Post> = ({ meta, content }) => (
  <Layout title={`ENDEVRS | ${meta.title}`} description={meta.description}>
    <Flex mt={20} p={{ base: 0, sm: 8 }} flex={1} direction="column">
      <Container maxW="container.lg">
        <article dangerouslySetInnerHTML={{ __html: content }} />
      </Container>
    </Flex>
  </Layout>
);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params!.slug as string);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      ...post,
      content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();

  return {
    paths: posts.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

export default Post;
