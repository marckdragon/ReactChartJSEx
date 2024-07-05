import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";
import { Empleados } from "./datos";

ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend);

const ids = Empleados.map(empleado => empleado.ID);
const salarios = Empleados.map(empleado => parseFloat(empleado.Salario.replace(/[^\d.-]/g, '')));

const data = {
  labels: ids,
  datasets: [
    {
      label: 'Salario',
      data: salarios,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Salarios de Empleados",
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'ID de Empleado'
      }
    },
    y: {
      title: {
        display: true,
        text: 'Salario'
      }
    }
  }
};

export default function BarChart() {
  return <Bar data={data} options={options} />;
}
