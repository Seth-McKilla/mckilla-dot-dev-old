import { Container, Flex, Heading, Text, Image, Stack } from "@chakra-ui/react";
import { Layout } from "components";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout
      title="Welcome to ENDEVRS"
      description="Seth McKilla's endeavors in software development"
    >
      <Flex p={8} flex={1} align="center" justify="center" direction="column">
        <Container maxW="container.lg">
          <Stack spacing={6} w="full" maxW="lg">
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
              {
                "I'm Seth, a self-taught full stack JavaScript developer from the East Coast of the US."
              }
              <br />
              {
                "Thanks for stopping by to check out my endeavors in software development!"
              }
            </Text>
          </Stack>
        </Container>
      </Flex>
      <Flex flex={1} overflow="hidden">
        <Image
          alt="Login Image"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1569748130764-3fed0c102c59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
          sx={{
            filter: "blur(3px) brightness(40%)",
          }}
        />
      </Flex>
    </Layout>
  );
};

export default Home;
