import Link from "next/link";
import {
  Box,
  Button,
  Container,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaMoon, FaSun, FaTwitter } from "react-icons/fa";
import { LinkIcon } from "components";

export default function NavFooter() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW="6xl"
        py={2}
        spacing={4}
        justify="center"
        align="center"
      >
        <Stack direction="row" align="center" spacing={6} p={2}>
          <Link href="/">{"Home"}</Link>
          <Link href="mailto:seth@endevrs.dev">{"Contact"}</Link>
          <Link href="https://github.com/sponsors/Seth-McKilla" passHref>
            <a target="_blank" rel="noopener noreferrer">
              {"Sponsor"}
            </a>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <FaMoon /> : <FaSun />}
          </Button>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle="solid"
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW="6xl"
          py={2}
          direction={{ base: "column", sm: "row" }}
          spacing={4}
          justify={{ base: "center", sm: "space-between" }}
          align={{ base: "center", sm: "center" }}
        >
          <Text fontSize="small">
            {"©"} {new Date().getFullYear()}{" "}
            {"ENDEVRS, LLC. All rights reserved."}
          </Text>
          <Stack direction="row" spacing={6}>
            <LinkIcon label="Twitter" href="https://twitter.com/sethmckilla">
              <FaTwitter />
            </LinkIcon>
            <LinkIcon label="GitHub" href="https://github.com/seth-mckilla">
              <FaGithub />
            </LinkIcon>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
