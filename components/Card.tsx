import Link from "next/link";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href?: string;
}

export default function Card({ children, href }: Props) {
  const CardComponent = () => (
    <Box
      as={motion.div}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow="2xl"
      rounded="md"
      p={5}
      overflow="hidden"
      cursor={href ? "pointer" : "default"}
      whileHover={{ scale: href ? 1.025 : 1 }}
      whileTap={{ scale: href ? 0.975 : 1 }}
    >
      {children}
    </Box>
  );

  return href ? (
    <Link href={href}>
      <a>
        <CardComponent />
      </a>
    </Link>
  ) : (
    <CardComponent />
  );
}
