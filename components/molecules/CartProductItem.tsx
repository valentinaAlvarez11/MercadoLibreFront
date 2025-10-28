// components/molecules/CartProductItem.tsx (Ajustado)
import { CartProduct } from '@/interfaces/cart'; 
import { FaPlus, FaMinus } from 'react-icons/fa';

interface CartProductItemProps {
  item: CartProduct; // 👈 Tipado correcto
  onRemove: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function CartProductItem({ item, onRemove, onIncrease, onDecrease }: CartProductItemProps) {
  const formattedTotal = `$${(item.price * item.quantity).toLocaleString('es-CO')}`;
  
  return (
    <div className="flex p-4 border rounded-lg bg-white shadow-sm items-start">
      {/* Checkbox de Producto (como en el mockup) */}
      
      <div className="flex-shrink-0 mr-4">
        <img 
          src={item.imageUrl || '/placeholder.jpg'} 
          alt={item.name} 
          width={80}
          height={80} 
          className="rounded object-cover" 
        />
      </div>
      
      <div className="flex-1 min-w-0 pr-4">
        <h2 className="text-base font-medium text-gray-800 line-clamp-2">{item.name}</h2>
        
        <button 
          onClick={onRemove} 
          className="text-blue-600 text-sm hover:text-blue-800 transition-colors mt-2"
        >
          Eliminar
        </button>
      </div>

      <div className="flex flex-col items-center justify-start ml-auto">
        {/* Controles de Cantidad (como en el mockup) */}
        <div className="flex items-center border border-gray-300 rounded-sm">
          <button 
            onClick={onDecrease} 
            disabled={item.quantity <= 1}
            className="p-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50 text-sm"
          >
            -
          </button>
          <input
            type="number"
            value={item.quantity}
            readOnly
            className="w-10 text-center text-base font-medium border-l border-r border-gray-300 outline-none"
          />
          <button 
            onClick={onIncrease} 
            className="p-2 text-gray-600 hover:bg-gray-100 text-sm"
          >
            +
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-1">+{item.quantity + 1} disponibles</p>
      </div>
      
      {/* Precio Final a la Derecha */}
      <div className="ml-6 flex-shrink-0">
        <div className="text-lg font-medium text-gray-900 whitespace-nowrap">{formattedTotal}</div>
      </div>
    </div>
  );
}