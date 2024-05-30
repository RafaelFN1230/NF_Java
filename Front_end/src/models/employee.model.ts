export interface Data {
  data: Employee[];
}

export interface Employee {
  id: number;
  nome: string;
  data: string;
  email: string;
  senha: string;
  vagas: JobOffers[];
}

export interface JobOffers {
  id: number;
  nome: string;
  descricao: string;
  salario: string;
  candidatos: Candidatos[];
}

export interface Candidatos {
  id: number;
  nomeCandidato: string;
  rg: string;
  email: string;
  resumoCurriculo: string;
}
