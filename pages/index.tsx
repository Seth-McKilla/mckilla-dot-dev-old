import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import { Layout } from "components";

export default function Home() {
  return (
    <Layout
      title="Welcome to ENDEVRS"
      description="Seth McKilla's endeavors in software development"
    >
      <Flex p={8} flex={1} align="center" justify="center" direction="column">
        <Container maxW="container.lg">
          <Heading
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="medium"
          >
            Welcome to
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
            ENDEVRS
          </Heading>
          <Text
            fontSize={{
              base: "lg",
              md: "xl",
              lg: "2xl",
            }}
          >
            {"I'm Seth, a full-stack web developer."}
            <br />
            {
              "Thanks for stopping by to check out my endeavors in software development!"
            }
          </Text>
        </Container>
      </Flex>
    </Layout>
  );
}
