"use client";
import FuncionariosAPI from "@/api/funcionarios.api";
import { useRouter } from "next/navigation";

export default function VagasViewModel() {
  const router = useRouter();
  const { DetalhesFuncionario } = FuncionariosAPI()

  const data = DetalhesFuncionario(2)

  
  return {
    
  };
}
