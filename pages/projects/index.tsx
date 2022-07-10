import { Flex, Container, Heading, VStack } from "@chakra-ui/react";

import { BasicLayout } from "layouts";
import { CardSubscribe, LinkGitHubSource } from "components";

import type { NextPage } from "next";

const Projects: NextPage = () => (
  <BasicLayout
    meta={{
      title: "ENDEVRS | Projects",
      description: "A collection of my current and past projects.",
      cardImage: "/images/seth-headshot.png",
    }}
  >
    <Flex
      p={8}
      mt={20}
      flex={1}
      align="center"
      justify="center"
      direction="column"
    >
      <LinkGitHubSource path="projects/index.tsx" />
      <Container maxW="container.lg">
        <VStack>
          <Heading as="h1" size="xl">
            {"Projects placeholder"}
          </Heading>
        </VStack>
      </Container>
      <CardSubscribe />
    </Flex>
  </BasicLayout>
);

export default Projects;
