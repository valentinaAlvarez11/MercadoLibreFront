// components/molecules/ProductDetails.tsx
import React from 'react';
// Podrías necesitar un componente de íconos para las estrellas,
// pero por simplicidad usaremos un emoji o texto directo.

// Interfaz para definir el tipo de datos del producto
export interface ProductInfo {
  name: string;
  price: string;
  rating: number;
  description: string[];
  imageUrl: string;
}

// Función para generar las estrellas visuales
const getStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const stars = '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);
  return (
    <div className="flex items-center space-x-1">
      <span className="text-lg text-yellow-500">{stars}</span>
      <span className="text-sm text-gray-500 ml-2">({rating})</span>
      <span className="text-sm text-blue-600 cursor-pointer hover:underline">(386)</span>
    </div>
  );
};

interface ProductDetailsProps {
  product: ProductInfo;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className="flex flex-col lg:flex-row bg-white p-4 lg:p-6 rounded-lg shadow-md max-w-7xl mx-auto">
      {/* SECCIÓN 1: IMAGEN DEL PRODUCTO (Izquierda) */}
      <div className="lg:w-1/2 p-4 flex justify-center items-start border-r border-gray-200">
        <img
          src={product.imageUrl || "/mercadolibre.png"}
          alt={product.name}
          className="max-w-full h-auto object-contain max-h-[500px] shadow-lg"
        />
      </div>

      {/* SECCIÓN 2: INFORMACIÓN DEL PRODUCTO (Derecha) */}
      <div className="lg:w-1/2 p-4 lg:pl-10 space-y-4">
        {/* Nombre y Estrellas */}
        <h1 className="text-2xl lg:text-3xl font-semibold text-gray-800">
          {product.name}
        </h1>
        <div className="flex items-center space-x-2">
          {getStars(product.rating)}
        </div>
        {/* Precio */}
        <div className="border-t border-gray-200 pt-4">
          <span className="text-3xl font-bold text-gray-900 mr-2">
            {product.price}
          </span>
          <span className="text-lg text-green-600 font-semibold">20% OFF</span>
        </div>
        {/* Descripción */}
        <div className="space-y-2 text-sm text-gray-600">
          <h2 className="text-base font-semibold text-gray-700 mt-4">
            Lo que tienes que saber de este producto
          </h2>
          <ul className="list-disc list-inside space-y-1 pl-4">
            {product.description.map((item, index) => (
              <li key={index} className="text-sm text-gray-600">
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Simulación de botones de compra */}
        <div className="pt-6 space-y-3">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition duration-200">
            Comprar ahora
          </button>
          <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-md transition duration-200">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;