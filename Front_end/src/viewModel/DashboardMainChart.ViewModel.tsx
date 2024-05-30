"use client";
import { Employee, JobOffers } from "@/models/employee.model";

export default function MainDashboardChartViewModel() {
  interface EmployeeData {
    user: string;
    vagasComCandidatos: number;
    vagasSemCandidatos: number;
    n_candidatos: number;
  }

  function GetData(funcionarios: Employee[] | null): EmployeeData[] {
    if (funcionarios !== null && funcionarios !== undefined) {
      let employeeData: EmployeeData[] = [];
      funcionarios.forEach((funcionario: Employee) => {
        let vagasComCandidatos: number = 0;
        let vagasSemCandidatos: number = 0;
        let n_candidatos: number = 0;
        if (funcionario.vagas.length > 0) {
          funcionario.vagas.forEach((vaga: JobOffers) => {
            n_candidatos += vaga.candidatos.length;
            if (vaga.candidatos.length > 0) {
              vagasComCandidatos += 1;
            } else {
              vagasSemCandidatos += 1;
            }
          });
        }
        const employee: EmployeeData = {
          user: funcionario.nome,
          vagasComCandidatos: vagasComCandidatos,
          vagasSemCandidatos: vagasSemCandidatos,
          n_candidatos: n_candidatos,
        };
        employeeData.push(employee);
      });
      return employeeData;
    } else {
      const dataNull: EmployeeData[] = [
        {
          user: "Error na requisição",
          vagasComCandidatos: 0,
          vagasSemCandidatos: 0,
          n_candidatos: 0,
        },
      ];

      return dataNull;
    }
  }
  return {
    GetData,
  };
}
