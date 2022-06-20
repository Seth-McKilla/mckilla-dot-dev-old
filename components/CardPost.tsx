import Link from "next/link";
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

export default function CardPost({ slug, meta }: Post) {
  const { title, series, tags, description, image, date, readTime } = meta;

  return (
    <Center py={6}>
      <Link href={`/posts/${slug}`}>
        <Box
          as={motion.div}
          maxW={{ base: 300, sm: 350 }}
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
              {description}
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
      </Link>
    </Center>
  );
}
