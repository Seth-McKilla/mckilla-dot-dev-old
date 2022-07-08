import Link from "next/link";
import { Box } from "@chakra-ui/react";

interface Props {
  href: string;
  label: string;
}

export default function LinkButton({ href, label }: Props) {
  return (
    <Link href={href} passHref>
      <Box
        as="button"
        p={4}
        color="white"
        fontWeight="bold"
        borderRadius="2xl"
        bgGradient="linear(to-r, blue.800, blue.600)"
        _hover={{
          bgGradient: "linear(to-r, blue.700, blue.500)",
        }}
      >
        {label}
      </Box>
    </Link>
  );
}
