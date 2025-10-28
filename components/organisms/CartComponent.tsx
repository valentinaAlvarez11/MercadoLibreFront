// app/cart/CartComponent.tsx
'use client';
import { useCartStore } from '@/store/cartStore'; 
import CartProductList from '@/components/organisms/CartProductList'; // 👈 Nuevo Organism
import CartSummary from '@/components/molecules/CartSumary';      // 👈 Molecule

const CartPageOrganism = () => {
  const { products } = useCartStore();
  
  // Cálculo del subtotal y el total (asumiendo que el precio en el store es un número)
  const subtotal = products.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  // Asumiendo que el envío es gratis por ahora para el resumen. 
  // La lógica de "envío gratis por X valor" se puede manejar en CartSummary
  const total = subtotal; 

  if (products.length === 0) {
    return (
      <div className="container mx-auto p-8 text-center min-h-[500px] bg-white mt-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4">🛒 Tu Carrito Está Vacío</h1>
        <p className="text-gray-600">¡Explora nuestra tienda para encontrar grandes ofertas!</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-6xl p-4 md:p-8 pt-6 min-h-[500px]">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Lado Izquierdo: Lista de Productos */}
        <div className="lg:w-3/4">
          <CartProductList products={products} />
        </div>

        {/* Lado Derecho: Resumen de Compra (Sticky) */}
        <div className="lg:w-1/4">
          <div className="lg:sticky lg:top-4 h-fit">
             <CartSummary subtotal={subtotal} total={total} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPageOrganism;