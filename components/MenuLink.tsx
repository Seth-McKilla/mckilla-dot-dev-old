import Link from "next/link";
import { Text } from "@chakra-ui/react";

interface Props {
  onClose: () => void;
  label: string;
  href: string;
}

export default function MenuLink({ onClose, label, href }: Props) {
  return (
    <Link href={href}>
      <a>
        <Text onClick={onClose}>{label}</Text>
      </a>
    </Link>
  );
}
