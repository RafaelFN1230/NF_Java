"use client";

import ActionEdit from "./user_editar";
import ActionDelete from "./user_excluir";


interface UserActionButtonsProps {
  id: number;
  nome: string;
  email: string;
  startingDate: string;
  password: string;
  onEditComplete: () => void
}

export default function UserActionButtons({ id, nome, email, startingDate, password, onEditComplete }: UserActionButtonsProps) {
  console.log("Usuário UserActionButtons:", { id, nome, email, startingDate, password });
  return (
    <div className="flex justify-row mx-3">
      <ActionDelete employeeId={id} nome={nome} onEditComplete={onEditComplete}/>
      <ActionEdit employeeId={id} employeeName={nome} data={startingDate} email={email} senha={password} onEditComplete={onEditComplete}/>
    </div>
  );
}
