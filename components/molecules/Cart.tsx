import React from 'react';
import { useCartStore } from '../../store/cartStore';

const Cart: React.FC = () => {
  const products = useCartStore((state) => state.products);
  const removeProduct = useCartStore((state) => state.removeProduct);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  // Funciones para incrementar y decrementar cantidad
  const increment = (id: string, current: number) => {
    updateQuantity(id, current + 1);
  };
  const decrement = (id: string, current: number) => {
    if (current > 1) updateQuantity(id, current - 1);
  };

  const total = products.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <div className="border rounded p-4">
      <h2 className="font-bold text-xl mb-4">Carrito de compras</h2>
      {products.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <table className="w-full mb-4 border-separate" style={{ borderSpacing: '0 10px' }}>
          <thead>
            <tr>
              <th className="text-left px-2">Producto</th>
              <th className="px-2">Cantidad</th>
              <th className="px-2">Precio</th>
              <th className="px-2">Subtotal</th>
              <th className="px-2"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="bg-white shadow rounded align-middle">
                <td className="px-2 py-2 whitespace-pre-line text-sm text-gray-800 font-medium">
                  {product.name}
                </td>
                <td className="px-2 py-2">
                  <div className="flex items-center gap-2 justify-center">
                    <button
                      className="bg-gray-200 px-2 rounded border border-gray-300"
                      onClick={() => decrement(product.id, product.quantity)}
                      disabled={product.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-2 text-base font-semibold">{product.quantity}</span>
                    <button
                      className="bg-gray-200 px-2 rounded border border-gray-300"
                      onClick={() => increment(product.id, product.quantity)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-2 py-2 text-right text-base">{typeof product.price === 'number' ? `$${product.price.toFixed(2)}` : '$0.00'}</td>
                <td className="px-2 py-2 text-right text-base">{typeof product.price === 'number' ? `$${(product.price * product.quantity).toFixed(2)}` : '$0.00'}</td>
                <td className="px-2 py-2 text-center">
                  <button
                    className="text-red-500 hover:underline font-semibold"
                    onClick={() => removeProduct(product.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
  <div className="font-bold text-lg">Total: ${total.toFixed(2)}</div>
    </div>
  );
};

export default Cart;
