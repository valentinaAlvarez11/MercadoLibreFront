// app/(webpage)/home/page.tsx
'use client';
import { useState, useEffect } from 'react';
import CardProducts, { ProductCardInfo } from '../../../components/molecules/CardProducts';
import ImageCarousel from "@/components/organisms/MercadoLibreCarrouselImages";
import InitialCardsService from '@/components/organisms/InitialCardsService';
import DailyDeal from '@/components/organisms/DailyDeal';
import OffersCarousel from '@/components/organisms/OffersCarousel';
import SubscriptionCard from '@/components/molecules/SubscriptionCard';

const HomePageClient = () => {
  const [products, setProducts] = useState<ProductCardInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('http://localhost:3000/product');
        
        if (!res.ok) {
            const errorText = await res.text();
            throw new Error(`Error ${res.status}: ${errorText.slice(0, 100)}...`);
        }

        const apiResponse = await res.json();
        
        const productos = apiResponse.productos;

        if (!Array.isArray(productos)) {
          throw new Error("La respuesta de la API no es un array de productos.");
        }

        const mappedProducts: ProductCardInfo[] = productos.map((item: any) => ({
            id: item.id || item._id, 
            name: item.name,
            price: `$${item.price.toLocaleString('es-CO')}`,
            imageUrl: item.imageUrl,
            rating: item.rating
        }));

        setProducts(mappedProducts);
      } catch (err: any) {
        setError("Error de conexión o datos: " + err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Carrousel ocupa todo el ancho */}
      <div className="relative w-full">
        <ImageCarousel />
        {/* Cards informativos superpuestos */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-200px] w-[90vw] max-w-6xl flex justify-between gap-4 z-20">
          <InitialCardsService />
        </div>
      </div>
      {/* Espacio para que los cards no se superpongan con el contenido siguiente */}
      <div className="h-[200px]" />
      <main className="container mx-auto pt-0 px-4">
        {loading && <div className="text-center text-lg mt-8">Cargando productos...</div>}
        {error && <div className="text-center text-red-600 font-semibold mt-8">{error}</div>}
        
        {!loading && !error && products.length > 0 && (
            <div className="flex flex-row gap-6">
                <DailyDeal product={products[0]} />
                <OffersCarousel products={products.slice(1, 10)} />
            </div>
        )}
      </main>
      
      {/* Nuevo contenedor para la SubscriptionCard, fuera del <main> */}
      <div className="max-w-[1200px] mx-auto px-4 mt-8">
        <SubscriptionCard />
      </div>

    </div>
  );
};

export default HomePageClient;