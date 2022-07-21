import { Box, useTheme } from "@chakra-ui/react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { trailingTwelveMonths } from "constant";
import { toCurrency } from "utils";
Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip);

interface Props {
  data: number[];
  isCurrency?: boolean;
}

export default function DataVizLineGraph({ data, isCurrency }: Props) {
  const { colors } = useTheme();
  const color = colors[isCurrency ? "green" : "blue"][400];

  return (
    <Line
      data={{
        labels: trailingTwelveMonths,
        datasets: [
          {
            fill: false,
            borderColor: color,
            borderWidth: 2,
            data,
            pointRadius: 0,
            // @ts-ignore:next-line (bug in chart.js types)
            lineTension: 0.5,
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          tooltip: {
            displayColors: false,
            callbacks: {
              label: (tooltipItem) => {
                const value = tooltipItem.raw as number;
                return isCurrency ? toCurrency(value) : value.toString();
              },
            },
            bodyColor: color,
          },
        },
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
            grace: "3%",
          },
        },
        interaction: {
          mode: "nearest",
          axis: "x",
          intersect: false,
        },
        maintainAspectRatio: false,
      }}
    />
  );
}
