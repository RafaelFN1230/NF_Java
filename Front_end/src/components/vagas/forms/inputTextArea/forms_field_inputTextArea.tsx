"use client";
import React from "react";
import { FormField } from "@/components/ui/form";
import InputTextAreaForms from "./forms_inputTextArea";

interface InputFormsProps {
  name: string;
  text: string;
  placeholder: string;
  type: string;
  form: any;
}

export function InputTextAreaFormField({
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
          <InputTextAreaForms
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

export default InputTextAreaFormField;
