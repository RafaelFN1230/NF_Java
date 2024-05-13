"use client";
import axios from "axios";

export default function VagasAPI() {
  const DetalhesDaVaga = async (codigoVaga: string) => {
    const options = {
      method: "GET",
      url: `http://localhost:8080/vaga/${codigoVaga}`,
    };
    try {
      const { data } = await axios.request(options);
      return data;
    } catch (error) {
      return error;
    }
  };

  const CadastrarVaga = async (
    employeeId: string,
    jobOfferName: string,
    description: string,
    salary: string,
  ) => {
    const options = {
      method: "POST",
      url: "http://localhost:8080/cadastrarVaga",
      params: { funcionario_id: employeeId },
      data: {
        nome: jobOfferName,
        descricao: description,
        salario: salary,
      },
    };

    try {
      const { data } = await axios.request(options);
      return data;
    } catch (error) {
      return error;
    }
  };

  const EditarVaga = async (
    jobOfferId: string,
    jobOfferName: string,
    description: string,
    salary: string,
  ) => {
    const options = {
      method: "PUT",
      url: `http://localhost:8080/editar-vaga/${jobOfferId}`,
      data: { nome: jobOfferName, descricao: description, salario: salary },
    };

    try {
      const { data } = await axios.request(options);
      return data;
    } catch (error) {
      return error;
    }
  };

  const DeletarVaga = async (jobOfferId: string) => {
    const options = {
      method: "DELETE",
      url: `http://localhost:8080/vaga/${jobOfferId}`,
    };

    try {
      const { data } = await axios.request(options);
      return data;
    } catch (error) {
      return error;
    }
  };

  const DetalhesVaga = async (jobOfferId: string) => {
    const options = {
      method: "GET",
      url: `http://localhost:8080/vaga/${jobOfferId}`,
    };

    try {
      const { data } = await axios.request(options);
      return data;
    } catch (error) {
      return error;
    }
  };

  return {
    DetalhesDaVaga,
    CadastrarVaga,
    EditarVaga,
    DeletarVaga,
    DetalhesVaga,
  };
}
