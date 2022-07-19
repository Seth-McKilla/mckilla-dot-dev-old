import Link from "next/link";
import Image from "next/image";
import { Heading, Text, Stack, useColorModeValue } from "@chakra-ui/react";
import { Card } from "components";

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
      <Card>
        <Image
          src={`/images/projects/${name}/${image}`}
          alt="preview-image"
          placeholder="blur"
          blurDataURL={`/images/projects/${name}/${image}`}
          width={500}
          height={500}
          style={{ overflow: "hidden" }}
        />
        <Stack mt={4}>
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
      </Card>
    </Link>
  );
}
