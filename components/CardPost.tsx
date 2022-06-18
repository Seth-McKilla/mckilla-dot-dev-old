import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import type { Post } from "types";

export default function CardPost({
  title,
  series,
  tags,
  excerpt,
  image,
  date,
  readTime,
  slug,
}: Post) {
  return (
    <Center py={6}>
      <Box
        as={motion.div}
        maxW={{ base: 300, md: 350 }}
        w="full"
        bg={useColorModeValue("white", "gray.900")}
        boxShadow="2xl"
        rounded="md"
        p={6}
        overflow="hidden"
        cursor="pointer"
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.975 }}
      >
        <Box h="250px" bg="gray.100" mt={-6} mx={-6} mb={6} pos="relative">
          <Image src={image} layout="fill" alt="preview image" />
        </Box>
        <Stack>
          <Text
            color="green.500"
            textTransform="uppercase"
            fontWeight={800}
            fontSize="sm"
            letterSpacing={1.1}
          >
            {series}
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize="2xl"
            fontFamily="body"
          >
            {title}
          </Heading>
          <Text color={useColorModeValue("gray.700", "gray.300")}>
            {excerpt}
          </Text>
        </Stack>
        <Text color={"gray.400"} mb={4} mt={2} fontSize="sm">
          {new Date(date).toLocaleDateString()} • {readTime} min read
        </Text>
        <Wrap>
          {tags.split(",").map((tag, idx) => (
            <WrapItem key={`${idx}-${tag}`}>
              <Tag p={1} size="sm" variant="solid" colorScheme="blue">
                {tag}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Center>
  );
}
