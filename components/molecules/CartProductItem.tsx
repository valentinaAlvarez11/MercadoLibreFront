// components/molecules/CartProductItem.tsx
import { CartProduct } from '@/interfaces/cart'; 
import { FaCheck } from 'react-icons/fa';

interface CartProductItemProps {
  item: CartProduct;
  onRemove: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function CartProductItem({ item, onRemove, onIncrease, onDecrease }: CartProductItemProps) {
  const formattedTotal = `$${(item.price * item.quantity).toLocaleString('es-CO')}`;
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-start gap-4">
        {/* Checkmark */}
        <div className="flex-shrink-0 mt-1">
          <FaCheck className="text-blue-600 text-lg" />
        </div>
        
        {/* Imagen del producto */}
        <div className="flex-shrink-0">
          <img 
            src={item.imageUrl || "/mercadolibre.png"} 
            alt={item.name} 
            width={60}
            height={60} 
            className="rounded object-cover" 
          />
        </div>
        
        {/* Información del producto */}
        <div className="flex-1 min-w-0">
          <h2 className="text-sm font-medium text-gray-800 mb-2">{item.name}</h2>
          
          <button 
            onClick={onRemove} 
            className="text-red-600 text-sm hover:text-red-800 transition-colors"
          >
            Eliminar
          </button>
        </div>

        {/* Controles de cantidad */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center border border-gray-300 rounded-sm">
            <button 
              onClick={onDecrease} 
              disabled={item.quantity <= 1}
              className="p-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50 text-sm"
            >
              -
            </button>
            <span className="px-3 py-2 text-sm font-medium border-l border-r border-gray-300">
              {item.quantity}
            </span>
            <button 
              onClick={onIncrease} 
              className="p-2 text-gray-600 hover:bg-gray-100 text-sm"
            >
              +
            </button>
          </div>
          <p className="text-xs text-gray-500">+{item.quantity + 50} disponibles</p>
        </div>
        
        {/* Precio */}
        <div className="flex-shrink-0 ml-4">
          <div className="text-lg font-semibold text-gray-900">{formattedTotal}</div>
        </div>
      </div>
    </div>
  );
}