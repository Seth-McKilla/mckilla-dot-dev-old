import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { Container } from "@chakra-ui/react";
import { getPostBySlug, getAllPosts, mdToHtml } from "lib";

import type { NextPage } from "next";
import type { Post } from "types";

interface Props {
  post: Post;
}

const Post: NextPage<Props> = (props) => {
  const { post } = props;
  const router = useRouter();
  const { slug } = router.query;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Container>
      <h1>{slug}</h1>
    </Container>
  );
};

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "series",
    "tags",
    "excerpt",
    "image",
    "date",
    "slug",
  ]);
  const content = await mdToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Post;
