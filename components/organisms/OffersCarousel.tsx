// components/organisms/OffersCarousel.tsx
'use client';
import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import CardProducts, { ProductCardInfo } from '../molecules/CardProducts';

interface OffersCarouselProps {
  products: ProductCardInfo[];
}

const OffersCarousel: React.FC<OffersCarouselProps> = ({ products }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    const scrollAmount = 400;

    if (container) {
      container.scrollLeft += direction === 'right' ? scrollAmount : -scrollAmount;
    }
  };

  return (
    <div className="relative w-full max-w-[900px] bg-white rounded-xl shadow-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg text-gray-800">Ofertas</h2>
        <a href="#" className="text-blue-500 text-sm hover:underline">Mostrar todas las ofertas</a>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 bg-white border rounded-full p-2 shadow-md hover:scale-110 transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 bg-white border rounded-full p-2 shadow-md hover:scale-110 transition"
        >
          <FaChevronRight />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth"
        >
          {products.map((product) => (
            <div key={product.id} className="min-w-[250px] flex-shrink-0">
              <CardProducts product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffersCarousel;