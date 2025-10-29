"use client";
import React from 'react';
import CardProducts from "@/components/molecules/CardProducts";
import type { ProductCardInfo } from "@/interfaces/product";

interface CategoriasGridProps {
  products: ProductCardInfo[];
}

export default function CategoriasGrid({ products }: CategoriasGridProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Categorías</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <CardProducts key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}


