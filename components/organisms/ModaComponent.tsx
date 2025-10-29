"use client";

import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const BANNERS = [
  "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1757354807782-96206860-8cde-11f0-9e76-7b837de07da9.png",
  "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1757354618916-258dbe40-8cde-11f0-94d7-05ce8cffa918.jpg",
];

type ModaProduct = {
  title: string;
  image: string;
  oldPrice: string;
  price: string;
  discount: string;
  cuotas: string;
  coupon: string;
  envio: string;
};

const PRODUCTS: ModaProduct[] = [
  {
    title: "Gafas De Sol Hawkers Warwick Hombre Y Mujer Elige Tu Color",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_695076-MCO52330424381_112022-F.webp",
    oldPrice: "$ 179.900",
    price: "$ 75.939",
    discount: "57% OFF",
    cuotas: "6 cuotas de $ 12.656 con 0% interés",
    coupon: "Cupón 15% OFF",
    envio: "Envío gratis",
  },
  {
    title: "Buzo Para Hombre Javall Xxl Gris | Totto",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_721719-MCO86866587445_062025-F.webp",
    oldPrice: "$ 149.900",
    price: "$ 85.002",
    discount: "43% OFF",
    cuotas: "3 cuotas de $ 28.334 con 0% interés",
    coupon: "Cupón 15% OFF",
    envio: "Envío gratis",
  },
  {
    title: "Morral Mochila Para Mujer Porta Pc Trik M Totto",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_626939-MCO83712306031_042025-F.webp",
    oldPrice: "$ 109.900",
    price: "$ 72.762",
    discount: "33% OFF",
    cuotas: "3 cuotas de $ 24.254 con 0% interés",
    coupon: "Cupón 15% OFF",
    envio: "Envío gratis",
  },
  {
    title: "Camiseta De Mujer M/c Seven Color Amarillo #28096138",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_788042-MCO82772964174_032025-F.webp",
    oldPrice: "$ 59.900",
    price: "$ 28.722",
    discount: "52% OFF",
    cuotas: "3 cuotas de $ 9.574 con 0% interés",
    coupon: "Cupón 15% OFF",
    envio: "Envío gratis",
  },
  {
    title: "Maleta De Viaje Cabina 10 Kg Rígida Stampy Lila Totto",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_638489-MCO83416763380_042025-F.webp",
    oldPrice: "$ 319.900",
    price: "$ 179.602",
    discount: "43% OFF",
    cuotas: "3 cuotas de $ 59.867 con 0% interés",
    coupon: "Cupón 15% OFF",
    envio: "Envío gratis",
  },
];

export default function ModaComponent() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % BANNERS.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + BANNERS.length) % BANNERS.length);
  const next = () => setIndex((i) => (i + 1) % BANNERS.length);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Hero carousel */}
        <div className="relative w-full overflow-hidden rounded-md mt-6">
          <img
            src={BANNERS[index]}
            alt="Moda banner"
            className="w-full h-[360px] object-cover"
          />
          <button
            aria-label="Anterior"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>
          <button
            aria-label="Siguiente"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
          >
            <FaChevronRight className="text-gray-700" />
          </button>
        </div>

        {/* Strip title */}
        <div className="flex items-center justify-between mt-8 mb-3">
          <h2 className="text-[#333333] text-lg font-bold">
            ¡MODA FLASH!  Ofertas especiales por tiempo limitado
          </h2>
          <Link href="/categorias" className="text-blue-600 text-sm hover:underline">Ver más</Link>
        </div>

        {/* Horizontal product row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {PRODUCTS.map((p, i) => (
            <div key={i} className="bg-white rounded-md border border-gray-200 hover:shadow-md transition">
              <div className="p-4">
                <div className="w-full h-52 flex items-center justify-center">
                  <img src={p.image} alt={p.title} className="max-h-full object-contain" />
                </div>
                <div className="mt-3">
                  <span className="inline-block text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded">OFERTA DEL DÍA</span>
                  <p className="mt-2 text-sm text-gray-700 line-clamp-2">{p.title}</p>
                  <div className="mt-2 text-xs text-gray-400 line-through">{p.oldPrice}</div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gray-900">{p.price}</span>
                    <span className="text-green-600 text-sm font-semibold">{p.discount}</span>
                  </div>
                  <div className="mt-2 text-sm text-green-600">{p.cuotas}</div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-blue-700">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded border border-blue-200">%</span>
                    <span>{p.coupon}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-green-600">
                    <span className="inline-flex items-center justify-center w-5 h-5">🚚</span>
                    <span>{p.envio} <span className="text-[#00a650] font-semibold">⚡ FULL</span></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-12" />
      </div>
    </div>
  );
}


