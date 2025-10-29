// components/organisms/DeliveryOptionsComponent.tsx
"use client";

import React, { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { useDeliveryStore } from "@/store/deliveryStore";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt, FaClock, FaChevronRight } from "react-icons/fa";

export default function DeliveryOptionsComponent() {
  const { products } = useCartStore();
  const { setDeliveryOption } = useDeliveryStore();
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("domicilio");

  // Calcular totales
  const subtotal = products.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalQuantity = products.reduce((acc, item) => acc + item.quantity, 0);
  const total = subtotal;

  const formatCurrency = (amount: number) => `$${amount.toLocaleString('es-CO')}`;

  const handleContinue = () => {
    // Guardar la opción seleccionada en el store
    setDeliveryOption(selectedOption as 'domicilio' | 'punto');
    router.push('/revisar-entrega');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Columna izquierda: Opciones de entrega */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-6">Elige la forma de entrega</h1>
              
              <div className="space-y-4">
                {/* Opción 1: Envío a domicilio */}
                <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <input
                        type="radio"
                        id="domicilio"
                        name="delivery"
                        value="domicilio"
                        checked={selectedOption === "domicilio"}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <label htmlFor="domicilio" className="block cursor-pointer">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-lg font-semibold text-gray-800">Enviar a domicilio</span>
                          <span className="text-green-600 font-semibold">Gratis</span>
                        </div>
                        
                        <div className="text-sm text-gray-600 mb-2">
                          Carrera 11 #55a-12 casa - Villa Hermosa, Caldas
                        </div>
                        
                        <div className="text-sm text-gray-500 mb-3">
                          Residencial
                        </div>
                        
                        <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          Modificar domicilio o elegir otro
                        </a>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Opción 2: Retiro en punto de entrega */}
                <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <input
                        type="radio"
                        id="punto"
                        name="delivery"
                        value="punto"
                        checked={selectedOption === "punto"}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <label htmlFor="punto" className="block cursor-pointer">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-lg font-semibold text-gray-800">Retirar en un punto de entrega</span>
                          <span className="text-green-600 font-semibold">Gratis</span>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-2">
                          <FaMapMarkerAlt className="text-green-600 text-sm" />
                          <span className="text-green-600 text-sm font-medium">A 400 m de tu domicilio</span>
                        </div>
                        
                        <div className="text-sm text-gray-600 mb-2">
                          Agencia Mercado Libre - Tennis manizalesss - Calle 9 #09-22 - Chipre
                        </div>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <FaClock className="text-gray-500 text-sm" />
                          <span className="text-sm text-gray-500">Lu a Sá: 10 a 19 hs.</span>
                        </div>
                        
                        <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          Ver punto en el mapa o elegir otro
                        </a>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón Continuar */}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={handleContinue}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
                >
                  Continuar
                </button>
              </div>
            </div>
          </div>

          {/* Columna derecha: Resumen de compra */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-lg font-bold mb-4">Resumen de compra</h2>
              
              <div className="space-y-3">
                {/* Productos */}
                <div className="flex justify-between text-sm">
                  <span>Productos ({totalQuantity})</span>
                  <span className="font-medium">{formatCurrency(subtotal)}</span>
                </div>
                
                {/* Envío */}
                <div className="flex justify-between text-sm">
                  <span>Envío</span>
                  <span className="font-semibold text-green-600">Gratis</span>
                </div>
              </div>

              {/* Total */}
              <div className="pt-4 border-t border-gray-200 mt-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
