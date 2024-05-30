"use cliente";

import FuncionariosAPI from "@/api/funcionarios.api";
import VagasTable from "./vagas_table";
import { useEffect, useState } from "react";
import ButtonAddJobOffers from "./vagas_add_job_offer";
import { Toaster } from "sonner";
interface VagasBodyProps{
  user_id: number|null
}

export default function VagasBody({user_id}: VagasBodyProps) {

  return (
    <>
    <div className="flex  justify-end mr-10 my-3">
      <ButtonAddJobOffers user_id={user_id} />
      </div>
      <div>
      <VagasTable user_id={user_id}/>
      </div>
      <Toaster richColors closeButton />
    </>
  );
}
