"use client";
import React from "react";
import { FormField } from "@/components/ui/form";
import { InputFormsDisabled } from "./forms_input_disabled";

interface InputFormsProps {
  name: string;
  text: string;
  placeholder: string;
  type: string;
  form: any;
}

export function InputFormFieldDisabled({
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
          <InputFormsDisabled
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

export default InputFormFieldDisabled;
