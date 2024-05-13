export interface Data {
  data: Employee[];
}

export interface Employee {
  id: string;
  nome: string;
  data: string;
  email: string;
  senha: string;
  vagas: JobOffers[];
}

export interface JobOffers {
  id: string;
  nome: string;
  descricao: string;
  salario: string;
  candidatos: Candidatos[];
}

export interface Candidatos {
  id: string;
  nomeCandidato: string;
  rg: string;
  email: string;
}
