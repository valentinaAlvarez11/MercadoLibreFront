import { create } from 'zustand';

export interface CartProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  products: CartProduct[];
  addProduct: (product: CartProduct) => void;
  removeProduct: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
}

export const useCartStore = create<CartState>((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => {
      const existing = state.products.find((p) => p.id === product.id);
      if (existing) {
        return {
          products: state.products.map((p) =>
            p.id === product.id
              ? { ...p, quantity: p.quantity + product.quantity }
              : p
          ),
        };
      }
      return { products: [...state.products, product] };
    }),
  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((p) => p.id !== id),
    })),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.id === id ? { ...p, quantity } : p
      ),
    })),
}));
