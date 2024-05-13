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

export default function CardComponent() {
  const vagasCadastradas = 10;
  const candidatosCadastrados = 30;

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Desempenho Geral</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <CellInfo text={"Vagas Cadastradas:"} value={vagasCadastradas} />
              <CellInfo
                text={"Candidatos Cadastrados:"}
                value={candidatosCadastrados}
              />
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
