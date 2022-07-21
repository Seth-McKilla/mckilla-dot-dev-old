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
  lineColor?: `${string}.${number}`;
}

export default function DataVizLineGraph({
  data,
  lineColor = "gray.800",
}: Props) {
  const [color, weight] = lineColor.split(".");
  const { colors } = useTheme();

  return (
    <Box h={70}>
      <Line
        data={{
          labels: trailingTwelveMonths,
          datasets: [
            {
              fill: false,
              borderColor: colors[color][weight],
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
                  return toCurrency(tooltipItem.raw as number);
                },
              },
              bodyColor: colors[color][weight],
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
    </Box>
  );
}
