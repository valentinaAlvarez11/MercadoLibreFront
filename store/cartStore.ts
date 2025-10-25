// store/cartStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      products: [],

      addProduct: (product) => {
        const state = get();
        const existing = state.products.find((p) => p.id === product.id);
        const updated = existing
          ? state.products.map((p) =>
              p.id === product.id
                ? { ...p, quantity: p.quantity + product.quantity }
                : p
            )
          : [...state.products, product];

        set({ products: updated });
      },

      removeProduct: (id) => {
        const updated = get().products.filter((p) => p.id !== id);
        set({ products: updated });
      },

      updateQuantity: (id, quantity) => {
        const updated = get().products.map((p) =>
          p.id === id ? { ...p, quantity } : p
        );
        set({ products: updated });
      },
    }),
    {
      name: 'cart', 
      partialize: (state) => ({ products: state.products }), 
    }
  )
);
