"use client";
import axios from "axios";

export default function CandidatosAPI() {
  const CadastrarCandidato = async (
    jobOfferId: number,
    rg: string,
    nomeCandidato: string,
    email: string,
    resumoCurriculo: string,
  ) => {
    const options = {
      method: "POST",
      url: `http://localhost:8080/vaga/${jobOfferId}/candidato`,
      data: {
        rg: rg,
        nomeCandidato: nomeCandidato,
        email: email,
        resumoCurriculo: resumoCurriculo,
      },
    };

    try {
      const { data } = await axios.request(options);
      return data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response && error.response.data) {
        throw new Error(error.response.data);
      }
      throw new Error("Ocorreu um erro ao processar a requisição.");
    }
  };

  const DeletarCandidato = async (rg: string) => {
    const options = {
      method: "DELETE",
      url: `http://localhost:8080/${rg}`,
    };

    try {
      const { data } = await axios.request(options);
      return data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response && error.response.data) {
        throw new Error(error.response.data);
      }
      throw new Error("Ocorreu um erro ao processar a requisição.");
    }
  };

  const EditarCandidato = async (
    rg: string,
    nomeCandidato: string,
    email: string,
    resumoCurriculo: string,
  ) => {
    const options = {
      method: "PUT",
      url: `http://localhost:8080/${rg}`,
      data: {
        rg: rg,
        nomeCandidato: nomeCandidato,
        email: email,
        resumoCurriculo: resumoCurriculo,
      },
    };

    try {
      const { data } = await axios.request(options);
      return data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response && error.response.data) {
        throw new Error(error.response.data);
      }
      throw new Error("Ocorreu um erro ao processar a requisição.");
    }
  };

  return {
    CadastrarCandidato,
    DeletarCandidato,
    EditarCandidato,
  };
}
