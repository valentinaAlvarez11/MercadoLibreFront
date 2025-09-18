"use client";
// app/(webpage)/product/[id]/page.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductDetails, { ProductInfo } from '../../../../components/molecules/ProductComponent';

const ProductPage = () => {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const [product, setProduct] = useState<ProductInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`http://localhost:3000/product/${id}`);
        const data = await res.json();
        if (res.ok && data.producto && typeof data.producto === 'object' && Object.keys(data.producto).length > 0) {
          setProduct(data.producto);
          setError("");
        } else {
          setProduct(null);
          setError(data.error || "Producto no encontrado");
        }
      } catch (err) {
        setError("Error de conexión con el backend");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      {loading && <div className="text-center text-lg">Cargando producto...</div>}
      {!loading && product && (
        <ProductDetails product={product} />
      )}
      {!loading && !product && error && (
        <div className="text-center text-red-600 font-semibold">{error}</div>
      )}
    </div>
  );
};

export default ProductPage;
