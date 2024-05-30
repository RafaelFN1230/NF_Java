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
import { Form } from "@/components/ui/form";



interface ActionEditProps {
  id: number;
  nome: string;
  descricao: string;
  salario: string;
  onEditComplete: () => void; 
}
interface JobOffer {
  id: number;
  nome: string;
  descricao: string;
  salario: string;
}
interface JobOfferForm {
  nome: string;
  descricao: string;
  salario: string;
}

export default function ActionEdit({ id, nome, descricao, salario, onEditComplete }: ActionEditProps) {
  const { EditJobOfferForm, errorMessage, setJobOffer } = EditarVagaViewModel();
  const { form, onSubmit } = EditJobOfferForm();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setJobOffer({ id, nome, descricao, salario });
  }, [id, nome, descricao, salario, setJobOffer]);

  const handleSubmit = async (data: JobOfferForm) => {
    const result = await onSubmit(data);
    if (result.success) {
      setIsOpen(false);
      toast.info("Vaga editada com sucesso!", {description: `ID da vaga:   ${id} Nome da vaga:   ${data.nome}      Descricao:     ${data.descricao}      Salário: ${data.salario}` , duration: 8000 })
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
            <DialogTitle>Editar Vaga</DialogTitle>
            <DialogDescription>
              Insira novas informações da vaga.
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
              <InputFormField
                  name={"salario"}
                  text={"Salário"}
                  placeholder={""}
                  type={"salario"}
                  form={form}
                />
              <InputTextAreaFormField
                name={"descricao"}
                text={"Descrição"}
                placeholder={""}
                type={"descricao"}
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
