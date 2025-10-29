// components/atoms/Avatar.tsx
"use client";

import React from "react";

interface AvatarProps {
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-12 h-12 text-base",
};

export default function Avatar({ name, size = "md", className = "" }: AvatarProps) {
  // Obtener iniciales del nombre
  const getInitials = (fullName: string) => {
    const names = fullName.split(" ");
    if (names.length >= 2) {
      return `${names[0][0]}${names[1][0]}`.toUpperCase();
    }
    return fullName.substring(0, 2).toUpperCase();
  };

  const initials = getInitials(name);

  return (
    <div
      className={`bg-white border-2 border-gray-300 rounded-full flex items-center justify-center font-semibold text-gray-700 ${sizeClasses[size]} ${className}`}
    >
      {initials}
    </div>
  );
}

