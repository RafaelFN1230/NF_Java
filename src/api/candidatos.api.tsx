"use client";
import axios from "axios";

export default function CandidatosAPI() {
  const CadastrarCandidato = async (
    jobOfferId: string,
    rg: string,
    nomeCandidato: string,
    email: string,
  ) => {
    const options = {
      method: "POST",
      url: `http://localhost:8080/vaga/${jobOfferId}/candidato`,
      data: { rg: rg, nomeCandidato: nomeCandidato, email: email },
    };

    try {
      const { data } = await axios.request(options);
      return data;
    } catch (error) {
      return error;
    }
  };

  return {
    CadastrarCandidato,
  };
}
