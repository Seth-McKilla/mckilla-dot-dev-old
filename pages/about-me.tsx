import Image from "next/image";
import type { NextPage } from "next";
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
import { Layout, LinkIcon } from "components";
import { shuffle } from "utils";
import headShot from "../public/seth-headshot.png";

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
      description="Get to know what I'm all about."
    >
      <Flex p={8} flex={1} align="center" justify="center" direction="column">
        <Container maxW="container.lg">
          <VStack>
            <Box
              sx={{
                zIndex: 10,
                height: "250px",
                width: "250px",
                border: `5px solid blue.700`,
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

            <Heading fontSize={{ base: "xl", lg: "3xl" }}>
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

            <Text fontSize="lg" pt={5}>
              {"Want to know more? Let's connect!"}
            </Text>

            <HStack spacing={6} pt={5}>
              <LinkIcon
                label="Twitter"
                href="https://twitter.com/sethmckilla"
                size={14}
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
