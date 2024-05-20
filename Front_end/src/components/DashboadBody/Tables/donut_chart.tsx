"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
import { Employee } from "@/models/employee.model";
import MainDashboardDonutChartViewModel from "@/viewModel/DashboardDonutdMainChart.ViewModel";

interface MainChartProps {
  funcionarios: Employee[] | null
}

export default function PieChartComponent({ funcionarios }: MainChartProps) {
  const { GetData } = MainDashboardDonutChartViewModel();
  const employeeData = GetData(funcionarios)

  let data = [
    {
      label: "Vagas com candidatos",
      value: employeeData.vagasComCandidatos,
      color: "#4F46E5",
      cutout: "50%",
    },
    {
      label: "Vagas sem candidatos",
      value: employeeData.vagasSemCandidatos,
      color: "#10B981",
      cutout: "50%",
    }
  ]

  const COLORS = ["#4F46E5", "#10B981"];

  const options: any = {
    plugins: {
      responsive: true,
    },
    cutout: data.map((item) => item.cutout),
  };

  const finalData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => Math.round(item.value)),
        backgroundColor: data.map((item) => item.color),
        borderColor: data.map((item) => item.color),
        borderWidth: 1,
        dataVisibility: new Array(data.length).fill(true),
      },
    ],
  };
  return (
    <div className="flex flex-col">
      <div className="flex justify-center font-bold">
        Vagas com e sem candidatos
      </div>
      <div className="flex items-center justify-center max-h-72 ">
      <Doughnut data={finalData} options={options}/>;
      </div>
    </div>
  );
}
