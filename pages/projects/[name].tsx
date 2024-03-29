import fs from "fs";
import { useRouter } from "next/router";
import {
  Flex,
  Container,
  Heading,
  Text,
  Box,
  HStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { FaMoneyCheck } from "react-icons/fa";
import { GiExpense, GiProfit, GiBuyCard } from "react-icons/gi";
import { BiDonateHeart, BiCar } from "react-icons/bi";
import { BasicLayout } from "layouts";
import {
  CardFinancialTotal,
  CardLineGraph,
  LinkButton,
  LinkGitHubSource,
} from "components";
import { toTitleCase } from "utils";

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
        title: toTitleCase(name!),
        description: "My current endeavor.",
        cardImage: "/images/seth-headshot.png",
      }}
    >
      <Flex mt={16} p={{ base: 0, sm: 8 }} flex={1} direction="column">
        <Container maxW="container.lg">
          <Heading
            mt={{ base: 3, sm: 0 }}
            fontSize={{ base: "3xl", sm: "4xl" }}
            mb={5}
          >
            {projectName}
          </Heading>
          <HStack mb={4} spacing={4}>
            <Box w={32}>
              <LinkButton
                href="https://freelancefinesse.com"
                size={8}
                isExternal
              >
                {"Visit ↗️"}
              </LinkButton>
            </Box>
            <Box w={44}>
              <LinkButton href="/sponsors" size={8}>
                {"Show me more"}
              </LinkButton>
            </Box>
          </HStack>
          <Text fontSize="lg" mb={8}>
            {
              "Exciting things are in the works, keep checking in to view the progress! Follow along with the actual code by clicking the GitHub icon in the bottom left corner 😉"
            }
          </Text>
          <Grid
            gap={4}
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(6, 1fr)"
            pb={8}
          >
            <GridItem colSpan={{ base: 6, md: 3, lg: 2 }}>
              <CardLineGraph
                icon={<GiBuyCard size={24} />}
                title="Presales"
                description="Total presales for trailing twelve months."
                data={new Array(12).fill(0)} // Stripe API
                isCurrency
              />
            </GridItem>
            <GridItem colSpan={{ base: 6, md: 3, lg: 2 }}>
              <CardFinancialTotal
                icon={<GiProfit size={24} />}
                title="Total Revenue"
                description="Total gross revenue for this project."
                amount={0} // Stripe API
              />
            </GridItem>
            <GridItem colSpan={{ base: 6, md: 3, lg: 2 }}>
              <CardFinancialTotal
                icon={<GiExpense size={24} />}
                title="Total Expenses"
                description="Total expenses from all sources. Actual line items coming soon!"
                amount={-0.001} // Plaid API
              />
            </GridItem>
            <GridItem colSpan={{ base: 6, md: 3, lg: 2 }}>
              <CardFinancialTotal
                icon={<FaMoneyCheck size={24} />}
                title="Total Profit"
                description="Total profit (i.e. revenue - expenses)."
                amount={0} // Stripe and Plaid APIs
              />
            </GridItem>
            <GridItem colSpan={{ base: 6, md: 3, lg: 2 }}>
              <CardFinancialTotal
                icon={<BiDonateHeart size={24} />}
                title="Altruism"
                description="Total revenue donated to effective charities."
                amount={0} // Manual entry or pulled from Stripe / Plaid API somehow
              />
            </GridItem>
            <GridItem colSpan={{ base: 6, md: 3, lg: 2 }}>
              <CardLineGraph
                icon={<BiCar size={24} />}
                title="Traffic"
                description="Total site traffic for trailing twelve months."
                data={new Array(12).fill(0)} // Plausible API
              />
            </GridItem>
          </Grid>
        </Container>
        <LinkGitHubSource path="projects/[name].tsx" />
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
