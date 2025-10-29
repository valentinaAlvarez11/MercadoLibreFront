// app/(webpage)/pago/page.tsx
"use client";

import React, { useMemo } from "react";
import { useCartStore } from "@/store/cartStore";
import { apiFetch } from "@/libs/singletonFetch";
import { useRouter } from "next/navigation";

export default function PagoPage() {
  const { products } = useCartStore();
  const router = useRouter();

  const { subtotal, totalQuantity, total } = useMemo(() => {
    const sub = products.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const qty = products.reduce((acc, item) => acc + item.quantity, 0);
    return { subtotal: sub, totalQuantity: qty, total: sub };
  }, [products]);

  const formatCurrency = (amount: number) => `$${amount.toLocaleString("es-CO")}`;

  const handleContinue = async () => {
    try {
      await apiFetch("/compras", "POST", {
        items: products,
        total,
        totalQuantity,
        address: "Entrega seleccionada"
      });
      router.push("/pago/confirmacion");
    } catch (err) {
      console.error(err);
      alert("No se pudo registrar la compra");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Columna izquierda: Formulario de tarjeta */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="border-b border-gray-100 p-5">
                <div className="inline-flex items-center gap-3 text-gray-800 font-semibold">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600">💳</div>
                  <span>Nueva tarjeta de débito</span>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Número de tarjeta</label>
                      <input
                        type="text"
                        placeholder="1234 1234 1234 1234"
                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Nombre del titular</label>
                      <input
                        type="text"
                        placeholder="Ej.: María López"
                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">Como aparece en la tarjeta.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-700 mb-2">Vencimiento</label>
                        <input
                          type="text"
                          placeholder="MM/AA"
                          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-700 mb-2">Código de seguridad</label>
                        <input
                          type="text"
                          placeholder="Ej.: 123"
                          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Documento del titular</label>
                      <div className="grid grid-cols-3 gap-3">
                        <select className="col-span-1 border rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option>CC</option>
                          <option>CE</option>
                          <option>NIT</option>
                        </select>
                        <input
                          type="text"
                          placeholder="9.999.999.999"
                          className="col-span-2 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <button onClick={handleContinue} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md">
                      Continuar
                    </button>
                  </div>

                  {/* Mock tarjeta visual */}
                  <div className="hidden lg:flex items-center justify-center">
                    <div className="w-[420px] h-[220px] bg-gray-100 rounded-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha: Resumen de compra */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-lg font-bold mb-4">Resumen de compra</h2>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Productos ({totalQuantity})</span>
                  <span className="font-medium">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Envío</span>
                  <span className="font-semibold text-green-600">Gratis</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 mt-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Pagas</span>
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


