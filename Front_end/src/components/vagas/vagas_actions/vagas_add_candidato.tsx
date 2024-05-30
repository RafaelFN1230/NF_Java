"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../../ui/button";
import AdicionarCandidatoViewModel from "@/viewModel/AdicionarCandidato.ViewModel";
import { FormProvider } from "react-hook-form";
import InputFormField from "../../forms/input/forms_field_input";
import { useState } from "react";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";
import InputTextAreaFormField from "../../forms/inputTextArea/forms_field_inputTextArea";

interface ActionAddCandidateProps {
  jobOfferId: number;
}

interface Candidate {
  nomeCandidato: string;
  rg: string;
  email: string;
  resumoCurriculo: string;
}

export default function ActionAddCandidate({
  jobOfferId,
}: ActionAddCandidateProps) {
  const { NewCandidateForm, errorMessage } = AdicionarCandidatoViewModel();
  const { form, onSubmit } = NewCandidateForm(jobOfferId);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (data: Candidate) => {
    const result = await onSubmit(data);
    if (result.success) {
      setIsOpen(false);
      toast.success("Candidato adicionado com sucesso!", {description: `ID da vaga:   ${jobOfferId} Nome do candidato:   ${data.nomeCandidato}      RG:     ${data.rg}      E-mail: ${data.email}` , duration: 8000 })
      form.reset();
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="bg-green-500 text-white hover:bg-green-700">
            Adicionar Candidato
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar Candidato</DialogTitle>
            <DialogDescription>
              Insira as informações do candidato para a vaga.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="bg-white rounded px-8 pt-6 mb-4 h-full"
            >
              <InputFormField
                name={"nomeCandidato"}
                text={"Nome"}
                placeholder={""}
                type={"nomeCandidato"}
                form={form}
              />
              <InputFormField
                name={"rg"}
                text={"RG"}
                placeholder={""}
                type={"rg"}
                form={form}
              />
              <InputFormField
                name={"email"}
                text={"E-mail"}
                placeholder={""}
                type={"email"}
                form={form}
              />
              <InputTextAreaFormField
                name={"resumoCurriculo"}
                text={"Resumo do Currículo"}
                placeholder={""}
                type={"resumoCurriculo"}
                form={form}
              />
              <div className="w-full flex justify-center">
              <Button type="submit" className="mt-5 px-10 bg-green-500 text-white hover:bg-green-700">
              Adicionar
              </Button>
              </div>
              <div className="w-full max-w-xs">
                {errorMessage && (
                  <p className="font-bold text-sm text-red-500">
                    {errorMessage}
                  </p>
                )}
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
