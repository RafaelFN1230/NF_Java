"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import VagasAPI from "@/api/vagas.api";

interface JobOffer {
  id: number;
  nome: string;
  descricao: string;
  salario: string;
}

export default function EditarVagaViewModel() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [jobOffer, setJobOffer] = useState<JobOffer | null>(null);
  const { EditarVaga } = VagasAPI();

  const FormSchema = z.object({
    nome: z.string(),
    salario: z.string(),
    descricao: z.string(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: jobOffer ? {
      nome: jobOffer.nome,
      salario: jobOffer.salario,
      descricao: jobOffer.descricao,
    } : undefined,
  });

  const updateFormValues = useCallback(() => {
    if (jobOffer) {
      form.reset({
        nome: jobOffer.nome,
        salario: jobOffer.salario,
        descricao: jobOffer.descricao,
      });
    }
  }, [form, jobOffer]);

  useEffect(() => {
    updateFormValues();
  }, [updateFormValues]);

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log("DADOS Enviados: ", values);
    try {
      await EditarVaga(jobOffer?.id!, values.nome, values.descricao, values.salario); 
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
    EditJobOfferForm: () => ({ form, onSubmit }),
    errorMessage,
    setJobOffer, 
  };
}
