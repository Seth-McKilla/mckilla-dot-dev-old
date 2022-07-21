import { Line } from "react-chartjs-2";
import { trailingTwelveMonths } from "constants";

interface Props {
  title: string;
  label: string;
  data: number[];
}

export default function DataVizLineGraph({ title, label, data }: Props) {
  return (
    <Line
      data={{
        labels: trailingTwelveMonths,
        datasets: [
          {
            label,
            fill: false,
            lineTension: 0.5,
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data,
          },
        ],
      }}
      options={{
        title: {
          display: true,
          text: title,
          fontSize: 20,
        },
      }}
    />
  );
}
