"use client";
import CandidatosAPI from "@/api/candidatos.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function AdicionarCandidatoViewModel() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { CadastrarCandidato } = CandidatosAPI();

  const rgRegex = /\b\d{2}\.\d{3}\.\d{3}-\d{2}\b/;

  function validarRG(rg: string): boolean {
    return rgRegex.test(rg);
  }

  const FormSchema = z.object({
    nomeCandidato: z.string().min(1, {
      message: "Favor inseir o nome do candidato.",
    }),
    email: z.string().email().min(1, {
      message: "Favor inseir o E-mail do candidato.",
    }),
    rg: z
      .string()
      .min(1, {
        message: "Favor inserir o RG do candidato.",
      })
      .refine((rg) => validarRG(rg), {
        message: "Favor inserir o RG no padrão 01.234.567.89",
      }),
    resumoCurriculo: z.string().min(1, {
      message: "Favor inserir o resumo do currículo do candidato.",
    }),
  });

  function NewCandidateForm(jobOfferId: number) {
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        nomeCandidato: "",
        email: "",
        rg: "",
        resumoCurriculo: "",
      },
    });

    async function onSubmit(values: z.infer<typeof FormSchema>) {
      console.log("DADOS Enviados: ", values);
      try {
        await CadastrarCandidato(
          jobOfferId,
          values.rg,
          values.nomeCandidato,
          values.email,
          values.resumoCurriculo,
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
    NewCandidateForm,
    errorMessage,
    FormSchema,
  };
}
