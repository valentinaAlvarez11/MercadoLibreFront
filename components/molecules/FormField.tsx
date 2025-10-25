// src/components/molecules/FormField.tsx
"use client";
import React from "react";
import Input from "@/components/atoms/InputAuth";

type Props = {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
};

export default function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
  className = "",
}: Props) {
  return (
    <div className={`mb-4 ${className}`}>
      <Input label={label} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} required={required} />
    </div>
  );
}
