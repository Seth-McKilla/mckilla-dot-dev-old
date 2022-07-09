import { useState, useEffect } from "react";
import {
  Container,
  Flex,
  Heading,
  Text,
  Image,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { BasicLayout } from "layouts";
import { CardSubscribe, LinkButton, LinkGitHub } from "components";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <BasicLayout
      meta={{
        title: "Welcome to ENDEVRS",
        description: "Seth McKilla's endeavors in software development",
        cardImage: "/images/logo-black.png",
      }}
    >
      <Flex
        p={8}
        flex={1}
        align="center"
        justify="center"
        direction="column"
        minH="100vh"
      >
        <LinkGitHub path="index.tsx" />
        <Container maxW="container.lg">
          <Stack spacing={6} w="full" maxW="lg">
            <Heading
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="medium"
            >
              {"Welcome to"}
            </Heading>
            <Heading
              fontSize={{ base: "5xl", lg: "6xl" }}
              mb={5}
              bgGradient={useColorModeValue(
                "linear(to-r, blue.800, blue.600)",
                "linear(to-r, blue.600, blue.400)"
              )}
              bgClip="text"
              fontWeight="extrabold"
            >
              {"ENDEVRS"}
            </Heading>
            <Text
              fontSize={{
                base: "lg",
                md: "xl",
                lg: "2xl",
              }}
            >
              {
                "Thanks for stopping by to check out my endeavors in software development."
              }
              <br />
              {"See what I've been up to!"}
            </Text>
            <Stack
              spacing={8}
              direction={{
                base: "column",
                md: "row",
              }}
            >
              <LinkButton href="/projects">{"Projects"}</LinkButton>
              <LinkButton href="/posts">{"Posts"}</LinkButton>
            </Stack>
          </Stack>
        </Container>
      </Flex>
      <Flex flex={1} overflow="hidden" minH="100vh">
        <Image
          alt="Login Image"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1569748130764-3fed0c102c59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
          sx={{
            filter: "blur(2px) brightness(40%)",
          }}
        />
      </Flex>
      <CardSubscribe />
    </BasicLayout>
  );
};

export default Home;
