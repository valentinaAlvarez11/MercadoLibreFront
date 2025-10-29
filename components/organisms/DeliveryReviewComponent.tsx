// components/organisms/DeliveryReviewComponent.tsx
"use client";

import React, { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { useDeliveryStore } from "@/store/deliveryStore";
import { FaMapMarkerAlt, FaBolt } from "react-icons/fa";

export default function DeliveryReviewComponent() {
  const { products } = useCartStore();
  const { selectedOption, deliveryAddress, pickupLocation, pickupAddress, pickupDistance } = useDeliveryStore();
  const [selectedDate, setSelectedDate] = useState("jueves");

  // Calcular totales
  const subtotal = products.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalQuantity = products.reduce((acc, item) => acc + item.quantity, 0);
  const total = subtotal;

  const formatCurrency = (amount: number) => `$${amount.toLocaleString('es-CO')}`;

  const handleContinue = () => {
    // Aquí se podría navegar a la siguiente página del proceso de compra
    alert(`Continuando con entrega el ${selectedDate}`);
  };

  // Determinar el contenido según la opción seleccionada
  const isPickupPoint = selectedOption === 'punto';
  const pageTitle = isPickupPoint 
    ? "Revisa cuándo llega al punto de entrega"
    : "Revisa cuándo llega tu compra";
  
  const locationText = isPickupPoint 
    ? `Retiro en ${pickupLocation}`
    : `Envío a ${deliveryAddress.split(' - ')[0]}`;

  const firstProduct = products[0];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Columna izquierda: Revisión de entrega */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-6">{pageTitle}</h1>
              
              {/* Ubicación del punto de entrega o domicilio */}
              <div className="flex items-center gap-2 mb-6">
                <FaMapMarkerAlt className="text-gray-600 text-lg" />
                <span className="text-lg text-gray-700">{locationText}</span>
              </div>
              
              {/* Tarjeta de opción de envío */}
              <div className="border border-gray-200 rounded-lg p-5 mb-6">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-center gap-4">
                    {/* Información de envío */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm font-medium text-gray-700">Envío 1</span>
                        <FaBolt className="text-green-600 text-sm" />
                        <span className="text-green-600 text-sm font-semibold">FULL</span>
                      </div>
                      
                      {/* Radio button para fecha */}
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          id="jueves"
                          name="deliveryDate"
                          value="jueves"
                          checked={selectedDate === "jueves"}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor="jueves" className="text-sm font-medium text-gray-800 cursor-pointer">
                          Llega el jueves
                        </label>
                      </div>
                    </div>
                    
                    {/* Lista de productos del carrito */}
                    <div className="flex-shrink-0 ml-auto mr-2">
                      {products.length > 0 ? (
                        <div className="flex flex-wrap justify-end gap-4 max-w-xl">
                          {products.map((p) => (
                            <div key={p.id} className="flex flex-col items-center w-20">
                              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                                <img src={p.imageUrl} alt={p.name} className="w-12 h-12 object-contain rounded-full" />
                              </div>
                              <div className="text-[10px] text-center text-gray-600 font-medium line-clamp-2 mt-1">
                                {p.name}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-xs text-gray-500">Sin productos</div>
                      )}
                    </div>
                    
                    {/* Costo de envío */}
                    <div className="flex-shrink-0 text-right">
                      <span className="text-green-600 font-semibold text-sm">Gratis</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón Continuar */}
              <div className="flex justify-center">
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
