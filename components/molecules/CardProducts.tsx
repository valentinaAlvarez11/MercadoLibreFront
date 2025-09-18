// components/molecules/CardProducts.tsx
import React from 'react';
import Link from 'next/link';

// Interfaz para el tipo de datos que recibe la tarjeta
export interface ProductCardInfo {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  rating: number;
}

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
  return (
    <Link href={`/product/${product.id}`} passHref>
      <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-contain mb-4 rounded-md"
        />
        <div className="flex flex-col space-y-2">
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