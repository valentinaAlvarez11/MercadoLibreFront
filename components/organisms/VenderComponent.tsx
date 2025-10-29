// components/organisms/VenderComponent.tsx
"use client";

import React from "react";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function VenderComponent() {
  const { isLoggedIn, user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn || !user) {
      router.push('/login');
    }
  }, [isLoggedIn, user, router]);

  if (!isLoggedIn || !user) {
    return null;
  }

  const handleComenzar = () => {
    // Redirigir al formulario de agregar domicilio
    router.push('/agregar-domicilio');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center px-4 pt-20">
      {/* Modal de error */}
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        {/* Iconos */}
        <div className="flex items-center justify-center mb-6">
          <img
            src="https://http2.mlstatic.com/storage/restrictions/images/platformMessages/high.svg"
            alt="Error icon"
            className="w-16 h-16"
          />
        </div>

        {/* Contenido del modal */}
        <div className="text-center">
          <h1 className="text-xl font-bold text-black mb-4">
            Debes ingresar la dirección de tu tienda
          </h1>
          
          <p className="text-gray-600 mb-8 whitespace-nowrap">
            No puedes continuar porque aún no agregas esta información.
          </p>

          {/* Botón */}
          <button
            onClick={handleComenzar}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-normal hover:bg-blue-700 transition-colors shadow-sm"
          >
            Comenzar
          </button>
        </div>
      </div>
    </div>
  );
}
