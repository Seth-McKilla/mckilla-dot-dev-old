import { Line } from "react-chartjs-2";
import { trailingTwelveMonths } from "constant";

interface Props {
  label: string;
  data: number[];
}

export default function DataVizLineGraph({ label, data }: Props) {
  return (
    <Line
      data={{
        labels: trailingTwelveMonths,
        datasets: [
          {
            label,
            fill: false,
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data,
          },
        ],
      }}
    />
  );
}
