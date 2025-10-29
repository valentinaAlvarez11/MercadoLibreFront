// components/organisms/FavoritosComponent.tsx
"use client";

import Link from "next/link";

export default function FavoritosComponent() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Header con título */}
        <div className="bg-white rounded-t-lg border border-gray-200 border-b-0">
          <h1 className="text-2xl font-bold text-black px-6 py-4">Favoritos</h1>
        </div>

        {/* Contenido principal con estado vacío */}
        <div className="bg-gray-100 border-l border-r border-gray-200">
          <div className="flex flex-col items-center justify-center min-h-[400px] px-6 py-12">
            <p className="text-gray-700 text-center text-base leading-relaxed">
              Agrega aquí los productos que te gustaron para<br />
              poder verlos más tarde.
            </p>
          </div>
        </div>

        {/* Footer con enlace */}
        <div className="bg-white rounded-b-lg border border-gray-200 border-t-0">
          <div className="flex justify-center py-4">
            <Link 
              href="#" 
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors text-sm"
            >
              Ver todos los favoritos y listas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

