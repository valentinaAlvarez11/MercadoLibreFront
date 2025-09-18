'use client';
import { useState, useEffect } from 'react';
import CardProducts, { ProductCardInfo } from '../../../components/molecules/CardProducts';
import ImageCarousel from "@/components/organisms/AmazonCarrouselImages";

const HomePageClient = () => {
  const [products, setProducts] = useState<ProductCardInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = [
          {
            id: '1',
            name: 'Morral Mochila Urbana Impermeable Musette Negro 20L',
            price: '$47.949',
            rating: 4.7,
            imageUrl: 'https://http2.mlstatic.com/D_679803-MCO72728271705_112023-O.jpg',
          },
          {
            id: '2',
            name: 'Smartphone Samsung Galaxy A54 5G 256GB',
            price: '$1.400.000',
            rating: 4.8,
            imageUrl: 'https://http2.mlstatic.com/D_866508-MLA74605990264_022024-O.jpg',
          },
          {
            id: '3',
            name: 'Laptop Dell Inspiron 15 3000 Intel Core i5',
            price: '$2.200.000',
            rating: 4.5,
            imageUrl: 'https://http2.mlstatic.com/D_686161-MLA74838638927_022024-O.jpg',
          },
          {
            id: '4',
            name: 'Auriculares Inalámbricos Xiaomi Redmi Buds 4 Active',
            price: '$120.000',
            rating: 4.6,
            imageUrl: 'https://http2.mlstatic.com/D_646146-MLU74281781423_012024-O.jpg',
          },
        ];

        setProducts(data);
      } catch (err) {
        setError("Error al cargar los productos.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto py-8 px-4">
        <ImageCarousel />

        {loading && <div className="text-center text-lg mt-8">Cargando productos...</div>}
        {error && <div className="text-center text-red-600 font-semibold mt-8">{error}</div>}
        
        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Productos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {!loading && products.map((product) => (
            <CardProducts key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePageClient;