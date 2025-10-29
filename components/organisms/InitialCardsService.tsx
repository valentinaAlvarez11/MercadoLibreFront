// components/organisms/InitialCardsService.tsx
import React from 'react';

const InitialCardsService = () => {
  return (
    <>
      {/* Menos de $40.000 */}
      <div className="bg-white rounded-xl shadow-lg w-[158px] h-[285px] flex flex-col items-center p-4">
        <span className="font-bold text-sm text-gray-800 mb-3 text-center w-full block">Menos de $40.000</span>
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-3 relative">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center mb-1">
              <span className="text-white text-xs font-bold">$</span>
            </div>
            <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
            <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
          </div>
        </div>
        <div className="text-xs text-gray-700 text-center mb-4 leading-tight">Descubre productos con precios bajos.</div>
        <a href="/categorias" className="rounded-lg px-4 py-2 text-xs font-medium w-full text-blue-600 border border-blue-200 text-center hover:bg-blue-50">Mostrar productos</a>
      </div>

      {/* Más vendidos */}
      <div className="bg-white rounded-xl shadow-lg w-[158px] h-[285px] flex flex-col items-center p-4">
        <span className="font-bold text-sm text-gray-800 mb-3 text-center w-full block">Más vendidos</span>
        <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-3 relative">
          <div className="w-10 h-8 bg-[#FFD600] rounded-lg"></div>
          <div className="absolute top-1 right-1 w-4 h-3 bg-white rounded-sm border border-gray-400"></div>
          <div className="absolute bottom-1 left-1 w-3 h-2 bg-white rounded-sm border border-gray-400"></div>
        </div>
        <div className="text-xs text-gray-700 text-center mb-4 leading-tight">Explora los productos que son tendencia.</div>
        <a href="https://www.mercadolibre.com.co/mas-vendidos#da_id=top_sales&da_position=6&id_origin=/home/dynamic_access&da_sort_algorithm=ranker" className="rounded-lg px-4 py-2 text-xs font-medium w-full text-blue-600 border border-blue-200 text-center hover:bg-blue-50">Ir a Más vendidos</a>
      </div>

      {/* Compra protegida */}
      <div className="bg-white rounded-xl shadow-lg w-[158px] h-[285px] flex flex-col items-center p-4">
        <span className="font-bold text-sm text-gray-800 mb-3 text-center w-full block">Compra protegida</span>
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-3 relative">
          <div className="w-9 h-9 bg-[#FFD600] rounded-md" />
          <div className="absolute -right-1 -bottom-1 w-5 h-5 bg-white rounded-full border border-gray-400" />
        </div>
        <div className="text-xs text-gray-700 text-center mb-4 leading-tight">Puedes devolver tu compra gratis.</div>
        <a href="https://www.mercadolibre.com.co/compra-protegida/#da_id=protected_buy&da_position=7&id_origin=/home/dynamic_access&da_sort_algorithm=ranker" className="rounded-lg px-4 py-2 text-xs font-medium w-full text-blue-600 border border-blue-200 text-center hover:bg-blue-50">Cómo funciona</a>
      </div>

      {/* Tiendas oficiales */}
      <div className="bg-white rounded-xl shadow-lg w-[158px] h-[285px] flex flex-col items-center p-4">
        <span className="font-bold text-sm text-gray-800 mb-3 text-center w-full block">Tiendas oficiales</span>
        <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-3 relative">
          <div className="w-10 h-8 bg-[#FFD600] rounded-md" />
          <div className="absolute top-1 left-1 w-3 h-3 bg-white rounded-sm border border-gray-400" />
          <div className="absolute bottom-1 right-1 w-3 h-3 bg-white rounded-sm border border-gray-400" />
        </div>
        <div className="text-xs text-gray-700 text-center mb-4 leading-tight">Encuentra tus marcas preferidas.</div>
        <a href="https://www.mercadolibre.com.co/tiendas-oficiales#da_id=official_stores&da_position=8&id_origin=/home/dynamic_access&da_sort_algorithm=ranker" className="rounded-lg px-4 py-2 text-xs font-medium w-full text-blue-600 border border-blue-200 text-center hover:bg-blue-50">Mostrar tiendas</a>
      </div>

      {/* Nuestras categorías */}
      <div className="bg-white rounded-xl shadow-lg w-[158px] h-[285px] flex flex-col items-center p-4">
        <span className="font-bold text-sm text-gray-800 mb-3 text-center w-full block">Nuestras categorías</span>
        <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-3 relative">
          <div className="w-8 h-8 bg-white rounded-sm border border-gray-400" />
          <div className="absolute right-0 top-0 w-6 h-6 bg-[#FFD600] rounded-full border border-white" />
        </div>
        <div className="text-xs text-gray-700 text-center mb-4 leading-tight">Encuentra celulares, ropa, inmuebles y más.</div>
        <a href="https://www.mercadolibre.com.co/categorias#da_id=categories&da_position=9&id_origin=/home/dynamic_access&da_sort_algorithm=ranker" className="rounded-lg px-4 py-2 text-xs font-medium w-full text-blue-600 border border-blue-200 text-center hover:bg-blue-50">Ir a Categorías</a>
      </div>

      {/* ¿Necesitas ayuda? */}
      <div className="bg-white rounded-xl shadow-lg w-[158px] h-[285px] flex flex-col items-center p-4">
        <span className="font-bold text-sm text-gray-800 mb-3 text-center w-full block">¿Necesitas ayuda?</span>
        <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-3 relative">
          <div className="w-9 h-12 bg-white rounded-md border border-gray-400" />
          <div className="absolute -right-1 top-1 w-6 h-6 bg-[#FFD600] rounded-full border border-white" />
        </div>
        <div className="text-xs text-gray-700 text-center mb-4 leading-tight">Resuelve tus dudas sobre compras o ventas.</div>
        <a href="https://www.mercadolibre.com.co/ayuda#da_id=help&da_position=10&id_origin=/home/dynamic_access&da_sort_algorithm=ranker" className="rounded-lg px-4 py-2 text-xs font-medium w-full text-blue-600 border border-blue-200 text-center hover:bg-blue-50">Ir a Ayuda</a>
      </div>
    </>
  );
};

export default InitialCardsService;