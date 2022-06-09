import { useRouter } from "next/router";
import type { NextPage } from "next";
import ErrorPage from "next/error";
import { getPostBySlug, getAllPosts } from "../../../lib/api";
import mdToHtml from "../../../lib/mdToHtml";

// Components
import { Container } from "../../../components";

// Types
import type { PostCardProps } from "../../../components";

type Props = {
  post: PostCardProps;
};

const Post: NextPage<Props> = (props: Props) => {
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
  console.log(params);
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