"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import VagasAPI from "@/api/vagas.api";
import FuncionariosAPI from "@/api/funcionarios.api";

interface User {
  employeeId: number;
  employeeName: string;
  data: string;
  email: string;
  senha: string;
}

export default function EditarUserViewModel() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const { EditarFuncionario } = FuncionariosAPI();

  const FormSchema = z.object({
    employeeId: z.number(),
    employeeName: z.string().min(1, {
      message: "Favor inseir o nome do funcionário.",
    }),
    data: z.string(),
    email: z.string().email().min(1, {
      message: "Favor inseir o E-mail do funcionário.",
    }),
    senha: z.string().min(6, {
      message:
        "Favor inseir a senha  do funcionário, com pelo menos 6 digitos.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: user
      ? {
          employeeId: user.employeeId,
          employeeName: user.employeeName,
          data: user.data,
          email: user.email,
          senha: user.senha,
        }
      : undefined,
  });

  const updateFormValues = useCallback(() => {
    if (user) {
      form.reset({
        employeeId: user.employeeId,
        employeeName: user.employeeName,
        data: user.data,
        email: user.email,
        senha: user.senha,
      });
    }
  }, [form, user]);

  useEffect(() => {
    updateFormValues();
  }, [updateFormValues]);

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log("DADOS Enviados: ", values);
    try {
      await EditarFuncionario(
        values.employeeId,
        values.employeeName,
        values.data,
        values.senha,
        values.email,
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
    EditUserForm: () => ({ form, onSubmit }),
    errorMessage,
    setUser,
  };
}
