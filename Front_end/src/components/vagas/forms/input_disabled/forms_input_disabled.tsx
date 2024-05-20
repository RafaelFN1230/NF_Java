"use client";
import React from "react";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface InputFormsProps {
  text: string;
  placeholder: string;
  type: string;
  field: any;
}

export function InputFormsDisabled({
  text,
  placeholder,
  type,
  field,
}: InputFormsProps) {
  return (
    <>
      <FormItem>
        <FormLabel>{text}</FormLabel>
        <FormControl>
          <Input disabled placeholder={placeholder} type={type} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    </>
  );
}

export default InputFormsDisabled;
