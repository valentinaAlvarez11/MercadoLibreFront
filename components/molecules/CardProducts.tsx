// components/molecules/CardProducts.tsx
import React from 'react';
import Link from 'next/link';
import { ProductCardInfo } from '@/interfaces/product';
import { useFavoritesStore } from '@/store/favoritesStore';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const getStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const stars = '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);
  return (
    <div className="flex items-center space-x-1">
      <span className="text-sm text-yellow-500">{stars}</span>
      <span className="text-xs text-gray-500 ml-1">({rating})</span>
    </div>
  );
};

interface CardProductsProps {
  product: ProductCardInfo;
}

const CardProducts: React.FC<CardProductsProps> = ({ product }) => {
  const toggle = useFavoritesStore((s) => s.toggle);
  const isFavorite = useFavoritesStore((s) => s.isFavorite(product.id));

  const onToggleFavorite: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggle(product);
  };

  return (
    <Link href={`/product/${product.id}`} passHref>
      <div className="relative bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 w-[250px] h-[400px] overflow-hidden flex flex-col">
        <button
          aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          onClick={onToggleFavorite}
          className="absolute top-3 right-3 z-10 rounded-full p-2 bg-white/90 hover:bg-white shadow hover:shadow-md transition"
        >
          {isFavorite ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-gray-600" />
          )}
        </button>

        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-[200px] object-contain mb-4 rounded-md"
        />
        <div className="flex flex-col space-y-2 flex-1">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-2xl font-bold text-gray-900">
            {product.price}
          </p>
          <div className="mt-auto">
            {getStars(product.rating)}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardProducts;