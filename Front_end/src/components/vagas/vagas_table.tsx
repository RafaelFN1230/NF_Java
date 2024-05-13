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

export default function VagasTable() {
  return (
    <>
      <Table>
        <TableCaption>Lista de Vagas</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nome da vaga</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead>Salário</TableHead>
            <TableHead>Expira</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <VagasActionButtons />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
