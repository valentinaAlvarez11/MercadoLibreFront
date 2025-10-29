// src/types/product.ts

export interface ProductInfo {
    id: string;
    name: string;
    price: string;
    rating: number;
    description: string[];
    imageUrl: string;
}

export interface ProductCardInfo {
    id: string;
    name: string;
    price: string;
    imageUrl: string;
    rating: number;
}

export interface CartProduct {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
}