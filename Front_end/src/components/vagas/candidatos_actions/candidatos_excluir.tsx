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
import CandidatosAPI from "@/api/candidatos.api";

interface ActionDeleteProps {
  rg: string;
  nome: string;
  onEditComplete: () => void;
}

export default function ActionDelete({
  rg,
  nome,
  onEditComplete,
}: ActionDeleteProps) {
  const { DeletarCandidato } = CandidatosAPI();
  const [isOpen, setIsOpen] = useState(false);

  function handleExcluirVaga() {
    DeletarCandidato(rg)
      .then((response) => {
        toast.error("Cadidato removido com sucesso!", {
          description: `Nome:   ${nome} RG:   ${rg}`,
          duration: 8000,
        });
        setIsOpen(false);
        onEditComplete();
      })
      .catch((error) => {
        console.error("Erro ao deletar cadidato:", error);
        toast.error("Erro ao deletar cadidato");
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
          Deseja excluir este candidato?
          <div className="flex justify-center mt-4">
            <Button
              onClick={handleExcluirVaga}
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
