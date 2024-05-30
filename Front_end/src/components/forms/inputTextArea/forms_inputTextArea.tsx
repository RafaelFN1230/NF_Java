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

export function InputTextAreaForms({
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
          <textarea placeholder={placeholder} type={type} {...field}  className="box-border h-20 w-full bg-blackA2 shadow-blackA6 inline-flex appearance-none items-center justify-center rounded-md p-[10px] text-sm leading-none placeholder:text-muted-foreground outline-none border border-input focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none"/>
        </FormControl>
        <FormMessage />
      </FormItem>
    </>
  );
}

export default InputTextAreaForms;
