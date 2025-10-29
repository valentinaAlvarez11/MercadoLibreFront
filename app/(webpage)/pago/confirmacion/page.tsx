// app/(webpage)/pago/confirmacion/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { apiFetch } from "@/libs/singletonFetch";

interface CompraItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}

interface Compra {
  id: number;
  createdAt: string;
  items: CompraItem[];
  total: number;
  totalQuantity: number;
  address?: string | null;
}

export default function ConfirmacionPagoPage() {
  const [compras, setCompras] = useState<Compra[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await apiFetch("/compras", "GET");
        setCompras(data.compras || []);
      } catch (e: any) {
        setError(e?.message || "Error al cargar compras");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const formatCurrency = (amount: number) => `$${amount.toLocaleString("es-CO")}`;

  if (loading) return <div className="p-6">Cargando…</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;

  const last = compras[0];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold mb-2">Compra registrada</h1>
          <p className="text-gray-600 mb-6">Revisa el detalle de tu compra almacenada en la base de datos.</p>

          {last ? (
            <>
              <div className="mb-6 text-sm text-gray-700">
                <div><span className="font-medium">ID:</span> {last.id}</div>
                <div><span className="font-medium">Fecha:</span> {new Date(last.createdAt).toLocaleString()}</div>
                <div><span className="font-medium">Envío:</span> {last.address || "-"}</div>
                <div><span className="font-medium">Total:</span> {formatCurrency(last.total)} ({last.totalQuantity} productos)</div>
              </div>

              <div className="divide-y">
                {last.items.map((it, idx) => (
                  <div key={idx} className="py-3 flex items-center gap-4">
                    <div className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center overflow-hidden">
                      {it.imageUrl ? <img src={it.imageUrl} alt={it.name} className="w-10 h-10 object-contain"/> : null}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800">{it.name}</div>
                      <div className="text-sm text-gray-600">x{it.quantity}</div>
                    </div>
                    <div className="text-sm font-semibold">{formatCurrency((it.price as any) * it.quantity)}</div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div>No hay compras registradas.</div>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { apiFetch } from "@/libs/singletonFetch";

type OrderItem = { id: string; name: string; price: number; quantity: number; imageUrl: string };
type Order = { id: number; user_email?: string; address?: string; items: OrderItem[]; subtotal: number; total: number; created_at: string };

export default function ConfirmacionPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams?.get('orderId');
  const [order, setOrder] = useState<Order | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!orderId) return;
    // Usar URL absoluta al backend
    apiFetch(`http://localhost:3000/orders/${orderId}`, 'GET')
      .then((data: any) => setOrder(data.order))
      .catch(() => setError('No se pudo cargar el pedido'));
  }, [orderId]);

  if (!orderId) return <div className="p-8 text-center">Pedido no especificado.</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;
  if (!order) return <div className="p-8 text-center">Cargando pedido...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">¡Gracias por tu compra!</h1>
        <p className="text-gray-600 mb-6">Número de pedido: <span className="font-semibold">#{order.id}</span></p>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Resumen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 space-y-4">
              {order.items.map((it) => (
                <div key={it.id + '-' + it.name} className="flex items-center gap-4 border-b pb-4">
                  <img src={it.imageUrl} alt={it.name} className="w-16 h-16 object-contain rounded" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-800">{it.name}</div>
                    <div className="text-xs text-gray-500">Cantidad: {it.quantity}</div>
                  </div>
                  <div className="text-sm font-semibold text-gray-800">${(it.price * it.quantity).toLocaleString('es-CO')}</div>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 rounded p-4 h-fit">
              <div className="text-sm flex justify-between mb-2"><span>Subtotal</span><span>${order.subtotal.toLocaleString('es-CO')}</span></div>
              <div className="text-sm flex justify-between mb-2"><span>Envío</span><span className="text-green-600 font-medium">Gratis</span></div>
              <div className="text-lg font-bold flex justify-between border-t pt-2"><span>Total</span><span>${order.total.toLocaleString('es-CO')}</span></div>
              <div className="text-xs text-gray-500 mt-3">Entregar en: {order.address || '—'}</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Volver al inicio</a>
        </div>
      </div>
    </div>
  );
}


