// components/organisms/CuponesComponent.tsx
"use client";

import React, { useState } from "react";
import { FaShoppingBag, FaMobileAlt, FaTshirt, FaHardHat, FaStar, FaClock, FaInfoCircle } from "react-icons/fa";

export default function CuponesComponent() {
  const [codigoCupon, setCodigoCupon] = useState("");

  const cupones = [
    {
      icon: FaShoppingBag,
      titulo: "$100.000 OFF en Sony",
      compraMinima: "$899.900",
      tope: "$100.000"
    },
    {
      icon: FaTshirt,
      titulo: "17% OFF Gafas Gucci Balenci",
      compraMinima: "$1.000.000",
      tope: "$2.000.000"
    },
    {
      icon: FaHardHat,
      titulo: "10% OFF SIKA",
      compraMinima: "$500.000",
      tope: "$52.500"
    },
    {
      icon: FaMobileAlt,
      titulo: "$200.000 OFF en Celulares",
      compraMinima: "$2.000.000",
      tope: "$400.000"
    },
    {
      icon: FaTshirt,
      titulo: "17% OFF Gafas York + 40%",
      compraMinima: "$90.000",
      tope: "$200.000"
    },
    {
      icon: FaHardHat,
      titulo: "10% OFF SIKA",
      compraMinima: "$500.000",
      tope: "$52.500"
    },
    {
      icon: FaShoppingBag,
      titulo: "$50.000 OFF en Sony",
      compraMinima: "$399.900",
      tope: "$100.000"
    },
    {
      icon: FaHardHat,
      titulo: "10% OFF SIKA",
      compraMinima: "$500.000",
      tope: "$52.500"
    },
    {
      icon: FaHardHat,
      titulo: "10% OFF SIKA",
      compraMinima: "$500.000",
      tope: "$52.500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        {/* Título */}
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Cupones</h1>

        {/* Sección de ingreso de cupón */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <FaStar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 text-sm" />
              <input
                type="text"
                placeholder="Ingresar código de cupón"
                value={codigoCupon}
                onChange={(e) => setCodigoCupon(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
              Agregar cupón
            </button>
          </div>
          <div className="mt-4 text-right">
            <a href="#" className="text-blue-600 text-sm hover:underline">
              Cómo usar cupones
            </a>
          </div>
        </div>

        {/* Grid de cupones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cupones.map((cupon, index) => {
            const IconComponent = cupon.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <IconComponent className="text-blue-500 text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-lg mb-2">{cupon.titulo}</h3>
                    <p className="text-sm text-gray-600 mb-1">En productos seleccionados</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Compra mínima</span>
                    <span className="text-sm font-semibold text-gray-800">{cupon.compraMinima}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-gray-600">Tope de</span>
                      <FaInfoCircle className="text-gray-400 text-xs" />
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{cupon.tope}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaClock className="text-gray-400" />
                    <span>Vence el viernes</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">
                    Aplicar
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
