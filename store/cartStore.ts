// store/cartStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartProduct } from '@/interfaces/cart'; 


interface CartState {
  products: CartProduct[];
  addProduct: (product: CartProduct) => void;
  removeProduct: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void; // ⬅️ NUEVA FUNCIÓN
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      products: [],

      addProduct: (product) => {
        const state = get();
        const existing = state.products.find((p) => p.id === product.id);
        
        const productToAdd: CartProduct = { 
          ...product, 
          imageUrl: product.imageUrl || product.image || '/placeholder.jpg' 
        };

        const updated = existing
          ? state.products.map((p) =>
              p.id === product.id
                ? { ...p, quantity: p.quantity + product.quantity }
                : p
            )
          : [...state.products, productToAdd];

        set({ products: updated });
      },

      removeProduct: (id) => {
        const updated = get().products.filter((p) => p.id !== id);
        set({ products: updated });
      },

      updateQuantity: (id, quantity) => {
        const safeQuantity = Math.max(1, quantity); 
        const updated = get().products.map((p) =>
          p.id === id ? { ...p, quantity: safeQuantity } : p
        );
        set({ products: updated });
      },
      
      increaseQuantity: (id) => {
        const product = get().products.find(p => p.id === id);
        if (product) {
          get().updateQuantity(id, product.quantity + 1); 
        }
      },

      decreaseQuantity: (id) => {
        const product = get().products.find(p => p.id === id);
        if (product && product.quantity > 1) {
          get().updateQuantity(id, product.quantity - 1); 
        }
      },
      
      clearCart: () => set({ products: [] }), // ⬅️ IMPLEMENTACIÓN DE VACIADO

    }),
    {
      name: 'cart', 
      partialize: (state) => ({ products: state.products }), 
    }
  )
);