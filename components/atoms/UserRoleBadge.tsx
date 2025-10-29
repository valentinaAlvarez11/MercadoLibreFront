// components/atoms/UserRoleBadge.tsx
"use client";

import React from "react";

interface UserRoleBadgeProps {
  rol_comprador: boolean;
  rol_vendedor: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-2.5 py-1",
  lg: "text-base px-3 py-1.5",
};

export default function UserRoleBadge({ 
  rol_comprador, 
  rol_vendedor, 
  size = "sm",
  className = "" 
}: UserRoleBadgeProps) {
  return (
    <div className={`flex gap-1 ${className}`}>
      {rol_comprador && (
        <span className={`bg-blue-100 text-blue-800 rounded-full font-semibold ${sizeClasses[size]}`}>
          Comprador
        </span>
      )}
      {rol_vendedor && (
        <span className={`bg-green-100 text-green-800 rounded-full font-semibold ${sizeClasses[size]}`}>
          Vendedor
        </span>
      )}
      {!rol_comprador && !rol_vendedor && (
        <span className={`bg-gray-100 text-gray-600 rounded-full font-semibold ${sizeClasses[size]}`}>
          Sin roles
        </span>
      )}
    </div>
  );
}

