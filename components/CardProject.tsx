import Link from "next/link";
import Image from "next/image";
import { Box, Heading, Text, Stack, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

import type { Project } from "types";

export default function CardProject({
  image,
  name,
  started,
  description,
  revenueType,
  revenueAmount,
}: Project) {
  return (
    <Link href={`/projects/${name}`}>
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
        <Box h="250px" bg="gray.100" mt={-6} mx={-6} mb={6} pos="relative">
          <Image
            src={`/images/projects/${name}/${image}`}
            layout="fill"
            alt="preview-image"
            placeholder="blur"
            blurDataURL={`/images/projects/${name}/${image}`}
          />
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize="2xl"
            fontFamily="body"
          >
            {name}
          </Heading>
          <Text color={useColorModeValue("gray.500", "gray.300")}>
            {"Started:"} {new Date(started).toLocaleDateString()}
          </Text>
          <Text color={useColorModeValue("gray.700", "gray.300")}>
            {description}
          </Text>
          <Stack isInline spacing={2} alignItems="center">
            <Text fontSize="xl">{`${revenueType}:`}</Text>
            <Text color="green.500" fontSize="2xl">
              {revenueAmount.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                currencyDisplay: "symbol",
              })}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Link>
  );
}
