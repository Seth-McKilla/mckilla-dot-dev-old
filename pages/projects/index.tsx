import { Flex, Container, Heading, VStack } from "@chakra-ui/react";

import { BasicLayout } from "layouts";
import { LinkGitHub } from "components";

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
      <LinkGitHub path="projects/index" />
      <Container maxW="container.lg">
        <VStack>
          <Heading as="h1" size="xl">
            {"Projects placeholder"}
          </Heading>
        </VStack>
      </Container>
    </Flex>
  </BasicLayout>
);

export default Projects;
