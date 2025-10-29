"use client";
import React from "react";

type Props = {
  title: string;
  subtitle?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function ModalFrame({ title, subtitle, isOpen, onClose, children }: Props) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="absolute inset-0 flex items-start justify-center pt-20 px-4">
        <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg">
          <div className="flex items-start justify-between p-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
              {subtitle && (
                <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
              )}
            </div>
            <button onClick={onClose} aria-label="Cerrar" className="text-gray-500 hover:text-gray-700">✕</button>
          </div>
          <div className="px-6 pb-6">{children}</div>
        </div>
      </div>
    </div>
  );
}


