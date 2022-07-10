import { chakra, useColorModeValue, VisuallyHidden } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  label: string;
  href: string;
  size?: number;
  color?: string;
  hoverColor?: string;
}

export default function LinkIcon({
  children,
  label,
  href,
  size = 8,
  color = "gray.800",
  hoverColor,
}: Props) {
  const iconColor = useColorModeValue(color, "gray.200");

  return (
    <chakra.button
      rounded="full"
      w={size}
      h={size}
      fontSize={size * 3}
      color={iconColor}
      _hover={{
        color: hoverColor,
      }}
      cursor="pointer"
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
}
