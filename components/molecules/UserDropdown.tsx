// components/molecules/UserDropdown.tsx
"use client";

import React, { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import Avatar from "@/components/atoms/Avatar";
import { FaChevronRight } from "react-icons/fa6";

interface UserDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UserDropdown({ isOpen, onClose }: UserDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { user, logout } = useAuthStore();
  const router = useRouter();

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

  const handleLogout = () => {
    logout();
    router.push('/');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute top-12 right-0 bg-white border border-gray-200 rounded-md shadow-lg min-w-[320px] z-50"
    >
      {/* Sección de usuario */}
      <div className="px-4 py-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Avatar name={user?.nombre || ""} size="md" />
          <div className="flex-1">
            <p className="text-lg font-bold text-black">{user?.nombre}</p>
            <button className="text-sm text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1">
              Mi perfil
              <FaChevronRight className="text-xs" />
            </button>
          </div>
        </div>
      </div>

      {/* Banner meli+ */}
      <div className="mx-4 my-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-md px-4 py-3 flex items-center justify-between cursor-pointer hover:opacity-90 transition-opacity">
        <div className="flex items-center gap-3">
          <span className="text-white font-bold text-base">meli+</span>
          <span className="text-white text-sm">Suscríbete desde $ 9.900</span>
        </div>
        <FaChevronRight className="text-white text-xs" />
      </div>

      {/* Lista de opciones */}
      <div className="py-2">
        {/* Sección de actividad del usuario */}
        <div className="border-b border-gray-200 pb-1">
          <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-colors">
            Compras
          </a>
          <a href="/favoritos" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-colors">
            Favoritos
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-colors">
            Historial
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-colors">
            Preguntas
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-colors">
            Opiniones
          </a>
        </div>

        {/* Sección de suscripciones */}
        <div className="border-b border-gray-200 pt-2 pb-1">
          <div className="px-4 py-2">
            <p className="text-sm font-semibold text-gray-800">Suscripciones</p>
          </div>
          <a href="#" className="flex items-center justify-between px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-colors">
            <span>Mercado Play</span>
            <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded">GRATIS</span>
          </a>
        </div>

        {/* Vender */}
        <div className="border-b border-gray-200 pb-1">
          <a href="/createproduct" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-colors">
            Vender
          </a>
        </div>
      </div>

      {/* Salir */}
      <div className="border-t border-gray-200 py-2">
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-colors"
        >
          Salir
        </button>
      </div>
    </div>
  );
}

