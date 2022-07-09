import Head from "next/head";
import { Stack } from "@chakra-ui/react";

import type { ReactNode } from "react";
import type { Meta } from "types";

interface Props {
  children: ReactNode;
  meta: Meta;
}

export default function BasicLayout({ children, meta }: Props) {
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
      </Head>

      <Stack minH="100vh" direction={{ base: "column", md: "row" }}>
        {children}
      </Stack>
    </>
  );
}
