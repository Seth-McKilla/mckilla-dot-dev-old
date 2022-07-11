import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Props {
  image: string;
  name: string;
  started: string;
  description: string;
  revenueType: "MRR" | "Presales";
  revenueAmount: number;
}

export default function CardProject({
  image,
  name,
  started,
  description,
  revenueType,
  revenueAmount,
}: Props) {
  return (
    <Center py={6}>
      <Link href={`/projects/${name}`}>
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
            <Text color={useColorModeValue("gray.700", "gray.300")}>
              {"Started:"} {new Date(started).toLocaleDateString()}
            </Text>
            <Text color={useColorModeValue("gray.700", "gray.300")}>
              {description}
            </Text>
            <Stack isInline spacing={2}>
              <Text fontSize="xl">{revenueType}</Text>
              <Text color="green.500" fontSize="xl">
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
    </Center>
  );
}
