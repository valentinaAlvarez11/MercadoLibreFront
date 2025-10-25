// src/components/atoms/Checkbox.tsx
"use client";
import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: React.ReactNode;
  id?: string;
  className?: string;
};

export default function Checkbox({ label, id, className = "", ...rest }: Props) {
  return (
    <div className={`flex items-start ${className}`}>
      <input id={id} type="checkbox" {...rest} className="mt-1 mr-3 h-4 w-4" />
      {label && (
        <label htmlFor={id} className="text-sm text-gray-600">
          {label}
        </label>
      )}
    </div>
  );
}
