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
import { FaNodeJs, FaGithub, FaTwitter } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiChakraui,
  SiMaterialui,
  SiMongodb,
  SiJavascript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiPrisma,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BasicLayout } from "layouts";
import { LinkGitHubSource, LinkIcon } from "components";
import { shuffle } from "utils";

import type { NextPage } from "next";

const passions = [
  "all things javascript.",
  "React and the NextJS framework in particular.",
  "the Legend of Zelda series.",
  "Software as a Service.",
  "the occasional hackathon.",
  "solving interesting problems with software.",
  "talking with / teaching others about software.",
  "collaborating with people who also have a passion for software.",
  "entrepreneurial ventures within the tech space.",
  "consistently learning new things.",
  "getting my hands dirty by exploring new technology.",
  "meditation and self-betterment.",
];

const AboutMe: NextPage = () => (
  <BasicLayout
    meta={{
      title: "ENDEVRS | About me",
      description: "Get to know more about Seth.",
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
      <LinkGitHubSource path="about-me.tsx" />
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
              src="/images/seth-headshot.png"
              alt="seth-headshot"
              width={250}
              height={250}
            />
          </Box>

          <Heading fontSize={{ base: "xl", lg: "3xl" }} pb={4}>
            {"Hey, I'm Seth!"}
          </Heading>
          <Text>
            {"A self-taught full stack JS dev from the East Coast US."}
          </Text>
          <Text>{"Some things I'm passionate about..."}</Text>
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
            {"Stack Specialties"}
          </Heading>
          <HStack spacing={6}>
            <LinkIcon
              label="Javascript"
              href="https://www.javascript.com/"
              size={14}
              hoverColor="#F0DB4F"
            >
              <SiJavascript />
            </LinkIcon>
            <LinkIcon
              label="Typescript"
              href="https://www.typescriptlang.org/"
              size={14}
              hoverColor="blue.600"
            >
              <SiTypescript />
            </LinkIcon>
            <LinkIcon
              label="React"
              href="https://reactjs.org/"
              size={14}
              hoverColor="#61DAFB"
            >
              <SiReact />
            </LinkIcon>
            <LinkIcon
              label="Redux"
              href="https://redux.js.org/"
              size={14}
              hoverColor="#764ABC"
            >
              <SiRedux />
            </LinkIcon>
          </HStack>
          <HStack spacing={6}>
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
            <LinkIcon
              label="MaterialUI"
              href="https://mui.com/"
              size={14}
              hoverColor="#007FFF"
            >
              <SiMaterialui />
            </LinkIcon>
            <LinkIcon
              label="TailwindCSS"
              href="https://tailwindcss.com/"
              size={14}
              hoverColor="#38bDF8"
            >
              <SiTailwindcss />
            </LinkIcon>
          </HStack>
          <HStack spacing={6}>
            <LinkIcon
              label="NodeJS"
              href="https://nodejs.org/en/"
              size={14}
              hoverColor="#68A063"
            >
              <FaNodeJs />
            </LinkIcon>
            <LinkIcon
              label="Prisma"
              href="https://www.prisma.io/"
              size={14}
              hoverColor="#5A67D8"
            >
              <SiPrisma />
            </LinkIcon>
            <LinkIcon
              label="MongoDB"
              href="https://www.mongodb.com/"
              size={14}
              hoverColor="#3FA037"
            >
              <SiMongodb />
            </LinkIcon>
            <LinkIcon
              label="MySQL"
              href="https://www.mysql.com/"
              size={14}
              hoverColor="#00758F"
            >
              <GrMysql />
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
  </BasicLayout>
);

export default AboutMe;
