import { useRouter } from "next/router";
import { Flex, Container, Heading, Text } from "@chakra-ui/react";

import { BasicLayout } from "layouts";
import { CardSubscribe, LinkGitHubSource } from "components";

import type { NextPage } from "next";

const Projects: NextPage = () => {
  const {
    query: { name },
  } = useRouter();

  return (
    <BasicLayout
      meta={{
        title: "ENDEVRS | Projects",
        description: "A collection of my current and past projects.",
        cardImage: "/images/seth-headshot.png",
      }}
    >
      <Flex mt={16} p={{ base: 0, sm: 8 }} flex={1} direction="column">
        <CardSubscribe />
        <Container maxW="container.lg">
          <Heading
            mt={{ base: 3, sm: 0 }}
            fontSize={{ base: "3xl", sm: "4xl" }}
            mb={5}
          >
            {name}
          </Heading>
          <Text fontSize="xl">
            {"This is a work in progress, check back soon!"}
          </Text>
        </Container>
        <LinkGitHubSource path="projects/index.tsx" />
      </Flex>
    </BasicLayout>
  );
};

export default Projects;
