import { Box, Stack, Text } from "@chakra-ui/react";
import { Card } from "components";

import type { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
  amount: number;
}

export default function CardFinancialTotal({
  icon,
  title,
  description,
  amount,
}: Props) {
  return (
    <Card>
      <Stack spacing={4}>
        <Stack direction="row" spacing={4}>
          <Box>{icon}</Box>
          <Text variant="h3" fontSize="xl" fontWeight={600}>
            {title}
          </Text>
        </Stack>
        <Text fontSize="3xl" color="green.400" fontWeight={600}>
          {`$ ${amount.toFixed(2)}`}
        </Text>
      </Stack>
    </Card>
  );
}
