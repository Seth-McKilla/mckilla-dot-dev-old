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
  return <Card>Hello</Card>;
}
