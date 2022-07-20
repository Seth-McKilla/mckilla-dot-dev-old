import Link from "next/link";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
interface Props {
  children: string;
  href: string;
  size: number;
  isExternal?: boolean;
}

export default function LinkButton({
  children,
  href,
  size,
  isExternal,
}: Props) {
  return (
    <Link href={href} passHref>
      <Box
        as="a"
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        w="100%"
      >
        <Box
          as={motion.div}
          w="100%"
          whileHover={{
            scale: 1.025,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
          }}
          whileTap={{ scale: 0.975 }}
        >
          <Box
            as="button"
            boxSize={size}
            display="flex"
            justifyContent="center"
            alignItems="center"
            p={4}
            w="100%"
            color="white"
            fontWeight="bold"
            borderRadius="2xl"
            textTransform="uppercase"
            bgGradient="linear(to-r, blue.800, blue.600)"
            _hover={{
              bgGradient: "linear(to-r, blue.700, blue.500)",
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Link>
  );
}
