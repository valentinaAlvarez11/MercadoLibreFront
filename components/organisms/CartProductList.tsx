// components/organisms/CartProductList.tsx
'use client';
import { useCartStore} from '@/store/cartStore';
import { CartProduct } from '@/interfaces/cart'; // El producto individual
import CartProductItem from '../molecules/CartProductItem';

interface CartProductListProps {
  products: CartProduct[];
}

export default function CartProductList({ products }: CartProductListProps) {
  const { removeProduct, increaseQuantity, decreaseQuantity } = useCartStore();

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
    </div>
  );
}