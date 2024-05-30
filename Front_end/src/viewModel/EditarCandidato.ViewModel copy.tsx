"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import VagasAPI from "@/api/vagas.api";
import CandidatosAPI from "@/api/candidatos.api";

interface Candidato {
  nome: string;
  rg: string;
  email: string;
  resumoCurriculo: string;
}

export default function EditarCandidatoViewModel() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [candidate, setCandidate] = useState<Candidato | null>(null);
  const { EditarCandidato } = CandidatosAPI();

  const FormSchema = z.object({
    nome: z.string(),
    rg: z.string(),
    email: z.string(),
    resumoCurriculo: z.string(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: candidate
      ? {
          nome: candidate.nome,
          rg: candidate.rg,
          email: candidate.email,
          resumoCurriculo: candidate.resumoCurriculo,
        }
      : undefined,
  });

  const updateFormValues = useCallback(() => {
    if (candidate) {
      form.reset({
        nome: candidate.nome,
        rg: candidate.rg,
        email: candidate.email,
        resumoCurriculo: candidate.resumoCurriculo,
      });
    }
  }, [form, candidate]);

  useEffect(() => {
    updateFormValues();
  }, [updateFormValues]);

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log("DADOS Enviados: ", values);
    try {
      await EditarCandidato(
        candidate?.rg!,
        values.nome,
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

  return {
    EditCandidateForm: () => ({ form, onSubmit }),
    errorMessage,
    setCandidate,
  };
}
