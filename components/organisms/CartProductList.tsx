// components/organisms/CartProductList.tsx
'use client';
import { useCartStore} from '@/store/cartStore';
import { CartProduct } from '@/interfaces/cart';
import CartProductItem from '../molecules/CartProductItem';
import { FaBolt, FaChevronRight } from 'react-icons/fa';

interface CartProductListProps {
  products: CartProduct[];
}

export default function CartProductList({ products }: CartProductListProps) {
  const { removeProduct, increaseQuantity, decreaseQuantity } = useCartStore();

  // Calcular progreso hacia envío gratis (ejemplo: $200,000 para envío gratis)
  const subtotal = products.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const freeShippingThreshold = 200000;
  const progressPercentage = Math.min((subtotal / freeShippingThreshold) * 100, 100);
  const remainingAmount = Math.max(freeShippingThreshold - subtotal, 0);

  return (
    <div className="space-y-4">
      {/* Lista de Productos Individuales */}
      {products.map((item) => (
        <CartProductItem
          key={item.id}
          item={item}
          onRemove={() => removeProduct(item.id)}
          onIncrease={() => increaseQuantity(item.id)}
          onDecrease={() => decreaseQuantity(item.id)}
        />
      ))}

      {/* Sección de Envío */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-gray-700">Envío</span>
          <span className="text-sm font-semibold text-green-600">Gratis</span>
        </div>
        
        {/* Barra de progreso */}
        <div className="mb-3">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
        
        {/* Texto informativo */}
        <div className="text-sm text-gray-600">
          {remainingAmount > 0 ? (
            <span>
              Aprovecha tu envío gratis agregando más productos ⚡ FULL. 
              <a href="#" className="text-blue-600 hover:text-blue-800 ml-1">
                Ver productos <FaChevronRight className="inline text-xs" />
              </a>
            </span>
          ) : (
            <span className="text-green-600 font-semibold">
              ¡Ya tienes envío gratis! ⚡ FULL
            </span>
          )}
        </div>
      </div>
    </div>
  );
}