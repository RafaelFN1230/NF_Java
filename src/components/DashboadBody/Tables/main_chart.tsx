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

const data = [
  {
    user: "Rafael",
    vagasComCandidatos: 30,
    vagasSemCandidatos: 8,
    n_candidatos: 140,
  },
  {
    user: "Heleno",
    vagasComCandidatos: 68,
    vagasSemCandidatos: 67,
    n_candidatos: 150,
  },
  {
    user: "Roney",
    vagasComCandidatos: 13,
    vagasSemCandidatos: 10,
    n_candidatos: 29,
  },
  {
    user: "David",
    vagasComCandidatos: 14,
    vagasSemCandidatos: 12,
    n_candidatos: 28,
  },
  {
    user: "Pedro",
    vagasComCandidatos: 15,
    vagasSemCandidatos: 8,
    n_candidatos: 20,
  },
  {
    user: "Claudio",
    vagasComCandidatos: 14,
    vagasSemCandidatos: 6,
    n_candidatos: 17,
  },
];

export default function MainChart() {
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
          <Bar dataKey="vagasComCandidatos" barSize={20} fill="#4F46E5" />
          <Bar dataKey="vagasSemCandidatos" barSize={20} fill="#ff7300" />
          <Line type="monotone" dataKey="n_candidatos" stroke="#10B981" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
