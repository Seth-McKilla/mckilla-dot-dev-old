import { chakra, useColorModeValue, VisuallyHidden } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  label: string;
  href: string;
  size?: number;
}

export default function LinkIcon({ children, label, href, size = 8 }: Props) {
  return (
    <chakra.button
      rounded="full"
      _hover={{
        bg: useColorModeValue("blue.100", "blue.100"),
      }}
      w={size}
      h={size}
      cursor="pointer"
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      fontSize={size * 2.5}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
}
