"use client";

import ActionEdit from "./candidatos_editar";
import ActionDelete from "./candidatos_excluir";

interface JobOffer {
  id: number;
  nome: string;
  rg: string;
  email: string;
  resumoCurriculo: string;
  onEditComplete: () => void;
}

export default function CandidatosActionButtons({
  id,
  nome,
  rg,
  email,
  resumoCurriculo,
  onEditComplete,
}: JobOffer) {
  return (
    <div className="flex justify-row mx-3">
      <ActionDelete rg={rg} nome={nome} onEditComplete={onEditComplete} />
      <ActionEdit
        id={id}
        nome={nome}
        rg={rg}
        email={email}
        resumoCurriculo={resumoCurriculo}
        onEditComplete={onEditComplete}
      />
    </div>
  );
}
