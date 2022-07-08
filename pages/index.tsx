import {
  Container,
  Flex,
  Heading,
  Text,
  Image,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { BasicLayout } from "layouts";
import { LinkButton, LinkGitHub } from "components";

import type { NextPage } from "next";

const Home: NextPage = () => (
  <BasicLayout
    meta={{
      title: "Welcome to ENDEVRS",
      description: "Seth McKilla's endeavors in software development",
      cardImage: "/images/logo-black.png",
    }}
  >
    <Flex p={8} flex={1} align="center" justify="center" direction="column">
      <LinkGitHub path="index" />
      <Container maxW="container.lg">
        <Stack spacing={6} w="full" maxW="lg">
          <Heading
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="medium"
          >
            {"Welcome to"}
          </Heading>
          <Heading
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            mb={5}
            bgGradient={[
              "linear(to-t, blue.800, blue.300)",
              "linear(to-b, blue.300, blue.800)",
            ]}
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
              "I'm Seth, a self-taught full stack JavaScript developer from the East Coast US."
            }
            <br />
            {
              "Thanks for stopping by to check out my endeavors in software development!"
            }
          </Text>
          <HStack spacing={8}>
            <LinkButton href="/about-me" label="About Me" />
            <LinkButton href="/projects" label="Projects" />
          </HStack>
        </Stack>
      </Container>
    </Flex>
    <Flex flex={1} overflow="hidden">
      <Image
        alt="Login Image"
        objectFit="cover"
        src="https://images.unsplash.com/photo-1569748130764-3fed0c102c59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
        sx={{
          filter: "blur(2px) brightness(40%)",
        }}
      />
    </Flex>
  </BasicLayout>
);

export default Home;
