// interfaces/cart.ts
export interface CartProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string;
  image?: string; // Para compatibilidad con diferentes nombres
}
