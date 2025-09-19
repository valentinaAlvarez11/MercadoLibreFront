// components/molecules/SubscriptionCard.tsx
import React from 'react';
import { MdLocalShipping } from 'react-icons/md';
import { FaMoneyBillWave } from 'react-icons/fa';

const SubscriptionCard = () => {
  return (
    // Quitamos 'max-w-5xl mx-auto' para que el ancho se adapte al contenedor padre
    <div className="bg-white rounded-lg shadow-md my-8 overflow-hidden">
      {/* Sección superior con el gradiente y el botón */}
      <div className="flex justify-between items-center p-4 rounded-t-lg bg-gradient-to-r from-[#8a2be2] to-[#ff00ff]">
        <div className="flex items-center space-x-2">
          <span className="text-white text-base font-bold">meli+</span>
          <span className="text-white text-xl">Suscríbete desde $ 9.900/mes</span>
        </div>
        <button className="bg-white text-black text-sm font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition-colors">
          Suscribirme a Meli+
        </button>
      </div>

      {/* Sección inferior con los beneficios */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Ahorra en tus envíos, compras y pagos
        </h3>
        <div className="flex space-x-8">
          {/* Beneficio 1: Envío gratis */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gray-100 rounded-full">
              <MdLocalShipping className="text-purple-600 text-2xl" />
            </div>
            <p className="text-sm text-gray-700">Envios gratis en productos desde $ 30.000</p>
          </div>
          {/* Beneficio 2: Cashback */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gray-100 rounded-full">
              <FaMoneyBillWave className="text-purple-600 text-2xl" />
            </div>
            <p className="text-sm text-gray-700">Hasta 3% de cashback en Mercado Libre</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;