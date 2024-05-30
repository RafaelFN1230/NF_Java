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
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";
import InputFormField from "@/components/forms/input/forms_field_input";
import EditarUserViewModel from "@/viewModel/EditarUser.ViewModel";
import InputFormFieldDisabled from "@/components/forms/input_disabled/forms_field_input_disabled";

interface ActionEditProps {
  employeeId: number;
  employeeName: string;
  data: string;
  email: string;
  senha: string;
  onEditComplete: () => void;
}

interface FormUserData {
  employeeId: number;
  employeeName: string;
  data: string;
  email: string;
  senha: string;
}

export default function ActionEdit({
  employeeId,
  employeeName,
  data,
  email,
  senha,
  onEditComplete,
}: ActionEditProps) {
  const { EditUserForm, errorMessage, setUser } = EditarUserViewModel();
  const { form, onSubmit } = EditUserForm();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setUser({ employeeId, employeeName, email, data, senha });
    console.log("Usuário configurado:", {
      employeeId,
      employeeName,
      email,
      data,
      senha,
    });
  }, [employeeId, employeeName, email, data, senha, setUser]);

  const handleSubmit = async (FormData: FormUserData) => {
    const result = await onSubmit(FormData);
    console.log("result: ", result);
    if (result.success) {
      setIsOpen(false);
      toast.info("Funcionário editado com sucesso!", {
        description: `ID do funcionário:   ${employeeId} Nome do funcionário:   ${FormData.employeeName}`,
        duration: 8000,
      });
      onEditComplete();
    }
  };
  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="bg-blue-500 text-white mx-3 hover:bg-blue-700">
            Editar
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar Informações do Funcionário</DialogTitle>
            <DialogDescription>
              Insira novas informações do Funcionário.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="bg-white rounded px-8 pt-6 mb-4 h-full"
            >
              <InputFormFieldDisabled
                name={"employeeId"}
                text={"ID"}
                placeholder={""}
                type={"employeeId"}
                form={form}
              />
              <InputFormFieldDisabled
                name={"data"}
                text={"Data de contratação"}
                placeholder={""}
                type={"data"}
                form={form}
              />
              <InputFormField
                name={"employeeName"}
                text={"Nome"}
                placeholder={""}
                type={"employeeName"}
                form={form}
              />
              <InputFormFieldDisabled
                name={"email"}
                text={"E-mail"}
                placeholder={""}
                type={"email"}
                form={form}
              />
              <InputFormFieldDisabled
                name={"senha"}
                text={"Senha"}
                placeholder={""}
                type={"senha"}
                form={form}
              />
              <div className="w-full flex justify-center">
                <Button
                  type="submit"
                  className="mt-5 px-10 bg-blue-500 text-white hover:bg-blue-700"
                >
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
