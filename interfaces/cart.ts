// src/types/product.ts

// 1. Interfaz para el producto tal como viene de la API/DB
// NOTA: El campo price es TEXT en la DB, lo mantendremos como string.
export interface ProductApi {
    id: string; // Asume que la DB genera un ID que será string en el frontend
    name: string;
    price: string; // El precio de la DB es un string (e.g., "120000")
    rating: number;
    description: string[]; // Viene como array de strings (después de JSON.parse)
    imageUrl: string;
}

// 2. Interfaz para el producto en la tarjeta (HomePageClient)
// Se diferencia porque 'price' está formateado.
export interface ProductCardInfo {
    id: string; 
    name: string;
    price: string; // Precio formateado con '$' y separadores (e.g., "$120.000")
    imageUrl: string;
    rating: number;
}

// 3. Interfaz para el producto en el Store de Carrito (CartProduct)
// Necesita el precio como número para poder hacer sumas (subtotal, total).
export interface CartProduct {
    id: string;
    name: string;
    price: number; // 👈 Número para cálculos
    imageUrl: string; // 👈 Agregado para que se muestre en el carrito
    quantity: number;
}