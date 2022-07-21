import { Box, Spacer, Stack, Text } from "@chakra-ui/react";
import { Card, DataVizLineGraph, TooltipQuestionMark } from "components";

import type { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
  data: number[];
  isCurrency?: boolean;
}

export default function CardFinancialTotal({
  icon,
  title,
  description,
  data,
  isCurrency,
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
        <Box h={55}>
          <DataVizLineGraph data={data} isCurrency={isCurrency} />
        </Box>
      </Stack>
    </Card>
  );
}
