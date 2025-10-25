// src/components/molecules/FormFooter.tsx
"use client";
import React from "react";
import Link from "next/link";

export default function FormFooter() {
  return (
    <div className="border-t border-gray-200 p-6 text-center">
      <p className="text-sm text-gray-600">
        ¿Ya tienes cuenta?{" "}
        <Link href="/login" className="text-blue-600 hover:text-blue-800 transition">
          Ingresa
        </Link>
      </p>
    </div>
  );
}
