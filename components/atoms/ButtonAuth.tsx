// src/components/atoms/Button.tsx
"use client";

import React from "react";

type Variant = "primary" | "ghost" | "outline";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  fullWidth?: boolean;
  className?: string;
};

export default function Button({
  variant = "primary",
  fullWidth = true,
  className = "",
  children,
  ...rest
}: Props) {
  // clases base y variantes (mantenemos la apariencia original)
  const base = "rounded-md text-lg font-semibold transition-colors";
  const width = fullWidth ? "w-full" : "";
  const padding =
    variant === "primary" ? "py-3" : variant === "outline" ? "py-2" : "py-3";

  const variantClass =
    variant === "primary"
      ? "bg-blue-500 text-white hover:bg-blue-600"
      : variant === "outline"
      ? "bg-white border border-gray-300 text-gray-800 hover:bg-gray-100"
      : "bg-transparent text-blue-500 hover:bg-blue-50";

  return (
    <button
      {...rest}
      className={`${width} ${base} ${padding} ${variantClass} ${className}`}
    >
      {children}
    </button>
  );
}
