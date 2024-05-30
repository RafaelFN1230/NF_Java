"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import VagasActionButtons from "./vagas_actions/vagas_actions";
import { Employee, JobOffers } from "@/models/employee.model";
import FuncionariosAPI from "@/api/funcionarios.api";
import { useState, useEffect, useCallback } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import React from "react";
import { Dialog } from "@radix-ui/react-dialog";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import VagasListaCandidatos from "./vagas_lista_candidatos";
import { getCookies } from "@/actions/cookies";

interface VagasTableProps {
  user_id: number | null;
}

export default function VagasTable({ user_id }: VagasTableProps) {
  const { DetalhesFuncionario } = FuncionariosAPI();
  const [data, setData] = useState<Employee | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const result = await DetalhesFuncionario(user_id);
      setData(result);
    } catch (error) {
      console.error("Erro ao buscar dados do funcionário:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);
  const vagas: JobOffers[] | undefined = data?.vagas.sort(
    (a, b) => a.id - b.id,
  );

  return (
    <>
      <Table>
        <TableCaption>Lista de Vagas</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="flex justify-center items-center">
              ID da vaga
            </TableHead>
            <TableHead>Nome da vaga</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead>Salário</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vagas?.map((vaga) => (
            <TableRow key={vaga.id}>
              <TableCell className="flex justify-center">{vaga.id}</TableCell>
              <TableCell>
                <VagasListaCandidatos
                  jobOffer={vaga}
                  onEditComplete={fetchData}
                />
              </TableCell>
              <TableCell>{vaga.descricao}</TableCell>
              <TableCell>{vaga.salario}</TableCell>
              <TableCell>
                <VagasActionButtons
                  id={vaga.id}
                  nome={vaga.nome}
                  descricao={vaga.descricao}
                  salario={vaga.salario}
                  onEditComplete={fetchData}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
