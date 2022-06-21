import Head from "next/head";
import { Stack } from "@chakra-ui/react";

import type { ReactNode } from "react";
import type { Meta as MetaType } from "types";

interface Props {
  children: ReactNode;
  meta: MetaType;
}

export default function PostLayout({ children, meta }: Props) {
  return (
    <>
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

      <Stack minH="100vh" direction={{ base: "column", md: "row" }}>
        {children}
      </Stack>
    </>
  );
}
