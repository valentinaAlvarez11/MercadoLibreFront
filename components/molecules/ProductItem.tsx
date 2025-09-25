import React from 'react';
import { CartProduct, useCartStore } from '../../store/cartStore';

interface ProductItemProps {
  product: CartProduct;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const addProduct = useCartStore((state) => state.addProduct);

  const handleAddToCart = () => {
    addProduct({ ...product, quantity: 1 });
  };

  return (
    <div className="border rounded p-4 flex flex-col items-center">
      <h3 className="font-bold text-lg mb-2">{product.name}</h3>
      <p className="mb-2">Precio: ${product.price}</p>
      <button
        className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddToCart}
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductItem;
