// components/DonutChart.tsx
"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutChartProps {
  dataValues: PropData[];
}

interface PropData {
  color: string;
  bg_color: string;
  text_color: string;
  category: string;
  numbers: number;
  icons: React.JSX.Element;
}

export default function DonutChart({ dataValues }: DonutChartProps) {
  const labels = dataValues.map((d) => d.category);
  const numbers = dataValues.map((d) => d.numbers);
  const colors = dataValues.map((d) => d.color); // You can use color or bg_color

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset",
        data: numbers,
        backgroundColor: colors,
        borderColor: colors.map((c) => c.replace("0.5", "1")), // optional: adjust opacity
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display:false
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}
// components/PolarChart.tsx
// "use client";

// import {
//   Chart as ChartJS,
//   RadialLinearScale,
//   ArcElement,
//   Tooltip,
//   Legend,
//   PolarAreaController,
// } from "chart.js";
// import { PolarArea } from "react-chartjs-2";

// ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend, PolarAreaController);

// interface DonutChartProps {
//   dataValues: PropData[];
// }

// interface PropData {
//   color: string;
//   bg_color: string;
//   text_color: string;
//   category: string;
//   numbers: number;
//   icons: React.JSX.Element;
// }

// export default function PolarChart({ dataValues }: DonutChartProps) {
//   const labels = dataValues.map((d) => d.category);
//   const numbers = dataValues.map((d) => d.numbers);
//   const colors = dataValues.map((d) => d.color);

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Values",
//         data: numbers,
//         backgroundColor: colors,
//         borderColor: colors.map((c) => c.replace("0.5", "1")),
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false, // You can enable it if needed
//       },
//     },
//     scales: {
//       r: {
//         ticks: {
//           backdropColor: 'transparent',
//         },
//       },
//     },
//   };

//   return <PolarArea data={data} options={options} />;
// }
