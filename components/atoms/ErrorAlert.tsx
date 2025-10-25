// src/components/atoms/ErrorAlert.tsx
"use client";
import React from "react";

export default function ErrorAlert({ children }: { children: React.ReactNode }) {
  return <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm">{children}</div>;
}
