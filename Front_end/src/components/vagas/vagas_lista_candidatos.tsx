"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import VagasActionButtons from "./vagas_actions/vagas_actions";
import { Candidatos, Employee, JobOffers } from "@/models/employee.model";
import { useState, useEffect, useCallback } from "react";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Dialog,
} from "../ui/dialog";

import CandidatosAPI from "@/api/candidatos.api";
import VagasAPI from "@/api/vagas.api";
import CandidatosActionButtons from "./candidatos_actions/candidatos_actions";

interface VagasListaCandidatosProps {
  jobOffer: JobOffers;
  onEditComplete: () => void;
}

export default function VagasListaCandidatos({
  jobOffer,
  onEditComplete,
}: VagasListaCandidatosProps) {
  const candidatos: Candidatos[] = jobOffer.candidatos.sort(
    (a, b) => a.id - b.id,
  );

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex flex-column">
            <InfoCircledIcon className="mr-3" />
            {jobOffer.nome}
          </div>
        </DialogTrigger>
        <DialogContent className="flex flex-col overflow-y-auto h-screen xl:min-w-[90rem] ">
          <DialogTitle className="flex justify-center">Lista de candidatos</DialogTitle>
          <DialogDescription >Vaga: {jobOffer.nome}</DialogDescription>

          <Table>
            <TableCaption>Lista de candidatos</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="flex justify-center items-center">
                  ID
                </TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>RG</TableHead>
                <TableHead>E-mail</TableHead>
                <TableHead>Resumo do Currículo</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {candidatos.map((candidato) => (
                <TableRow key={candidato.id}>
                  <TableCell>{candidato.id}</TableCell>
                  <TableCell>{candidato.nomeCandidato}</TableCell>
                  <TableCell>{candidato.rg}</TableCell>
                  <TableCell>{candidato.email}</TableCell>
                  <TableCell>{candidato.resumoCurriculo}</TableCell>
                  <TableCell>
                    <CandidatosActionButtons
                      id={candidato.id}
                      nome={candidato.nomeCandidato}
                      rg={candidato.rg}
                      email={candidato.email}
                      resumoCurriculo={candidato.resumoCurriculo}
                      onEditComplete={onEditComplete}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </DialogContent>
      </Dialog>
    </>
  );
}
