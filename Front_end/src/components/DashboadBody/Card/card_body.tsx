"use client";

import { TableCell, TableRow } from "@/components/ui/table";

import * as React from "react";

interface CellInfoProps {
  text: String;
  value: number;
}

export default function CellInfo({ text, value }: CellInfoProps) {
  return (
    <>
      <TableRow>
        <TableCell>{text}</TableCell>
        <TableCell>{value}</TableCell>
      </TableRow>
    </>
  );
}
