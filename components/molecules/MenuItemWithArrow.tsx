// components/molecules/MenuItemWithArrow.tsx
"use client";

import React from "react";
import { FaChevronDown } from "react-icons/fa6";

interface MenuItemWithArrowProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export default function MenuItemWithArrow({ text, onClick, className = "" }: MenuItemWithArrowProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1 text-gray-800 hover:text-blue-600 transition-colors ${className}`}
    >
      <span className="text-sm">{text}</span>
      <FaChevronDown className="text-xs" />
    </button>
  );
}

