import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mercado Libre | Favoritos',
  description: 'Accede rápidamente a tus productos guardados.',
  openGraph: {
    title: 'Mercado Libre | Favoritos',
    description: 'Accede rápidamente a tus productos guardados.',
    url: 'http://localhost:3001/favoritos',
  },
};

export default function FavoritosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>; 
}


