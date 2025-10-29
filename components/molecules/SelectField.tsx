"use client";
import React from "react";

type Option = { label: string; value: string };

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  disabled?: boolean;
};

export default function SelectField({ label, value, onChange, options, disabled }: Props) {
  return (
    <div className="flex flex-col gap-2 min-w-[220px]">
      <label className="text-sm text-gray-700">{label}</label>
      <select
        className="border border-gray-300 rounded-md h-11 px-3 text-gray-700 disabled:bg-gray-100 disabled:text-gray-400"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      >
        <option value="">Elija una opción</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}


