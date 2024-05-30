"use client";

import * as React from "react";
import InputFormField from "@/components/forms/input/forms_field_input";
import AdicionarUsuarioViewModel from "@/viewModel/AdicionarUsuario.ViewModel";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import axios from "axios";

interface FormUserData {
  nome: string;
  email: string;
  senha: string;
}

interface Funcionario {
  employeeId: number;
  employeeName: string;
  data: string;
  email: string;
  senha: string;
} 

const ListaDeFuncionarios = async () => {
  const options = {
    method: "GET",
    url: "http://localhost:8080/funcionarios",
  };
  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados do funcionário:", error);
    return [];
  }
};

export default function NewUserComponent() {
  const { NewUserForm, errorMessage } = AdicionarUsuarioViewModel();
  const { form, onSubmit } = NewUserForm();

  const handleSubmit = async (FormData: FormUserData) => {
    const funcionarios = await ListaDeFuncionarios();
    const emailExists = funcionarios.some((funcionario: { email: string; }) => funcionario.email === FormData.email);

    if (emailExists) {
      toast.error("O e-mail já está em uso!", { duration: 8000 });
      return;
    }
    const result = await onSubmit(FormData);
    console.log("result: ", result);
    if (result.success) {
      toast.info("Funcionário adicionado com sucesso!", {
        description: `Nome do funcionário:   ${FormData.nome} E-mail do funcionário:   ${FormData.email}`,
        duration: 8000,
      });
    }
  };

  return (
    <>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="bg-white rounded px-8 pt-6 mb-4 h-full"
            >
              <InputFormField
                name={"nome"}
                text={"Nome Completo"}
                placeholder={""}
                type={"nome"}
                form={form}
              />
              <InputFormField
                name={"email"}
                text={"E-mail"}
                placeholder={""}
                type={"email"}
                form={form}
              />
              <InputFormField
                name={"senha"}
                text={"Senha"}
                placeholder={""}
                type={"password"}
                form={form}
              />
              <div className="flex items-center justify-center pt-4">
                <Button
                  className=" bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-10 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
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

    </>
  );
}

