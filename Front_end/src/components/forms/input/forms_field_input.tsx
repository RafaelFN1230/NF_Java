"use client";
import React from "react";
import { FormField } from "@/components/ui/form";
import InputForms from "./forms_input";

interface InputFormsProps {
  name: string;
  text: string;
  placeholder: string;
  type: string;
  form: any;
}

export function InputFormField({
  name,
  text,
  placeholder,
  type,
  form,
}: InputFormsProps) {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <InputForms
            text={text}
            placeholder={placeholder}
            type={type}
            field={{ ...field }}
          />
        )}
      />
    </>
  );
}

export default InputFormField;
