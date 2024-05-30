"use client";

import ActionEdit from "./vagas_editar";
import ActionAddCandidate from "./vagas_add_candidato";
import ActionDelete from "./vagas_excluir";

interface JobOffer {
  id: number;
  nome: string;
  descricao: string;
  salario: string;
  onEditComplete: () => void;
}

export default function VagasActionButtons({
  id,
  nome,
  descricao,
  salario,
  onEditComplete,
}: JobOffer) {
  return (
    <div className="flex justify-row mx-3">
      <ActionDelete id={id} nome={nome} onEditComplete={onEditComplete} />
      <ActionEdit
        id={id}
        nome={nome}
        descricao={descricao}
        salario={salario}
        onEditComplete={onEditComplete}
      />
      <ActionAddCandidate jobOfferId={id} />
    </div>
  );
}
