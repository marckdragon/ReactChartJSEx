import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";



ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Graficando con React y charjs Examen2",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"]
const dataset1Data = [150, 250, 350, 450, 550, 650, 750]


export const data2 = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: dataset1Data.map((value, index) => ({ x: labels[index], y: value })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: dataset1Data.map((value, index) => ({ x: labels[index], y: value })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  



export default function BarChar() {
  return <Bar options={options} data={data2} />;
}
