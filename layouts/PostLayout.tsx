import Head from "next/head";
import { useRouter } from "next/router";
import { Stack, Flex, Container } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import { LinkGitHubSource, MDXComponents } from "components";

import type { ReactNode } from "react";
import type { Meta } from "types";

interface Props {
  children: ReactNode;
  meta: Meta;
}

export default function PostLayout({ children, meta }: Props) {
  const { pathname } = useRouter();

  return (
    <MDXProvider components={MDXComponents}>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta
          property="og:image"
          content={meta.cardImage || "/images/logo-black.png"}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta
          name="twitter:image"
          content={meta.cardImage || "/images/logo-black.png"}
        />
      </Head>

      <Stack minH="100vh">
        <Flex mt={20} p={{ base: 0, sm: 8 }} flex={1} direction="column">
          <LinkGitHubSource path={`posts/${pathname.split("/").pop()}.mdx`} />
          <Container maxW="container.lg">{children}</Container>
        </Flex>
      </Stack>
    </MDXProvider>
  );
}
