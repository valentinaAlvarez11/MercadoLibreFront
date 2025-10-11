// app/(webpage)/cart/page.tsx
"use client";

import React from 'react';
import { useCartStore } from '../../../store/cartStore';

const CartPage = () => {
  const products = useCartStore((state) => state.products);
  const removeProduct = useCartStore((state) => state.removeProduct);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const increment = (id: string, current: number) => {
    updateQuantity(id, current + 1);
  };
  const decrement = (id: string, current: number) => {
    if (current > 1) updateQuantity(id, current - 1);
  };

  const total: number = products.reduce((acc, p) => acc + p.price * p.quantity, 0 as number);

  // Lógica de Resumen (Ahora tipadas correctamente como number)
  const subtotal: number = total;
  const shippingCost: number = total > 0 ? 0 : 0; // Se mantiene 0 o 0 (number)
  const originalTotal: number = products.reduce((acc, p) => acc + p.price * p.quantity * 1.06, 0 as number); 
 
  return (
    <div className="min-h-[calc(100vh-120px)] bg-gray-100 py-8 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-light text-gray-800 mb-6 border-b pb-2">
          Tu Carrito de Compras
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Columna Izquierda: Lista de Productos */}
          <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              Productos <span className="text-green-600 font-bold ml-2">⚡FULL</span>
            </h2>
            
            {products.length === 0 ? (
              <div className="p-10 text-center text-gray-500">
                <p className="text-lg">Tu carrito está vacío. ¡Añade algunos productos!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {products.map((product) => (
                  <div key={product.id} className="flex border-b pb-4 mb-4 items-center">
                    
                    <input type="checkbox" defaultChecked className="mr-4 h-5 w-5 text-blue-600" />

                    <div className="w-20 h-20 bg-gray-100 rounded mr-4 flex-shrink-0">
                      {/*  */}
                    </div>
                    
                    <div className="flex-grow">
                      <p className="font-medium text-gray-900 line-clamp-2">{product.name}</p>
                      
                      <div className="text-sm text-red-500 my-1">OFERTA DEL DÍA</div>

                      <div className="flex items-center text-sm mt-1">
                        <span className="text-gray-400 line-through mr-2">${(product.price * 1.06).toFixed(2)}</span>
                        <span className="text-lg font-bold text-gray-800">${product.price.toFixed(2)}</span>
                      </div>

                      <div className="flex items-center space-x-4 mt-2">
                        <button className="text-blue-600 text-sm hover:underline" onClick={() => removeProduct(product.id)}>
                          Eliminar
                        </button>
                        
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button className="px-3 py-1 text-gray-600 hover:bg-gray-100" onClick={() => decrement(product.id, product.quantity)} disabled={product.quantity <= 1}>-</button>
                          <span className="px-3 text-sm font-medium">{product.quantity}</span>
                          <button className="px-3 py-1 text-gray-600 hover:bg-gray-100" onClick={() => increment(product.id, product.quantity)}>+</button>
                        </div>
                        
                        <span className="text-sm text-gray-500 ml-4">Disponibles: ~50</span>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Envío</span>
                    <span className="text-green-600 font-bold">Gratis</span>
                  </div>
                  <div className="h-2 bg-green-500 rounded-full my-2" style={{ width: '100%' }}></div>
                  <p className="text-sm text-gray-600">Aprovecha tu envío gratis agregando más productos ⚡FULL. <a href="#" className="text-blue-600 hover:underline">Ver productos &gt;</a></p>
                </div>
              </div>
            )}
          </div>

          {/* Columna Derecha: Resumen de Compra */}
          <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-md h-fit">
            <h2 className="text-xl font-semibold mb-4">Resumen de compra</h2>
            
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span>Producto</span>
                <div className='flex flex-col items-end'>
                    <span className="text-sm line-through text-gray-400">${originalTotal.toFixed(2)}</span>
                    <span className="font-medium text-gray-800">${subtotal.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span>Envío</span>
                <span className="text-green-600 font-bold">{shippingCost === 0 ? 'Gratis' : `$${shippingCost.toFixed(2)}`}</span>
              </div>
              <a href="#" className="text-blue-600 text-sm hover:underline block">Cupones (1 por aplicar)</a>
            </div>
            
            <div className="border-t border-gray-300 pt-4 mt-4 flex justify-between items-center">
              <span className="text-xl font-bold">Total</span>
              <span className="text-2xl font-bold text-gray-800">${(subtotal + shippingCost).toFixed(2)}</span>
            </div>
            
            <button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md mt-6 transition duration-200"
              onClick={() => products.length > 0 && alert("Redirigiendo a /checkout")} // Simulación de Redirección a Checkout
              disabled={products.length === 0}
            >
              Continuar comprando
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;