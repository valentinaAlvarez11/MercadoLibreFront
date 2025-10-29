// components/molecules/UserInfo.tsx
"use client";

import React from "react";
import UserRoleBadge from "../atoms/UserRoleBadge";

interface UserInfoProps {
  usuario: {
    nombre: string;
    email: string;
    rol_comprador: boolean;
    rol_vendedor: boolean;
  } | null;
  showEmail?: boolean;
  showRoles?: boolean;
  className?: string;
}

export default function UserInfo({ 
  usuario, 
  showEmail = false, 
  showRoles = true,
  className = "" 
}: UserInfoProps) {
  if (!usuario) {
    return (
      <div className={`text-gray-500 ${className}`}>
        No hay usuario autenticado
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="flex items-center gap-2">
        <span className="font-semibold text-gray-800">{usuario.nombre}</span>
      </div>
      
      {showEmail && (
        <span className="text-sm text-gray-600">{usuario.email}</span>
      )}
      
      {showRoles && (
        <UserRoleBadge 
          rol_comprador={usuario.rol_comprador} 
          rol_vendedor={usuario.rol_vendedor} 
          size="sm"
        />
      )}
    </div>
  );
}

