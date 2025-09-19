'use client'
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function AmazonCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    const scrollAmount = 400;

    if (container) {
      container.scrollLeft += direction === 'right' ? scrollAmount : -scrollAmount;
    }
  };

  return (
    <div className="relative max-w-[1500px] mx-auto mt-6 px-4">
      {/* Gradientes laterales */}
      <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Botones laterales */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white border rounded-full p-2 shadow-md hover:scale-110 transition"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white border rounded-full p-2 shadow-md hover:scale-110 transition"
      >
        <FaChevronRight />
      </button>

      {/* Carrusel */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth py-2 px-2"
      >
        {/* Reemplaza esto con tus secciones reales */}
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="min-w-[300px] bg-white rounded-md shadow-md p-4 flex-shrink-0"
          >
            <h2 className="font-bold text-lg mb-2">Sección {index + 1}</h2>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              <div className="bg-gray-100 p-2 rounded">Elemento 1</div>
              <div className="bg-gray-100 p-2 rounded">Elemento 2</div>
              <div className="bg-gray-100 p-2 rounded">Elemento 3</div>
              <div className="bg-gray-100 p-2 rounded">Elemento 4</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}