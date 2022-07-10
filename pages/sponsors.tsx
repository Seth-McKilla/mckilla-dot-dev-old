import { Flex, Container, Heading, VStack } from "@chakra-ui/react";

import { BasicLayout } from "layouts";
import { LinkGitHubSource } from "components";

import type { NextPage } from "next";

const Sponsors: NextPage = () => (
  <BasicLayout
    meta={{
      title: "ENDEVRS | Sponsors",
      description: "A thank you to my Diamond Sponsors.",
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
      <LinkGitHubSource path="sponsors.tsx" />
      <Container maxW="container.lg">
        <VStack>
          <Heading as="h1" size="xl">
            {"Sponsors placeholder"}
          </Heading>
        </VStack>
      </Container>
    </Flex>
  </BasicLayout>
);

export default Sponsors;
