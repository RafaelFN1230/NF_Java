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

export default function ActionDelete() {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button className="bg-red-500 text-white">Excluir</Button>
        </DialogTrigger>
        <DialogContent>Excluir</DialogContent>
      </Dialog>
    </>
  );
}
