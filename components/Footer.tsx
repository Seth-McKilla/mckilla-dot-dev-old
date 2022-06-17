import Link from "next/link";
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { SocialButton } from "components";

export default function Footer() {
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
        <Stack direction={"row"} spacing={6} p={2}>
          <Link href="/">Home</Link>
          <Link href="mailto:seth@endevrs.dev">Contact</Link>
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
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text fontSize="small">
            © {new Date().getFullYear()} ENDEVRS, LLC. All rights reserved
          </Text>
          <Stack direction="row" spacing={6}>
            <SocialButton
              label="Twitter"
              href="https://twitter.com/sethmckilla"
            >
              <FaTwitter />
            </SocialButton>
            <SocialButton label="GitHub" href="https://github.com/seth-mckilla">
              <FaGithub />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
