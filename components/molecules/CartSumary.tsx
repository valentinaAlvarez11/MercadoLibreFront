// components/molecules/CartSummary.tsx (Ajustado)

interface CartSummaryProps {
  subtotal: number;
  total: number;
}

export default function CartSummary({ subtotal, total }: CartSummaryProps) {
  const finalTotal = subtotal; 
  const formatCurrency = (amount: number) => `$${amount.toLocaleString('es-CO')}`;
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border">
      <h2 className="text-xl font-bold mb-4">Resumen de compra</h2>
      
      <div className="space-y-3">
        {/* Fila Producto */}
        <div className="flex justify-between text-base">
          <span>Producto</span>
          <span className="font-normal">{formatCurrency(subtotal)}</span>
        </div>
        
        <div className="flex justify-between text-base mb-4">
          <span>Envío</span>
          <span className="font-normal">A calcular</span>
        </div>
        
        {/* Ingresar Código de Cupón */}
        <div className="border-b border-dashed pb-4">
          <button className="text-blue-600 hover:text-blue-800 text-sm">
            Ingresar código de cupón
          </button>
        </div>
      </div>

      {/* Total */}
      <div className="pt-4 flex justify-between items-center text-xl font-medium">
        <span>Total</span>
        <span>{formatCurrency(finalTotal)}</span> 
      </div>

      {/* Botón de Compra */}
      <button 
        className="w-full bg-blue-600 text-white py-3 mt-6 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-md"
        onClick={() => alert('Procediendo al pago...')}
      >
        Continuar compra
      </button>
    </div>
  );
}