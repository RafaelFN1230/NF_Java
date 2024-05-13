"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../../ui/button";
import ActionEdit from "./vagas_editar";
import ActionAddCandidate from "./vagas_add_candidato";
import ActionDelete from "./vagas_excluir";

export default function VagasActionButtons() {
  return (
    <div className="flex justify-row mx-3">
      <ActionDelete />
      <ActionEdit />
      <ActionAddCandidate />
    </div>
  );
}
