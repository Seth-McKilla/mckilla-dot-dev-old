import { Box, Spacer, Stack, Text } from "@chakra-ui/react";
import { Card, TooltipQuestionMark } from "components";

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
        <Stack direction="row" alignItems="center" spacing={4}>
          <Box>{icon}</Box>
          <Text variant="h3" fontSize="xl" fontWeight={600}>
            {title}
          </Text>
          <Spacer />
          <TooltipQuestionMark label={description} />
        </Stack>
        <Text fontSize="3xl" color="green.400" fontWeight={600}>
          {`$ ${amount.toFixed(2)}`}
        </Text>
      </Stack>
    </Card>
  );
}
