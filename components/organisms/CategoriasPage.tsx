"use client";
import React, { useEffect, useState } from "react";
import CategoriasGrid from "@/components/organisms/CategoriasGrid";
import type { ProductCardInfo } from "@/interfaces/product";
import { apiFetch } from "@/libs/singletonFetch";

type BackendProduct = {
  id: number;
  name: string;
  price: string;
  rating: number;
  description: string[];
  imageUrl: string;
};

export default function CategoriasPage() {
  const [products, setProducts] = useState<ProductCardInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiFetch('/product', 'GET')
      .then((data: any) => {
        const productos: BackendProduct[] = data?.productos || [];
        const mapped: ProductCardInfo[] = productos.map((p) => ({
          id: String(p.id),
          name: p.name,
          price: p.price,
          imageUrl: p.imageUrl,
          rating: p.rating,
        }));
        setProducts(mapped);
        setLoading(false);
      })
      .catch(() => {
        setError("Error al cargar productos");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-8 text-center">Cargando productos...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

  return <CategoriasGrid products={products} />;
}


