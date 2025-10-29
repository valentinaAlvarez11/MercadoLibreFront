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
        {/* Hero banner */}
        <div className="w-full rounded-md overflow-hidden mb-8">
          <img
            src="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1635777742041-aheaderdesktop.jpg"
            alt="Banner categorías"
            className="w-full h-48 md:h-56 lg:h-64 object-cover"
          />
        </div>

        {/* Section heading */}
        <h2 className="text-[#333333] text-xl font-bold mb-4 uppercase tracking-wide">Productos</h2>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <CardProducts key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}


