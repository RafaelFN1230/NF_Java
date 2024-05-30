"use client";

import FuncionariosAPI from "@/api/funcionarios.api";
import VagasTable from "./vagas_table";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogDescription, DialogHeader } from "../ui/dialog";
import { Form, FormDescription } from "@/components/ui/form";
import CriarVagaViewModel from "@/viewModel/CriarVaga.ViewModel";
import { toast } from "sonner";
import InputFormField from "../forms/input/forms_field_input";
import InputTextAreaFormField from "../forms/inputTextArea/forms_field_inputTextArea";
import add_icon from "@/assets/images/svg/plus-circle.svg"
import Image from "next/image";
import { getCookies } from "@/actions/cookies";

interface JobOffer {
  jobOfferName: string;
  description: string;
  salary: string;
}

interface ButtonAddJobOffersProps{
  user_id: number|null
}

export default function ButtonAddJobOffers({user_id}: ButtonAddJobOffersProps) {

  const { NewJobOfferForm, errorMessage } = CriarVagaViewModel();
  const { form, onSubmit } = NewJobOfferForm(user_id);
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = async (data: JobOffer) => {
    const result = await onSubmit(data);
    if (result.success) {
      setIsOpen(false);
      toast.success("Vaga criada com sucesso!", {description: `Nome da vaga:   ${data.jobOfferName}      Descrição da vaga:     ${data.description}      Salário da vaga: ${data.salary}` , duration: 8000 })
      form.reset();
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className=" px-10 bg-green-500 text-white hover:bg-green-700">
            <div className="mr-3">
          <Image src={add_icon} alt={"add_icon"} width={20} height={20} />
          </div>
            Criar Vaga
          </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Criar Vaga</DialogTitle>
            <DialogDescription>Insira as informações da vaga nova.</DialogDescription>
            </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}
              className="bg-white rounded px-8 pt-6 mb-4 h-full"
            >
              <InputFormField
                name={"jobOfferName"}
                text={"Nome"}
                placeholder={""}
                type={"jobOfferName"}
                form={form}
              />
              <InputFormField
                  name={"salary"}
                  text={"Salário"}
                  placeholder={""}
                  type={"salary"}
                  form={form}
                />
              <InputTextAreaFormField
                name={"description"}
                text={"Descrição"}
                placeholder={""}
                type={"description"}
                form={form}
              />
              <div className="w-full flex justify-center">
              <Button type="submit" className="mt-5 px-10 bg-green-500 text-white hover:bg-green-700">
                Criar
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
