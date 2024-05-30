"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import * as React from "react";
import CellInfo from "./card_body";
import DashboardCardViewModel from "@/viewModel/DashboardCard.ViewModel";
import { Employee } from "@/models/employee.model";

interface MainChartProps {
  funcionarios: Employee[] | null;
}

export default function CardComponent({ funcionarios }: MainChartProps) {
  const { GetData } = DashboardCardViewModel();
  const data = GetData(funcionarios);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Desempenho Geral</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <CellInfo text={"Vagas Cadastradas:"} value={data.n_vagas} />
              <CellInfo
                text={"Candidatos Cadastrados:"}
                value={data.n_candidatos}
              />
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
