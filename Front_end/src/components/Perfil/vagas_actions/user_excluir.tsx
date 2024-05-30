"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../../ui/button";
import VagasAPI from "@/api/vagas.api";
import { toast } from "sonner";
import FuncionariosAPI from "@/api/funcionarios.api";

interface ActionDeleteProps {
  employeeId: number;
  nome: string;
  onEditComplete: () => void;
}

export default function ActionDelete({
  employeeId,
  nome,
  onEditComplete,
}: ActionDeleteProps) {
  const { DeletarFuncionario } = FuncionariosAPI();
  const [isOpen, setIsOpen] = useState(false);

  function handleExcluirFuncionario() {
    DeletarFuncionario(employeeId)
      .then((response) => {
        toast.error("Funcionário removido com sucesso!", {
          description: `ID do funcionário:   ${employeeId} Nome do funcionário:   ${nome}`,
          duration: 8000,
        });
        setIsOpen(false);
        onEditComplete();
      })
      .catch((error) => {
        console.error("Erro ao deletar funcionário:", error);
        setIsOpen(false);
      });
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="bg-red-500 text-white hover:bg-red-700">
            Excluir
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Excluir</DialogTitle>
          Deseja excluir este funcionário?
          <div className="flex justify-center mt-4">
            <Button
              onClick={handleExcluirFuncionario}
              className="bg-red-500 text-white mr-2 hover:bg-red-700"
            >
              Confirmar
            </Button>
            <DialogClose asChild>
              <Button className="bg-green-500 text-white hover:bg-green-700">
                Cancelar
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
