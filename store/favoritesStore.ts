"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ProductCardInfo } from '@/interfaces/product';

interface FavoritesState {
  items: ProductCardInfo[];
  toggle: (product: ProductCardInfo) => void;
  remove: (id: string) => void;
  isFavorite: (id: string) => boolean;
  clear: () => void;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      items: [],

      toggle: (product) => {
        const current = get().items;
        const exists = current.some((p) => p.id === product.id);
        const next = exists
          ? current.filter((p) => p.id !== product.id)
          : [...current, product];
        set({ items: next });
      },

      remove: (id) => {
        set({ items: get().items.filter((p) => p.id !== id) });
      },

      isFavorite: (id) => get().items.some((p) => p.id === id),

      clear: () => set({ items: [] }),
    }),
    {
      name: 'favorites',
      partialize: (state) => ({ items: state.items }),
    }
  )
);


