// src/components/molecules/CheckboxField.tsx
"use client";
import React from "react";
import Checkbox from "@/components/atoms/Checkbox";

type Props = {
  id: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: React.ReactNode;
  required?: boolean;
  className?: string;
};

export default function CheckboxField({ id, name, checked, onChange, label, required = false, className = "" }: Props) {
  return (
    <div className={`mb-4 ${className}`}>
      <Checkbox id={id} name={name} checked={checked} onChange={onChange} label={label} required={required} />
    </div>
  );
}
