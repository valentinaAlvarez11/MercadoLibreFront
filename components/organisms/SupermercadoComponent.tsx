// components/organisms/SupermercadoComponent.tsx
"use client";

import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaShoppingCart, FaStar, FaBolt } from "react-icons/fa";
import { useCartStore } from "@/store/cartStore";

export default function SupermercadoComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentBanner, setCurrentBanner] = useState(0);
  const { addToCart } = useCartStore();

  const categorias = [
    {
      title: "OFERTAS",
      image: "https://http2.mlstatic.com/D_Q_NP_772930-MLA83088529651_032025-G.webp"
    },
    {
      title: "PRODUCTOS DESDE $2900",
      image: "https://http2.mlstatic.com/D_Q_NP_849744-MLA95964479288_102025-G.webp"
    },
    {
      title: "CUIDADO PERSONAL",
      image: "https://http2.mlstatic.com/D_Q_NP_998551-MLA82800594278_032025-G.webp"
    },
    {
      title: "BEBÉS",
      image: "https://http2.mlstatic.com/D_Q_NP_604326-MLA82800651296_032025-G.webp"
    },
    {
      title: "BEBIDAS",
      image: "https://http2.mlstatic.com/D_Q_NP_840166-MLA82800623924_032025-G.webp"
    },
    {
      title: "LICORES",
      image: "https://http2.mlstatic.com/D_Q_NP_883550-MLA82800652390_032025-G.webp"
    },
    {
      title: "CUIDADO DEL CABELLO",
      image: "https://http2.mlstatic.com/D_Q_NP_948318-MLA84170518518_052025-G.webp"
    },
    {
      title: "SUPLEMENTOS",
      image: "https://http2.mlstatic.com/D_Q_NP_953666-MLA83088575437_032025-G.webp"
    }
  ];

  const masVendidos = [
    {
      id: 1,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_912821-MLA95832550755_102025-F.webp",
      nombre: "Sazon Completa Badia 793.8g",
      precio: "$ 43.900",
      cuotas: "3 cuotas de $ 14.633 con 0% interés",
      cupon: "Cupón 15% OFF",
      envio: "FULL-SÚPER",
      recomendado: true
    },
    {
      id: 2,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_962447-MCO89117865648_082025-F.webp",
      nombre: "Detergente Liquido Coco Original 3lt",
      precio: "$55.400",
      cuotas: "3 cuotas de $18.467 con 0% interés",
      cupon: "Cupón 15% OFF",
      envio: "FULL-SÚPER",
      recomendado: false
    },
    {
      id: 3,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_875158-MCO93938418234_102025-F.webp",
      nombre: "Leche Deslactosada Uht Lele Tetrapak 900 Ml",
      precio: "$ 3.590",
      cuotas: null,
      cupon: "Cupón 15% OFF",
      envio: "FULL-SÚPER",
      recomendado: false
    },
    {
      id: 4,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_895619-MCO82401502479_022025-F.webp",
      nombre: "Lomo Atun Zenu En Agua X 3 Unidades X 80 Gr",
      precio: "$ 16.050",
      cuotas: null,
      cupon: "Cupón 15% OFF",
      envio: "FULL-SÚPER",
      recomendado: false
    },
    {
      id: 5,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_755323-MLA95841715087_102025-F.webp",
      nombre: "Barra Proteica Tosh Barras De Cer",
      precio: "$ 43.500",
      cuotas: "3 cuotas de $ 14.500 con 0% interés",
      cupon: "Cupón 15% OFF",
      envio: "FULL-SÚPER",
      recomendado: true
    }
  ];

  const banners = [
    {
      id: 1,
      imagen: "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1761680605604-5e8d5640-b436-11f0-924d-0568ac5e65ee.jpg",
      titulo: "TIENDAS ISIMO LLEGÓ A MERCADO LIBRE",
      subtitulo: "isimo mercado",
      botones: [
        { texto: "PRODUCTOS DESDE $3.000", color: "bg-black text-white" },
        { texto: "ENVÍOS EN 24/48 HORAS", color: "bg-white text-black" }
      ],
      disclaimer: "Dto. Aplica en productos seleccionados, Imágenes de referencia"
    },
    {
      id: 2,
      imagen: "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1752689345682-f603c720-626f-11f0-b52c-41d034a9db9e.jpg",
      titulo: "TAMAÑOS FAMILIARES, PACKS AL MEJOR PRECIO",
      subtitulo: "FAB Ultra Flash",
      botones: [
        { texto: "HASTA 30%OFF", color: "bg-black text-white" },
        { texto: "ENVÍOS EN 24/48 HORAS", color: "bg-white text-black" }
      ],
      disclaimer: "Imágenes de referencia, Dcto aplica en la tienda oficial de Unilever en Mercado Libre."
    },
    {
      id: 3,
      imagen: "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1752688710383-7b58d7f0-626e-11f0-a158-118fbe78ede2.jpg",
      titulo: "SUPERMERCADO CON LOS MEJORES PRECIOS",
      subtitulo: "Productos frescos",
      botones: [
        { texto: "DESCUENTOS HASTA 50%", color: "bg-black text-white" },
        { texto: "ENVÍOS GRATIS", color: "bg-white text-black" }
      ],
      disclaimer: "Ofertas válidas por tiempo limitado, Imágenes de referencia"
    }
  ];


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % categorias.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + categorias.length) % categorias.length);
  };

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleAddToCart = (producto: any) => {
    addToCart({
      id: producto.id,
      name: producto.nombre,
      price: parseFloat(producto.precio.replace(/[$,]/g, '')),
      imageUrl: producto.imagen,
      quantity: 1
    });
  };

  // Auto-play del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner promocional principal con carrusel */}
      <div className="relative overflow-hidden">
        <div className="relative">
          {/* Botones de navegación del banner */}
          <button
            onClick={prevBanner}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all"
          >
            <FaChevronLeft className="text-white text-xl" />
          </button>
          
          <button
            onClick={nextBanner}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all"
          >
            <FaChevronRight className="text-white text-xl" />
          </button>

          {/* Carrusel de banners */}
          <div className="relative h-[500px]">
            {banners.map((banner, index) => (
              <div
                key={banner.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentBanner ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat relative"
                  style={{ backgroundImage: `url(${banner.imagen})` }}
                >
                  {/* Overlay para mejorar legibilidad */}
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  
                  {/* Contenido del banner */}
                  <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-[1400px] mx-auto px-4 w-full">
                      <div className="flex items-center justify-center h-full">
                        {/* Contenido centrado */}
                        <div className="text-white text-center max-w-4xl">
                          <div className="mb-4">
                            <div className="flex items-center justify-center gap-2 mb-2">
                              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                                <span className="text-white text-xs font-bold">
                                  {banner.subtitulo.split(' ')[0]}
                                </span>
                              </div>
                              <span className="text-green-400 text-sm font-semibold">
                                {banner.subtitulo.split(' ').slice(1).join(' ')}
                              </span>
                            </div>
                          </div>
                          
                          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                            {banner.titulo}
                          </h1>
                          
                          <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center">
                            {banner.botones.map((boton, btnIndex) => (
                              <button 
                                key={btnIndex}
                                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                                  boton.color === 'bg-black text-white' 
                                    ? 'bg-black text-white hover:bg-gray-800' 
                                    : 'bg-white text-black hover:bg-gray-100'
                                }`}
                              >
                                {boton.texto}
                              </button>
                            ))}
                          </div>
                          
                          <p className="text-gray-300 text-sm">
                            {banner.disclaimer}
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicadores del carrusel */}
          <div className="absolute bottom-6 right-6 flex gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBanner(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentBanner ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Sección de categorías */}
      <div className="py-8 px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative">
            {/* Botón izquierdo */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <FaChevronLeft className="text-gray-600" />
            </button>

            {/* Botón derecho */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <FaChevronRight className="text-gray-600" />
            </button>

            {/* Carrusel de categorías */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 12.5}%)` }}
              >
                {categorias.map((categoria, index) => (
                  <div key={index} className="flex-shrink-0 w-1/8 px-2">
                    <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform">
                      <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-3 shadow-lg overflow-hidden">
                        <img
                          src={categoria.image}
                          alt={categoria.title}
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                      <span className="text-center text-xs font-medium text-gray-700 leading-tight">
                        {categoria.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección Los Más Vendidos */}
      <div className="py-8 px-4 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-gray-800">LOS MÁS VENDIDOS</h2>
              <FaShoppingCart className="text-gray-600 text-xl" />
            </div>
            <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors text-sm font-medium">
              Ver más
            </a>
          </div>

          {/* Carrusel de productos más vendidos */}
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 pb-4">
                {masVendidos.map((producto) => (
                  <div key={producto.id} className="flex-shrink-0 w-64 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                    <div className="relative">
                      {/* Imagen del producto */}
                      <div className="aspect-square p-4">
                        <img
                          src={producto.imagen}
                          alt={producto.nombre}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      
                      {/* Etiqueta RECOMENDADO */}
                      {producto.recomendado && (
                        <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded font-semibold">
                          RECOMENDADO
                        </div>
                      )}
                    </div>

                    <div className="p-4 space-y-2">
                      {/* Nombre del producto */}
                      <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 leading-tight">
                        {producto.nombre}
                      </h3>

                      {/* Precio */}
                      <p className="text-xl font-bold text-gray-800">{producto.precio}</p>

                      {/* Cuotas */}
                      {producto.cuotas && (
                        <p className="text-xs text-gray-600">{producto.cuotas}</p>
                      )}

                      {/* Cupón */}
                      <button 
                        onClick={() => handleAddToCart(producto)}
                        className="w-full bg-blue-100 text-blue-600 py-2 rounded-lg hover:bg-blue-200 transition-colors text-xs font-semibold flex items-center justify-center gap-1"
                      >
                        <FaStar className="text-xs" />
                        {producto.cupon}
                      </button>

                      {/* Envío */}
                      <div className="flex items-center gap-1 text-green-600 text-xs font-semibold">
                        <FaBolt className="text-xs" />
                        {producto.envio}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
