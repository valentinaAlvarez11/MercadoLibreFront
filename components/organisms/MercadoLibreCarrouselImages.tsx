'use client'
import { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  'https://http2.mlstatic.com/D_NQ_780092-MLA92793872437_092025-OO.webp',
  'https://http2.mlstatic.com/D_NQ_937094-MLA92685969173_092025-OO.webp',
  'https://http2.mlstatic.com/D_NQ_918026-MLA92686757067_092025-OO.webp',
  'https://http2.mlstatic.com/D_NQ_950526-MLA92283896722_092025-OO.webp',
  'https://http2.mlstatic.com/D_NQ_791707-MLA92284968360_092025-OO.webp'
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(nextSlide, 4000);
    return resetTimeout;
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {/* Fondo con transición */}
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      />

      {/* Controles */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 p-2 rounded-full shadow z-10"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 p-2 rounded-full shadow z-10"
      >
        <FaChevronRight />
      </button>

      {/* Sombras para mejorar legibilidad si hay contenido encima */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-white/50 pointer-events-none" />
    </div>
  );
};

export default ImageCarousel;