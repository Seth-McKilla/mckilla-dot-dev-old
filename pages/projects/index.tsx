import fs from "fs";
import { Flex, Container, Heading, Text } from "@chakra-ui/react";

import { BasicLayout } from "layouts";
import { CardProject, CardSubscribe, LinkGitHubSource } from "components";

import type { NextPage } from "next";
import type { Project } from "types";

interface Props {
  projects: Project[];
}

const Projects: NextPage<Props> = ({ projects }) => {
  const currentProject = projects.find(({ status }) => status === "current")!;

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
            mb={{ base: 0, sm: 5 }}
            textAlign={{
              base: "center",
              sm: "left",
            }}
          >
            {"Current Endeavor"}
          </Heading>
          <CardProject {...currentProject} />
        </Container>
        <LinkGitHubSource path="projects/index.tsx" />
      </Flex>
    </BasicLayout>
  );
};

export async function getStaticProps() {
  const projectsJSON = fs.readFileSync("data/projects.json", "utf8");
  const projects = JSON.parse(projectsJSON);

  return {
    props: {
      projects,
    },
  };
}

export default Projects;
