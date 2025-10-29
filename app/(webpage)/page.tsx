import type { Metadata } from 'next'; 
import HomePageClient from '../(webpage)/home/page';

export const metadata: Metadata = {
  title: 'Mercado Libre Colombia | Inicio',
  description: 'Ofertas y compras con envíos rápidos en Colombia.',
  openGraph: {
    title: 'Mercado Libre Colombia | Inicio',
    description: 'Ofertas y compras con envíos rápidos en Colombia.',
    url: 'http://localhost:3001',
    images: [
      {
        url: 'https://http2.mlstatic.com/D_NQ_NP_2X_601857-MLA5495309220_042023-F.webp',
        width: 800,
        height: 600,
        alt: 'Mercado Libre',
      },
    ],
  },
};

export default function Page() {
  return (
    <HomePageClient />
  );
}