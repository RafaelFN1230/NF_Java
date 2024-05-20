"use client";
import CandidatosAPI from "@/api/candidatos.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AxiosError } from "axios";
import { useToast } from "@/components/ui/use-toast";
import VagasAPI from "@/api/vagas.api";



export default function CriarVagaViewModel() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { CadastrarVaga } = VagasAPI();

  const FormSchema = z.object({
    jobOfferName: z
      .string()
      .min(1, {
        message: "Favor inseir o nome da vaga."
      }
    ),
    description: z
      .string()
      .min(1, {
      message: "Favor inseir a descrição da vaga."
      }
    ),
    salary: z
      .string()
      .min(1, {
        message: "Favor inserir o salário da vaga.",
      }
    )
  })

  function NewJobOfferForm(employeeId: number) {
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        jobOfferName: "",
        description: "",
        salary: ""
      },
    });
    
    async function onSubmit(values: z.infer<typeof FormSchema>) {
      console.log("DADOS Enviados: ", values);
      try {
        await CadastrarVaga(employeeId, values.jobOfferName, values.description, values.salary); 
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
    NewJobOfferForm,
    errorMessage,
    FormSchema,
  };
}