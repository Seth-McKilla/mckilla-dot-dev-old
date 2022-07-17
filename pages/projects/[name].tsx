import fs from "fs";
import { useRouter } from "next/router";
import { Flex, Container, Heading, Text } from "@chakra-ui/react";

import { BasicLayout } from "layouts";
import { CardSubscribe, LinkGitHubSource } from "components";

import type { NextPage, GetStaticPropsContext } from "next";
import type { Project } from "types";

const Projects: NextPage = () => {
  const {
    query: { name },
  } = useRouter();

  const projectName = name?.toString().replace(/-/g, " ");

  return (
    <BasicLayout
      meta={{
        title: `ENDEVRS ${projectName ? "| " + projectName : ""}`,
        description: "My current endeavor.",
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
            {projectName}
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

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const projectsJSON = fs.readFileSync("data/projects.json", "utf8");
  const projects = JSON.parse(projectsJSON);

  if (!projects.find((project: Project) => project.name === params?.name)) {
    return {
      props: {
        statusCode: 404,
      },
    };
  }

  return {
    props: {},
  };
}

export async function getStaticPaths() {
  const projectsJSON = fs.readFileSync("data/projects.json", "utf8");
  const projects = JSON.parse(projectsJSON);

  return {
    paths: projects.map((project: Project) => ({
      params: { name: project.name },
    })),
    fallback: false,
  };
}

export default Projects;
