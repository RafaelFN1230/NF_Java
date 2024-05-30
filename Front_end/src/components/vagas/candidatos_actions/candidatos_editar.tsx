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
import { FormProvider } from "react-hook-form";
import InputFormField from "../../forms/input/forms_field_input";
import { useEffect, useState } from "react";
import { InputTextAreaFormField } from "../../forms/inputTextArea/forms_field_inputTextArea";
import EditarVagaViewModel from "@/viewModel/EditarVaga.ViewModel";
import { toast } from "sonner";
import { Form, FormLabel } from "@/components/ui/form";
import EditarCandidatoViewModel from "@/viewModel/EditarCandidato.ViewModel copy";
import { Input } from "@/components/ui/input"
import InputFormFieldDisabled from "../../forms/input_disabled/forms_field_input_disabled";



interface ActionEditProps {
  id: number;
  nome: string;
  rg: string;
  email: string;
  resumoCurriculo: string;
  onEditComplete: () => void; 
}
interface Candidato {
  rg: string;
  nome: string;
  email: string;
  resumoCurriculo: string;
}

export default function ActionEdit({ id, nome, rg, email, resumoCurriculo, onEditComplete }: ActionEditProps) {
  const { EditCandidateForm, errorMessage, setCandidate } = EditarCandidatoViewModel();
  const { form, onSubmit } = EditCandidateForm();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setCandidate({ rg, nome, email, resumoCurriculo });
  }, [ rg, nome, email, resumoCurriculo, setCandidate]);

  const handleSubmit = async (data: Candidato) => {
    const result = await onSubmit(data);
    if (result.success) {
      setIsOpen(false);
      toast.info("Candidato editada com sucesso!", {description: `ID do candidato:   ${id} RG do candidato:   ${rg} Nome:   ${data.nome}      E-mail:     ${data.email}      Resumo do currículo: ${data.resumoCurriculo}` , duration: 8000 })
      onEditComplete()
    }
  };
  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="bg-blue-500 text-white mx-3 hover:bg-blue-700">Editar</Button>
        </DialogTrigger>
        <DialogContent>
        <DialogHeader>
            <DialogTitle>Editar Candidato</DialogTitle>
            <DialogDescription>
              Insira novas informações do candidato.
            </DialogDescription>
          </DialogHeader>
          <Form {...form} >
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="bg-white rounded px-8 pt-6 mb-4 h-full"
            >
              <InputFormField
                name={"nome"}
                text={"Nome"}
                placeholder={""}
                type={"nome"}
                form={form}
              />
              <InputFormFieldDisabled
                name={"rg"}
                text={"RG"}
                placeholder={""}
                type={"rg"}
                form={form}/>
              <InputFormField
                name={"email"}
                text={"E-mail"}
                placeholder={""}
                type={"email"}
                form={form}
              />
              <InputTextAreaFormField
                name={"resumoCurriculo"}
                text={"Resumo do currículo"}
                placeholder={""}
                type={"resumoCurriculo"}
                form={form}
              />
              <div className="w-full flex justify-center">
              <Button type="submit" className="mt-5 px-10 bg-blue-500 text-white hover:bg-blue-700">
                Editar
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
