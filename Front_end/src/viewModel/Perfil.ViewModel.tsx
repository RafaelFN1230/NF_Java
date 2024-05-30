import FuncionariosAPI from "@/api/funcionarios.api";

export default function PerfilViewModel() {
  const { ListaDeFuncionarios } = FuncionariosAPI();
  const getFuncionarios = ListaDeFuncionarios();
  return {
    getFuncionarios,
  };
}
