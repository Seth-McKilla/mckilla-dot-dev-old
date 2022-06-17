import { Flex, Heading } from "@chakra-ui/react";
import { Layout } from "components";

export default function Home() {
  return (
    <Layout
      title="Welcome to ENDEVRS"
      description="Seth McKilla's endeavors in software development"
    >
      <Flex p={8} flex={1} align="center" justify="center" direction="column">
        <Heading>Welcome to ENDEVRS!</Heading>
      </Flex>
    </Layout>
  );
}
