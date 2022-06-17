import Head from "next/head";
import { Stack } from "@chakra-ui/react";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function Layout({ children, title, description }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack minH="100vh" direction={{ base: "column", md: "row" }}>
        {children}
      </Stack>
    </>
  );
}
