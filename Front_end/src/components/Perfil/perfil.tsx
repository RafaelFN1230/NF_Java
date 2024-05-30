"use client";

import * as React from "react";
import PerfilViewModel from "@/viewModel/Perfil.ViewModel";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import FuncionariosAPI from "@/api/funcionarios.api";
import { Employee } from "@/models/employee.model";
import UserActionButtons from "./vagas_actions/user_actions";
import { Toaster } from "sonner";
import NewUserComponent from "./novo_usuario";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
} from "../ui/dialog";
import { Button } from "../ui/button";

export default function PerfilComponents() {
  const { ListaDeFuncionarios } = FuncionariosAPI();
  const [data, setData] = React.useState<Employee[]>([]);

  const fetchData = React.useCallback(async () => {
    try {
      const result = await ListaDeFuncionarios();
      const sortedResult = result.sort(
        (a: Employee, b: Employee) => a.id - b.id,
      );
      setData(sortedResult);
    } catch (error) {
      console.error("Erro ao buscar dados do funcionário:", error);
    }
  }, []);

  React.useEffect(() => {
    fetchData();
  }, []);

  console.log("getFuncionarios: ", data);

  return (
    <>
      <Dialog>
        <div className="w-full flex justify-end">
          <DialogTrigger asChild>
            <Button className="m-5   bg-green-700 text-white hover:bg-green-800">
              Adicionar Funcionário
            </Button>
          </DialogTrigger>
        </div>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar Funcionário</DialogTitle>
          </DialogHeader>
          <NewUserComponent />
        </DialogContent>
      </Dialog>
      <div className="min-w-fit mx-5 border rounded-md">
        <Table>
          <TableCaption>Lista de Usuarios</TableCaption>
          <TableHeader>
            <TableHead className="">ID</TableHead>
            <TableHead className="">Nome Completo</TableHead>
            <TableHead className="">E-mail</TableHead>
            <TableHead className="flex justify-center">Ação</TableHead>
          </TableHeader>
          <TableBody>
            {data.map((user: Employee) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.nome}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="max-w-10">
                  <UserActionButtons
                    id={user.id}
                    nome={user.nome}
                    email={user.email}
                    startingDate={user.data}
                    password={user.senha}
                    onEditComplete={fetchData}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Toaster richColors closeButton />
    </>
  );
}
