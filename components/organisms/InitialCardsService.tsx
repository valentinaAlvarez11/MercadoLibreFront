// components/organisms/InitialCardsService.tsx
import React from 'react';

const InitialCardsService = () => {
  return (
    <>
      {/* Card 1: Visto recientemente (MOVILIDA AL ORGANISMO) */}
      <div className="bg-white rounded-xl shadow-lg w-[158px] h-[285px] flex flex-col items-center p-4">
        <span className="font-bold text-sm text-gray-800 mb-3 text-center">Visto recientemente</span>
        <img
          src="https://http2.mlstatic.com/D_NQ_NP_2X_601857-MLA5495309220_042023-F.webp"
          alt="Portátil Asus"
          width={100}
          height={70}
          className="mb-3 object-contain"
        />
        <div className="text-xs text-gray-700 text-center mb-2 leading-tight">Portátil Asus M1502ya Ryzen 7 7730u 16gb...</div>
        <div className="text-xs line-through text-gray-400 mb-1">$3.999.000</div>
        <div className="text-sm font-bold text-green-600 mb-1">$1.989.000 <span className="text-xs text-green-500">50% OFF</span></div>
        <div className="text-xs text-green-600">Envío gratis ⚡ FULL</div>
      </div>

      {/* Card 2: Ingresa tu ubicación */}
      <div className="bg-white rounded-xl shadow-lg w-[158px] h-[285px] flex flex-col items-center p-4">
        <span className="font-bold text-sm text-gray-800 mb-3 text-center w-full block">Ingresa tu ubicación</span>
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-3 relative">
          <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#FFD600] rounded-full border-2 border-gray-600"></div>
        </div>
        <div className="text-xs text-gray-700 text-center mb-4 leading-tight">Consulta costos y tiempos de entrega.</div>
        <button className="bg-[#3483FA] text-white rounded-lg px-4 py-2 text-xs font-medium w-full">Ingresar ubicación</button>
      </div>

      {/* Card 3: Ingresa a tu cuenta */}
      <div className="bg-white rounded-xl shadow-lg w-[158px] h-[285px] flex flex-col items-center p-4">
        <span className="font-bold text-sm text-gray-800 mb-3 text-center w-full block">Ingresa a tu cuenta</span>
        <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-3 relative">
          <div className="w-12 h-8 bg-[#FFD600] rounded-sm"></div>
          <div className="absolute top-2 left-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="text-xs text-gray-700 text-center mb-4 leading-tight">Disfruta de ofertas y compra sin límites.</div>
        <button className="bg-[#3483FA] text-white rounded-lg px-4 py-2 text-xs font-medium w-full">Ingresar a tu cuenta</button>
      </div>

      {/* Card 4: Medios de pago */}
      <div className="bg-white rounded-xl shadow-lg w-[158px] h-[285px] flex flex-col items-center p-4">
        <span className="font-bold text-sm text-gray-800 mb-3 text-center w-full block">Medios de pago</span>
        <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-3 relative">
          <div className="w-12 h-8 bg-[#FFD600] rounded-lg"></div>
          <div className="absolute top-1 left-2 w-8 h-6 bg-white rounded-sm border border-gray-400"></div>
        </div>
        <div className="text-xs text-gray-700 text-center mb-4 leading-tight">Paga tus compras de forma rápida y segura.</div>
        <button className="bg-[#3483FA] text-white rounded-lg px-4 py-2 text-xs font-medium w-full">Conocer medios de pago</button>
      </div>

      {/* Card 5: Menos de $40.000 */}
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
        <button className="bg-[#3483FA] text-white rounded-lg px-4 py-2 text-xs font-medium w-full">Mostrar productos</button>
      </div>

      {/* Card 6: Más vendidos */}
      <div className="bg-white rounded-xl shadow-lg w-[158px] h-[285px] flex flex-col items-center p-4">
        <span className="font-bold text-sm text-gray-800 mb-3 text-center w-full block">Más vendidos</span>
        <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-3 relative">
          <div className="w-10 h-8 bg-[#FFD600] rounded-lg"></div>
          <div className="absolute top-1 right-1 w-4 h-3 bg-white rounded-sm border border-gray-400"></div>
          <div className="absolute bottom-1 left-1 w-3 h-2 bg-white rounded-sm border border-gray-400"></div>
        </div>
        <div className="text-xs text-gray-700 text-center mb-4 leading-tight">Explora los productos que son tendencia.</div>
        <button className="bg-[#3483FA] text-white rounded-lg px-4 py-2 text-xs font-medium w-full">Ir a Más vendidos</button>
      </div>
    </>
  );
};

export default InitialCardsService;