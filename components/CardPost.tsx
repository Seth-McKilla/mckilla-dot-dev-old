import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  HStack,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";

import type { Post } from "types";

export default function CarPost({
  title,
  series,
  tags,
  excerpt,
  image,
  date,
  slug,
}: Post) {
  return (
    <Center py={6}>
      <Box
        maxW="sm"
        w="full"
        bg={useColorModeValue("white", "gray.900")}
        boxShadow="2xl"
        rounded="md"
        p={6}
        overflow="hidden"
      >
        <Box h="210px" bg="gray.100" mt={-6} mx={-6} mb={6} pos="relative">
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
          <Text color="gray.500">{excerpt}</Text>
        </Stack>
        <Text color={"gray.500"} mb={4}>
          {new Date(date).toLocaleDateString()}
        </Text>
        <HStack spacing={4}>
          {tags.split(",").map((tag, idx) => (
            <Tag
              key={`${idx}-${tag}`}
              p={1}
              size="sm"
              variant="solid"
              colorScheme="blue"
            >
              {tag}
            </Tag>
          ))}
        </HStack>
      </Box>
    </Center>
  );
}
