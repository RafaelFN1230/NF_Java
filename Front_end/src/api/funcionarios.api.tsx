"use client";
import { Employee } from "@/models/employee.model";
import axios from "axios";

export default function FuncionariosAPI() {
  const ListaDeFuncionarios = async () => {
    const options = {
      method: "GET",
      url: "http://localhost:8080/funcionarios",
    };
    try {
      const { data } = await axios.request(options);
      return data;
    } catch (error) {
      return error;
    }
  };

  const CadastrarFuncionarios = async (
    employeeName: string,
    startingDate: string,
    email: string,
    password: string,
  ) => {
    const options = {
      method: "POST",
      url: "http://localhost:8080/funcionario",
      data: {
        nome: employeeName,
        data: startingDate,
        email: email,
        senha: password,
      },
    };

    try {
      const { data } = await axios.request(options);
      return data;
    } catch (error) {
      return error;
    }
  };

  const EditarFuncionario = async (
    employeeId: number | null,
    employeeName: string,
    startingDate: string,
    senha: string,
    email: string,
  ) => {
    if (employeeId !== null) {
      const options = {
        method: "PUT",
        url: `http://localhost:8080/funcionario/${employeeId}`,
        data: {
          nome: employeeName,
          data: startingDate,
          email: email,
          senha: senha,
        },
      };

      try {
        console.log("data: ", options.data, "ID: ", employeeId);
        const { data } = await axios.request(options);
        console.log("API_data: ", data);
        return data;
      } catch (error) {
        console.log("API_Erro: ", error);
        return error;
      }
    }
  };

  const DeletarFuncionario = async (employeeId: number | null) => {
    if (employeeId !== null) {
      const options = {
        method: "DELETE",
        url: `http://localhost:8080/funcionario/${employeeId}`,
      };

      try {
        const { data } = await axios.request(options);
        return data;
      } catch (error) {
        return error;
      }
    }
  };

  const DetalhesFuncionario = async (employeeId: number | null) => {
    if (employeeId !== null) {
      const options = {
        method: "GET",
        url: `http://localhost:8080/funcionario/${employeeId}`,
      };

      try {
        const { data } = await axios.request(options);
        return data;
      } catch (error) {
        return error;
      }
    }
  };

  return {
    ListaDeFuncionarios,
    CadastrarFuncionarios,
    EditarFuncionario,
    DeletarFuncionario,
    DetalhesFuncionario,
  };
}
