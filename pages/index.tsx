import Image from "next/image";
import {
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { BasicLayout } from "layouts";
import { LinkButton, LinkGitHubSource } from "components";

import type { NextPage } from "next";

const Home: NextPage = () => {
  const { colorMode } = useColorMode();

  return (
    <BasicLayout
      meta={{
        title: "ENDEVRS",
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
        <LinkGitHubSource path="index.tsx" />
        <Container maxW="container.lg">
          <Stack spacing={6} w="full" maxW="lg">
            <Heading
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
              fontWeight="medium"
              mb={4}
            >
              {"Welcome to"}
            </Heading>
            <Image
              src={`/images/logo/full-${colorMode}.png`}
              alt="endevrs-logo"
              placeholder="blur"
              blurDataURL={`/images/logo/full-${colorMode}.png`}
              width={602}
              height={108}
            />
            <Text
              fontSize={{
                base: "lg",
                md: "xl",
                lg: "2xl",
              }}
            >
              {
                "Follow along in my endeavors to create profitable software by developing "
              }
              <em>mostly</em>
              {" bootstrapped web applications in public."}
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
          src="https://images.unsplash.com/photo-1569748130764-3fed0c102c59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80"
          width={2400}
          height={1600}
          alt="Coding IDE"
          placeholder="blur"
          blurDataURL="https://images.unsplash.com/photo-1569748130764-3fed0c102c59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80"
          objectFit="cover"
          style={{
            filter: "blur(2px) brightness(0.5)",
          }}
        />
      </Flex>
    </BasicLayout>
  );
};

export default Home;
