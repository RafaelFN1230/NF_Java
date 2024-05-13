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

export default function ActionAddCandidate() {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button className="bg-green-500 text-white">
            Adicionar Candidato
          </Button>
        </DialogTrigger>
        <DialogContent>Adicionar Candidato</DialogContent>
      </Dialog>
    </>
  );
}
