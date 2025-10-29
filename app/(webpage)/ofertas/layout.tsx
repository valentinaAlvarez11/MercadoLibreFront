import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mercado Libre | Ofertas',
  description: 'Encuentra ofertas destacadas y descuentos del día.',
  openGraph: {
    title: 'Mercado Libre | Ofertas',
    description: 'Encuentra ofertas destacadas y descuentos del día.',
    url: 'http://localhost:3001/ofertas',
  },
};

export default function OfertasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>; 
}


