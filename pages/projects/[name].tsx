import fs from "fs";
import { useRouter } from "next/router";
import { Flex, Container, Heading, Text } from "@chakra-ui/react";
import { GiExpense } from "react-icons/gi";
import { BasicLayout } from "layouts";
import {
  CardFinancialTotal,
  DialogSubscribe,
  LinkGitHubSource,
} from "components";

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
        <DialogSubscribe />
        <Container maxW="container.lg">
          <Heading
            mt={{ base: 3, sm: 0 }}
            fontSize={{ base: "3xl", sm: "4xl" }}
            mb={5}
          >
            {projectName}
          </Heading>
          <Text fontSize="lg" mb={8}>
            {
              "Exciting things are in the works, keep checking in to view the progress! Follow along with the actual code by clicking the GitHub icon in the bottom left corner 😉"
            }
          </Text>
          <CardFinancialTotal
            icon={<GiExpense size={24} />}
            title="Total Expenses"
            description="Total expenses for this project. Actual line items coming soon!"
            amount={0}
          />
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
