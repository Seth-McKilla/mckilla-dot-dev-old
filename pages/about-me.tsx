import Image from "next/image";
import Typewriter from "typewriter-effect";
import {
  Flex,
  Container,
  Box,
  Heading,
  Text,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiChakraui,
  SiVercel,
} from "react-icons/si";
import { Layout, LinkIcon } from "components";
import { shuffle } from "utils";
import headShot from "../public/seth-headshot.png";

import type { NextPage } from "next";

const passions = [
  "all things javascript.",
  "React and the NextJS framework in particular.",
  "the Legend of Zelda series.",
  "Software as a Service.",
  "the occassional hackathon.",
  "solving interesting problems with software.",
  "talking with / teaching others about software.",
  "collaborating with people who also have a passion for software.",
  "entrepreneurial ventures within the tech space.",
  "consistently learning new things.",
  "getting my hands dirty by exploring new technology.",
  "meditation and self-betterment.",
];

const AboutMe: NextPage = () => {
  return (
    <Layout
      title="ENDEVRS | About me"
      description="Get to know more about Seth."
    >
      <Flex
        p={8}
        mt={20}
        flex={1}
        align="center"
        justify="center"
        direction="column"
      >
        <Container maxW="container.lg">
          <VStack>
            <Box
              sx={{
                height: "250px",
                width: "250px",
                backgroundColor: "blue.700",
                borderRadius: "50%",
                boxShadow: "0 10px 15px 0px rgba(0, 0, 0, 0.8)",
                animation: "logo-float 5s ease-in-out infinite",
                "@keyframes logo-float": {
                  "0%": {
                    boxShadow: "0 10px 15px 0px rgba(0, 0, 0, 0.8)",
                    transform: "translatey(0px)",
                  },
                  "50%": {
                    boxShadow: "0 35px 15px 0px rgba(0, 0, 0, 0.4)",
                    transform: "translatey(-25px)",
                  },
                  "100%": {
                    boxShadow: "0 10px 15px 0px rgba(0, 0, 0, 0.8)",
                    transform: "translatey(0px)",
                  },
                },
              }}
              mb={5}
            >
              <Image
                width={250}
                height={250}
                src={headShot}
                alt="seth-headshot"
              />
            </Box>

            <Heading fontSize={{ base: "xl", lg: "3xl" }} pb={4}>
              {"Get to know me!"}
            </Heading>
            <Text>{"Some things I'm passionate about are..."}</Text>
            <Typewriter
              options={{
                strings: shuffle(passions),
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 25,
              }}
            />

            <Heading fontSize={{ base: "xl", lg: "3xl" }} pt={4} pb={4}>
              {"Preferred Stack"}
            </Heading>
            <HStack spacing={6}>
              <LinkIcon
                label="Typescript"
                href="https://typescript.org/"
                size={14}
                hoverColor="blue.600"
              >
                <SiTypescript />
              </LinkIcon>
              <LinkIcon label="NextJS" href="https://nextjs.org/" size={14}>
                <SiNextdotjs />
              </LinkIcon>
              <LinkIcon
                label="Chakra UI"
                href="https://chakra-ui.com/"
                size={14}
                hoverColor="teal.500"
              >
                <SiChakraui />
              </LinkIcon>
              <LinkIcon label="Vercel" href="https://vercel.com/" size={14}>
                <SiVercel />
              </LinkIcon>
            </HStack>

            <Heading fontSize={{ base: "xl", lg: "2xl" }} pt={5}>
              {"Want to know more?"}
            </Heading>
            <Heading fontSize={{ base: "xl", lg: "2xl" }}>
              {"Let's connect!"}
            </Heading>
            <HStack spacing={6} pt={5}>
              <LinkIcon
                label="Twitter"
                href="https://twitter.com/sethmckilla"
                size={14}
                hoverColor="twitter.500"
              >
                <FaTwitter />
              </LinkIcon>
              <LinkIcon
                label="GitHub"
                href="https://github.com/seth-mckilla"
                size={14}
              >
                <FaGithub />
              </LinkIcon>
            </HStack>
          </VStack>
        </Container>
      </Flex>
    </Layout>
  );
};

export default AboutMe;
