"use client";
import FuncionariosAPI from "@/api/funcionarios.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function AdicionarCandidatoViewModel() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { CadastrarFuncionarios, ListaDeFuncionarios } = FuncionariosAPI();

  function formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  const hoje = new Date();
  const startingDate: string = formatDate(hoje);

  const FormSchema = z.object({
    nome: z.string().min(1, {
      message: "Favor inseir o nome do funcionário.",
    }),
    email: z.string().email().min(1, {
      message: "Favor inseir o E-mail do funcionário.",
    }),
    senha: z.string().min(6, {
      message: "Favor inseir a senha  do funcionário, com pelo menos 6 digitos",
    }),
  });

  function NewUserForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        nome: "",
        email: "",
        senha: "",
      },
    });

    async function onSubmit(values: z.infer<typeof FormSchema>) {
      console.log("DADOS Enviados: ", values);
      try {
        await CadastrarFuncionarios(
          values.nome,
          startingDate,
          values.email,
          values.senha,
        );
        setErrorMessage("");
        return { success: true };
      } catch (error: any) {
        console.error("error: ", error);
        if (error.message && typeof error.message === "string") {
          setErrorMessage(error.message);
        } else {
          setErrorMessage("Ocorreu um erro ao processar a requisição.");
        }
        return { success: false };
      }
    }
    return { form, onSubmit };
  }

  return {
    NewUserForm,
    errorMessage,
    FormSchema,
  };
}
