"use client";
import { Employee, JobOffers } from "@/models/employee.model";

export default function MainDashboardDonutChartViewModel() {
  interface EmployeeData {
    vagasComCandidatos: number;
    vagasSemCandidatos: number;
  }

  function GetData(funcionarios: Employee[] | null): EmployeeData {
    if (funcionarios!== null && funcionarios !== undefined) {
      let vagasComCandidatos: number = 0
      let vagasSemCandidatos: number = 0
      console.log("MainDashboardDonutChartViewModel", funcionarios)
      funcionarios.forEach((funcionario: Employee) => {
      if (funcionario.vagas.length > 0) {
        funcionario.vagas.forEach((vaga: JobOffers) => {
          if (vaga.candidatos.length > 0) {
            vagasComCandidatos += 1;
          } else {
            vagasSemCandidatos += 1;
          }
        });
      }
      
    });
    const employeeData: EmployeeData = {
      vagasComCandidatos: vagasComCandidatos,
      vagasSemCandidatos: vagasSemCandidatos,
    }
    return employeeData;
  } else {
    const dataNull: EmployeeData = {
      vagasComCandidatos: 0,
      vagasSemCandidatos: 0,
    }

    return dataNull
  }
  }
  return {
    GetData
  };
}
