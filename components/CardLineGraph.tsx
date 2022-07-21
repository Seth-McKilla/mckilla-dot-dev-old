import { Box, Spacer, Stack, Text } from "@chakra-ui/react";
import { Card, DataVizLineGraph, TooltipQuestionMark } from "components";

import type { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
  label: string;
  data: number[];
}

export default function CardFinancialTotal({
  icon,
  title,
  description,
  label,
  data,
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
        <DataVizLineGraph label={label} data={data} />
      </Stack>
    </Card>
  );
}
