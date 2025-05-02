// components/LineChart.tsx
"use client";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

interface LineChartProps {
  dataValues: number[];
}



export default function LineChart({ dataValues }: LineChartProps) {
//   const labels = dataValues.map((d) => d.category);
 ;

  const data = {
    labels:['Week1','Week2','Week3','Week4'],
    datasets: [
      {
        label: "Dataset",
        data: dataValues,
        borderColor:  "#60B5FF", // fallback color
        backgroundColor: '#60B5FF',
        tension: 0.4, // curve line
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // You can turn this on if needed
      },
    },
    // scales: {
    //   x: {
    //     title: {
    //       display: true,
    //       text: "In A Month",
    //     },
    //   },
    //   y: {
    //     title: {
    //       display: true,
    //       text: "No. of Enquries",
    //     },
    //     beginAtZero: true,
    //   },
    // },
  };

  return <Line data={data} options={options} />;
}
