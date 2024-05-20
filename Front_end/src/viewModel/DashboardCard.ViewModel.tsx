"use client";
import { Employee, JobOffers } from "@/models/employee.model";

export default function DashboardCardViewModel() {
  interface EmployeeData {
    n_vagas: number;
    n_candidatos: number;
  }

  function GetData(funcionarios: Employee[] | null): EmployeeData {
    if (funcionarios!== null && funcionarios !== undefined) {
      let n_vagas: number = 0
      let n_candidatos: number = 0
      funcionarios.forEach((funcionario: Employee) => {
      if (funcionario.vagas.length > 0) {
        funcionario.vagas.forEach((vaga: JobOffers) => {
          n_candidatos += vaga.candidatos.length;
          n_vagas += 1
        });
      }
    });
    const employeeData: EmployeeData = {
      n_vagas: n_vagas,
      n_candidatos: n_candidatos,
    }
    return employeeData;
  } else {
    const dataNull: EmployeeData = {
      n_vagas: 0,
      n_candidatos: 0,
    }

    return dataNull
  }
  }
  return {
    GetData
  };
}
