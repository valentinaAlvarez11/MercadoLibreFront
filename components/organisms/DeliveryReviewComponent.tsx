// components/organisms/DeliveryReviewComponent.tsx
"use client";

import React, { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { useDeliveryStore } from "@/store/deliveryStore";
import { FaMapMarkerAlt, FaBolt } from "react-icons/fa";
import { purchaseService } from "@/libs/purchaseService"; 
import { useRouter } from "next/navigation"; // ⬅️ IMPORTAR ROUTER PARA REDIRECCIÓN

export default function DeliveryReviewComponent() {
  const router = useRouter(); 

  // 🔑 CORRECCIÓN CLAVE: Extracción Individual del estado para evitar el loop
  const products = useCartStore(state => state.products);
  const clearCart = useCartStore(state => state.clearCart);

  const selectedOption = useDeliveryStore(state => state.selectedOption);
  const deliveryAddress = useDeliveryStore(state => state.deliveryAddress);
  const pickupLocation = useDeliveryStore(state => state.pickupLocation);
  const pickupAddress = useDeliveryStore(state => state.pickupAddress);
  const pickupDistance = useDeliveryStore(state => state.pickupDistance);

  const [selectedDate, setSelectedDate] = useState("jueves");
  const [isLoading, setIsLoading] = useState(false); // ⬅️ Estado de carga
  const [error, setError] = useState<string | null>(null); // ⬅️ Estado de error

  // Calcular totales
  const subtotal = products.reduce((acc, item) => acc + (Number(item.price) * item.quantity), 0); // Usar Number() por si price es string
  const totalQuantity = products.reduce((acc, item) => acc + item.quantity, 0);
  const total = subtotal;

  const formatCurrency = (amount: number) => `$${amount.toLocaleString('es-CO')}`;

  const handleContinue = async () => {
    if (products.length === 0) return;

    setIsLoading(true);
    setError(null);
    
    // Mapear productos del carrito al formato esperado por la API /buy
    const purchaseItems = products.map(p => ({
        productId: Number(p.id), // Aseguramos que sea número
        quantity: p.quantity
    }));

    try {
        // En un caso real, esto sería una sola llamada de API. 
        // Para el propósito de descontar el stock por producto:
        const results = [];
        for (const item of purchaseItems) {
            const result = await purchaseService.confirmPurchase(item);
            results.push(result);
        }

        alert("¡Compra confirmada! Se crearon " + results.length + " órdenes y se descontó el stock.");
        
        clearCart(); // ⬅️ Vaciar el carrito
        
        // Redirigir a una página de confirmación de compra
        router.push('/purchase-confirmation'); 

    } catch (err: any) {
        console.error("Error al procesar la compra:", err);
        setError(err.message || "Error desconocido al procesar la compra. Inténtalo de nuevo.");
    } finally {
        setIsLoading(false);
    }
  };

  // Determinar el contenido según la opción seleccionada
  const isPickupPoint = selectedOption === 'punto';
  const pageTitle = isPickupPoint 
    ? "Revisa cuándo llega al punto de entrega"
    : "Revisa cuándo llega tu compra";
  
  const locationText = isPickupPoint 
    ? `Retiro en ${pickupLocation}`
    : `Envío a ${deliveryAddress.split(' - ')[0]}`;

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
              
              {/* Tarjeta de opción de envío (Ejemplo estático) */}
              <div className="border border-gray-200 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
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
                    
                    {/* Imagen del producto */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                        <img
                          src="https://http2.mlstatic.com/D_NQ_NP_2X_875158-MCO93938418234_102025-F.webp"
                          alt="Producto"
                          className="w-12 h-12 object-contain rounded-full"
                        />
                      </div>
                      <div className="text-xs text-center text-gray-600 font-medium">LECHE</div>
                    </div>
                    
                    {/* Costo de envío */}
                    <div className="flex-shrink-0 text-right">
                      <span className="text-green-600 font-semibold text-sm">Gratis</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mensaje de error */}
              {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                      <strong className="font-bold">Error de compra:</strong>
                      <span className="block sm:inline ml-2">{error}</span>
                  </div>
              )}

              {/* Botón Continuar */}
              <div className="flex justify-center">
                <button
                  onClick={handleContinue}
                  disabled={isLoading || products.length === 0}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md disabled:bg-gray-400"
                >
                  {isLoading ? "Procesando..." : "Confirmar Compra"} 
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