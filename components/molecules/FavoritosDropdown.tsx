// components/molecules/FavoritosDropdown.tsx
"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";

interface FavoritosDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FavoritosDropdown({ isOpen, onClose }: FavoritosDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute top-11 left-0 bg-white border border-gray-200 rounded-b-lg shadow-lg w-[450px] z-50"
    >
      {/* Título */}
      <div className="bg-white px-6 py-4 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-800">Favoritos</h2>
      </div>

      {/* Contenido principal con estado vacío */}
      <div className="bg-gray-100 px-6 py-12">
        <p className="text-gray-700 text-center text-base leading-relaxed">
          Agrega aquí los productos que te gustaron para<br />
          poder verlos más tarde.
        </p>
      </div>

      {/* Footer con enlace */}
      <div className="bg-white px-6 py-4 border-t border-gray-100">
        <div className="flex justify-center">
          <Link 
            href="/favoritos" 
            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors text-sm"
          >
            Ver todos los favoritos y listas
          </Link>
        </div>
      </div>
    </div>
  );
}

