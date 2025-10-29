// components/organisms/OfertasComponent.tsx
"use client";

import React from "react";
import { FaPercentage, FaBolt, FaDollarSign, FaRobot, FaMobileAlt, FaLaptop } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

export default function OfertasComponent() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sección principal de Ofertas */}
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        {/* Título y tagline */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Ofertas</h1>
          <p className="text-lg text-gray-600">¡Encuentra precios increíbles cada día!</p>
        </div>

        {/* Navegación horizontal de tipos de ofertas */}
        <div className="flex items-center gap-8 mb-8 overflow-x-auto pb-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg border-b-2 border-blue-500">
            <FaPercentage className="text-blue-600 text-lg" />
            <span className="text-blue-600 font-semibold whitespace-nowrap">Todas las ofertas</span>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <FaBolt className="text-gray-600 text-lg" />
            <span className="text-gray-700 whitespace-nowrap">Ofertas relámpago</span>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <FaDollarSign className="text-gray-600 text-lg" />
            <span className="text-gray-700 whitespace-nowrap">Precios Imbatibles</span>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <FaRobot className="text-gray-600 text-lg" />
            <span className="text-gray-700 whitespace-nowrap">Juguetes hasta 55% OFF</span>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <FaMobileAlt className="text-gray-600 text-lg" />
            <span className="text-gray-700 whitespace-nowrap">Celulares</span>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <FaLaptop className="text-gray-600 text-lg" />
            <span className="text-gray-700 whitespace-nowrap">Notebooks</span>
          </div>
          
          <FaChevronRight className="text-gray-400 text-lg" />
        </div>

        {/* Contenido principal con sidebar y productos */}
        <div className="flex gap-8">
          {/* Sidebar izquierdo */}
          <div className="w-80 bg-white rounded-lg p-6 shadow-sm">
            <div className="space-y-6">
              {/* Todas */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Todas</h3>
                <p className="text-sm text-gray-600">10.000 productos</p>
              </div>

              {/* FULL te ahorra envíos */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">FULL te ahorra envíos</h3>
                  <p className="text-sm text-gray-600">Carrito de compras</p>
                </div>
                <div className="w-12 h-6 bg-blue-500 rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                </div>
              </div>

              {/* Tipo de promoción */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Tipo de promoción</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="text-sm text-gray-700">Oferta del día (1059)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm text-gray-700">Oferta relámpago (200)</span>
                  </label>
                </div>
              </div>

              {/* Categorías */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Categorías</h3>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {[
                    "Accesorios para Vehículos (1083)",
                    "Agro (143)",
                    "Alimentos y Bebidas (168)",
                    "Antigüedades y Colecciones (15)",
                    "Arte, Papelería y Mercería (197)",
                    "Bebés (431)",
                    "Belleza y Cuidado Personal (1058)",
                    "Celulares y Teléfonos (778)",
                    "Computación (1054)",
                    "Consolas y Videojuegos (188)"
                  ].map((category, index) => (
                    <div key={index} className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer py-1">
                      {category}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Área principal de productos */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Producto 1 - iPhone */}
              <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                <div className="relative mb-4">
                  <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded absolute top-2 left-2 font-semibold">
                    OFERTA DEL DÍA
                  </div>
                  <div className="w-full h-48 rounded-lg overflow-hidden">
                    <img 
                      src="https://http2.mlstatic.com/D_NQ_NP_2X_949137-MLA95351586753_102025-F.webp" 
                      alt="Apple iPhone 17 Pro Max" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-800 text-sm">Apple iPhone 17 Pro Max (256 Gb) - Naranja Cósmico</h3>
                  
                  <div className="flex items-center gap-1">
                    <div className="flex text-yellow-400">
                      {"★".repeat(4)}<span className="text-gray-300">★</span>
                    </div>
                    <span className="text-xs text-gray-600">(9)</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-green-600">$6.189.900</span>
                    <span className="text-sm text-gray-500 line-through">$9.999.990</span>
                    <span className="text-xs bg-red-100 text-red-600 px-1 rounded">38% OFF</span>
                  </div>
                  
                  <p className="text-xs text-gray-600">9 cuotas de $ 687.767 con 0% interés</p>
                  <p className="text-xs text-blue-600">Cupón $ 200.000 OFF</p>
                  <p className="text-xs text-green-600">Llega gratis mañana</p>
                  <p className="text-xs text-gray-500">Disponible en 3 colores</p>
                </div>
              </div>

              {/* Producto 2 - Aspiradora */}
              <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                <div className="relative mb-4">
                  <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded absolute top-2 left-2 font-semibold">
                    OFERTA DEL DÍA
                  </div>
                  <div className="w-full h-48 rounded-lg overflow-hidden">
                    <img 
                      src="https://http2.mlstatic.com/D_NQ_NP_2X_645337-MLA95351525145_102025-F.webp" 
                      alt="Aspiradora Karcher" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-600">Por</span>
                    <span className="text-xs font-semibold text-blue-600">Karcher</span>
                    <span className="text-blue-600 text-xs">✓</span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-800 text-sm">Aspiradora 3 En 1 Agua Y Polvo Wdl1s 12l Karcher Color Amarillo</h3>
                  
                  <div className="flex items-center gap-1">
                    <div className="flex text-yellow-400">
                      {"★".repeat(5)}
                    </div>
                    <span className="text-xs text-gray-600">(10)</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-green-600">$379.900</span>
                    <span className="text-sm text-gray-500 line-through">$499.900</span>
                    <span className="text-xs bg-red-100 text-red-600 px-1 rounded">24% OFF</span>
                  </div>
                  
                  <p className="text-xs text-gray-600">12 cuotas de $ 31.658 con 0% interés</p>
                  <p className="text-xs text-green-600">Envío gratis FULL</p>
                </div>
              </div>

              {/* Producto 3 - Tenis Nike */}
              <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                <div className="relative mb-4">
                  <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded absolute top-2 left-2 font-semibold">
                    OFERTA DEL DÍA
                  </div>
                  <div className="w-full h-48 rounded-lg overflow-hidden">
                    <img 
                      src="https://http2.mlstatic.com/D_NQ_NP_2X_889881-MCO84889341033_052025-F.webp" 
                      alt="Nike Air Max Nuaxis" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-semibold text-blue-600">NIKE</span>
                    <span className="text-blue-600 text-xs">✓</span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-800 text-sm">Tenis Hombre Nike Air Max Nuaxis</h3>
                  
                  <div className="flex items-center gap-1">
                    <div className="flex text-yellow-400">
                      {"★".repeat(5)}
                    </div>
                    <span className="text-xs text-gray-600">(3)</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-green-600">$274.518</span>
                    <span className="text-sm text-gray-500 line-through">$424.950</span>
                    <span className="text-xs bg-red-100 text-red-600 px-1 rounded">35% OFF</span>
                  </div>
                  
                  <p className="text-xs text-gray-600">3 cuotas de $ 91.506 con 0% interés</p>
                  <p className="text-xs text-green-600">Envío gratis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
