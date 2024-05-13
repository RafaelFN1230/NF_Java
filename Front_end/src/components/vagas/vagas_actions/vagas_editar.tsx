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

export default function ActionEdit() {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button className="bg-blue-500 text-white mx-3">Editar</Button>
        </DialogTrigger>
        <DialogContent>Editar</DialogContent>
      </Dialog>
    </>
  );
}
