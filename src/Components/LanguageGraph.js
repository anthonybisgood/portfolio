import React from "react";
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import useDarkSide from "../hooks/useDarkSide";
ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ProficiencySection() {
  let DarkModeColor = "#00bcd4";
  let LightModeColor = "#4dd0e1";
  let labels = [
    "Database Design",
    "React",
    "Git",
    "Agile Development",
    "Security",
    "Data Structures",
    "Compilers",
  ];
  let prof = [8, 6, 8, 7, 6, 9, 7];
  let DarkData = {
    labels: labels,
    datasets: [
      {
        label: "Level",
        data: prof,
        backgroundColor: DarkModeColor,
        fill: false,
        barThickness: 30,
      },
    ],
  };
  let LightData = {
    labels: labels,
    datasets: [
      {
        label: "Level",
        data: prof,
        backgroundColor: LightModeColor,
        fill: false,
        barThickness: 30,
      },
    ],
  };
  let options = {
    maintainAspectRatio: false,
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
      },
    },
    scales: {
      x: {
        max: 10,
        grid: {
          drawOnChartArea: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <div>
      <div className="justify-center mx-12 block dark:hidden">
        <Bar data={DarkData} options={options} height={300}></Bar>
      </div>
      <div className="justify-center mx-12 hidden dark:block">
        <Bar data={LightData} options={options} height={300}></Bar>
      </div>
    </div>
  );
}
