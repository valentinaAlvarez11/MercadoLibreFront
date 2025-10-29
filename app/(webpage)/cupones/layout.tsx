import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mercado Libre | Cupones',
  description: 'Aprovecha cupones y beneficios disponibles para tus compras.',
  openGraph: {
    title: 'Mercado Libre | Cupones',
    description: 'Aprovecha cupones y beneficios disponibles para tus compras.',
    url: 'http://localhost:3001/cupones',
  },
};

export default function CuponesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>; 
}


