import { Box, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function CardProject({ children }: Props) {
  return (
    <Box
      as={motion.div}
      maxW={{ base: "auto", sm: 350 }}
      w="full"
      bg={useColorModeValue("white", "gray.900")}
      boxShadow="2xl"
      rounded="md"
      p={5}
      overflow="hidden"
      cursor="pointer"
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
    >
      {children}
    </Box>
  );
}
