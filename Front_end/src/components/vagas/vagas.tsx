"use cliente";

import FuncionariosAPI from "@/api/funcionarios.api";
import VagasTable from "./vagas_table";
import { useEffect, useState } from "react";
import ButtonAddJobOffers from "./vagas_add_job_offer";
import { Toaster } from "sonner";

export default function VagasBody() {
  

  return (
    <>
    <div className="flex  justify-end mr-10 my-3">
      <ButtonAddJobOffers/>
      </div>
      <div>
      <VagasTable/>
      </div>
      <Toaster richColors closeButton />
    </>
  );
}
