// components/organisms/FavoritosComponent.tsx
"use client";

import Link from "next/link";
import { useFavoritesStore } from "@/store/favoritesStore";

export default function FavoritosComponent() {
  const items = useFavoritesStore((s) => s.items);
  const remove = useFavoritesStore((s) => s.remove);

  const isEmpty = items.length === 0;

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Header con título */}
        <div className="bg-white rounded-t-lg border border-gray-200 border-b-0">
          <h1 className="text-2xl font-bold text-black px-6 py-4">Favoritos</h1>
        </div>

        {/* Contenido principal */}
        <div className="bg-gray-100 border-l border-r border-gray-200">
          {isEmpty ? (
            <div className="flex flex-col items-center justify-center min-h-[400px] px-6 py-12">
              <p className="text-gray-700 text-center text-base leading-relaxed">
                Agrega aquí los productos que te gustaron para<br />
                poder verlos más tarde.
              </p>
            </div>
          ) : (
            <div className="px-0 sm:px-6 py-0 sm:py-6">
              <div className="bg-white border-y border-gray-200">
                {items.map((p, idx) => (
                  <div key={p.id} className={`px-4 sm:px-6 ${idx !== 0 ? 'border-t border-gray-200' : ''}`}>
                    <div className="flex gap-4 py-4">
                      <Link href={`/product/${p.id}`} className="shrink-0 flex items-center justify-center w-20 h-20">
                        <img src={p.imageUrl} alt={p.name} className="w-20 h-20 object-contain" />
                      </Link>
                      <div className="flex-1 min-w-0">
                        <Link href={`/product/${p.id}`} className="block">
                          <h3 className="text-sm sm:text-base font-medium text-[#333] leading-snug line-clamp-2">
                            {p.name}
                          </h3>
                        </Link>
                        {/* Subtexto opcional (marca, cuotas, badges) no disponible en modelo actual */}
                        <div className="mt-2 text-xs text-gray-500">
                          {/* Placeholder para futuras etiquetas (ej. FULL, cuotas) */}
                        </div>
                        <div className="mt-2 text-2xl font-bold text-[#333]">{p.price}</div>
                        <button
                          onClick={() => remove(p.id)}
                          className="mt-2 text-sm text-blue-600 hover:text-blue-800"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer con enlace */}
        <div className="bg-white rounded-b-lg border border-gray-200 border-t-0">
          <div className="flex justify-center py-4">
            <Link 
              href="/favoritos" 
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

