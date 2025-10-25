// app/authorization/login/page.tsx
import React from "react";
import Link from "next/link";
import LoginForm from "@/components/organisms/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-sm font-sans">
      <div className="flex justify-center items-center h-screen bg-white">
        {/* Contenedor de la izquierda para el título */}
        <div className="w-[500px] p-8 pt-15 mr-4 mb-40">
          <h1 className="text-3xl font-semibold text-left">
            Ingresa tu e-mail o teléfono para iniciar sesión
          </h1>
          <div className="mt-70">
            <Link href="/security" className="inline-flex items-center space-x-2 rounded-lg shadow-md p-4 bg-white hover:bg-gray-100">
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>Tengo un problema de seguridad</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
            <Link href="/help" className="block mt-4 text-blue-500 text-sm hover:underline">
              Necesito ayuda
            </Link>
          </div>
        </div>
        <LoginForm />
      </div>

      <footer className="fixed bottom-0 left-0 w-full bg-gray-100 text-gray-500 text-xs p-7 flex justify-between items-center shadow-inner">
        <div className="flex items-center space-x-4">
          <Link href="/privacy" className="hover:underline text-blue-600">Cómo cuidamos tu privacidad</Link>
          <span>Copyright © 1999-2025 MercadoLibre Colombia LTDA.</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Protegido por reCAPTCHA.</span>
          <Link href="/privacy-policy" className="hover:underline text-black">Privacidad</Link>
          <Link href="/terms" className="hover:underline text-black">Condiciones</Link>
        </div>
      </footer>
    </div>
  );
}
