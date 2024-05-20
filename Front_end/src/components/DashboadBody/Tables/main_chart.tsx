import { Employee } from "@/models/employee.model";
import MainDashboardChartViewModel from "@/viewModel/DashboardMainChart.ViewModel";
import React, { PureComponent } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface MainChartProps {
  funcionarios: Employee[] | null
}

export default function MainChart({ funcionarios }: MainChartProps) {
  const { GetData } = MainDashboardChartViewModel();
  const data = GetData(funcionarios)

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="user" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="vagasComCandidatos" barSize={20} fill="#4F46E5" name="Vagas com candidatos"/>
          <Bar dataKey="vagasSemCandidatos" barSize={20} fill="#ff7300" name="Vagas sem candidatos"/>
          <Line type="monotone" dataKey="n_candidatos" stroke="#10B981" name="Número total de candidatos"/>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
