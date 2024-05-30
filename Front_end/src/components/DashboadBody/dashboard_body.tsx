"use client";

import * as React from "react";
import CardComponent from "./Card/card";
import PieChartcomponent from "./Tables/donut_chart";
import MainChart from "./Tables/main_chart";
import FuncionariosAPI from "@/api/funcionarios.api";
import { useCallback, useEffect, useState } from "react";
import { Employee } from "@/models/employee.model";

export default function DashboadBody() {
  const { ListaDeFuncionarios } = FuncionariosAPI();
  const [data, setData] = useState<Employee[] | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const result = await ListaDeFuncionarios();
      setData(result);
    } catch (error) {
      console.error("Erro ao buscar dados do funcionário:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col-reverse">
        <div className="h-1/2">
          <MainChart funcionarios={data} />
        </div>
        <div className="h-1/2 flex flex-row mt-5">
          <div className="w-1/2">
            <PieChartcomponent funcionarios={data} />
          </div>
          <div className="w-1/2">
            <CardComponent funcionarios={data} />
          </div>
        </div>
      </div>
    </>
  );
}
