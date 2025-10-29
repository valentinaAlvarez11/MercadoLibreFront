// components/molecules/CartSummary.tsx
import { useRouter } from 'next/navigation';

interface CartSummaryProps {
  subtotal: number;
  total: number;
  totalQuantity: number;
}

export default function CartSummary({ subtotal, total, totalQuantity }: CartSummaryProps) {
  const router = useRouter();
  const finalTotal = subtotal; 
  const formatCurrency = (amount: number) => `$${amount.toLocaleString('es-CO')}`;
  
  const handleContinuePurchase = () => {
    router.push('/entrega');
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border">
      <h2 className="text-lg font-bold mb-4">Resumen de compra</h2>
      
      <div className="space-y-3">
        {/* Fila Productos */}
        <div className="flex justify-between text-sm">
          <span>Productos ({totalQuantity})</span>
          <span className="font-medium">{formatCurrency(subtotal)}</span>
        </div>
        
        {/* Fila Envío */}
        <div className="flex justify-between text-sm">
          <span>Envío</span>
          <span className="font-semibold text-green-600">Gratis</span>
        </div>
        
        {/* Cupones */}
        <div className="border-b border-gray-200 pb-3">
          <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            Cupones
          </a>
        </div>
      </div>

      {/* Total */}
      <div className="pt-4 flex justify-between items-center text-lg font-bold">
        <span>Total</span>
        <span>{formatCurrency(finalTotal)}</span> 
      </div>

      {/* Botón de Compra */}
      <button 
        className="w-full bg-blue-600 text-white py-3 mt-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
        onClick={handleContinuePurchase}
      >
        Continuar compra
      </button>
    </div>
  );
}