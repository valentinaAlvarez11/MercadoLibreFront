// app/cart/CartComponent.tsx
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { useCartStore } from '@/store/cartStore'; 
import CartProductList from '@/components/organisms/CartProductList';
import CartSummary from '@/components/molecules/CartSumary';
import { FaCheck, FaBolt, FaChevronRight, FaStar } from 'react-icons/fa';

const CartPageOrganism = () => {
  const { isLoggedIn, user } = useAuthStore();
  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn || !user) {
      router.push('/login');
    }
  }, [isLoggedIn, user, router]);

  if (!isLoggedIn || !user) {
    return null;
  }

  const { products } = useCartStore();
  
  // Cálculo del subtotal y el total (asumiendo que el precio en el store es un número)
  const subtotal = products.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalQuantity = products.reduce((acc, item) => acc + item.quantity, 0);
  // Asumiendo que el envío es gratis por ahora para el resumen. 
  // La lógica de "envío gratis por X valor" se puede manejar en CartSummary
  const total = subtotal; 

  if (products.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <div className="mb-6">
            <img
              src="https://http2.mlstatic.com/storage/restrictions/images/platformMessages/high.svg"
              alt="Carrito vacío"
              className="w-24 h-24 mx-auto"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Tu carrito está vacío
          </h1>
          <p className="text-gray-600 mb-8">
            ¡Explora nuestra tienda para encontrar grandes ofertas!
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-normal hover:bg-blue-700 transition-colors shadow-sm"
          >
            Continuar comprando
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Lado Izquierdo: Lista de Productos */}
          <div className="lg:w-3/4">
            {/* Header con iconos */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaCheck className="text-blue-600 text-lg" />
                  <span className="text-lg font-semibold text-gray-800">Productos</span>
                  <FaBolt className="text-green-600 text-lg ml-2" />
                  <span className="text-green-600 font-semibold">FULL</span>
                  <FaChevronRight className="text-gray-400 text-sm ml-1" />
                </div>
              </div>
            </div>

            {/* Banner promocional */}
            <div className="bg-orange-100 border border-orange-200 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaStar className="text-orange-600" />
                  <span className="text-sm text-gray-700">
                    Agrega $ 135.380 para usar el cupón 15% OFF VUELVE Y COMPRA.
                  </span>
                </div>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Buscar productos
                </a>
              </div>
            </div>

            <CartProductList products={products} />
          </div>

          {/* Lado Derecho: Resumen de Compra (Sticky) */}
          <div className="lg:w-1/4">
            <div className="lg:sticky lg:top-4 h-fit">
               <CartSummary subtotal={subtotal} total={total} totalQuantity={totalQuantity} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPageOrganism;