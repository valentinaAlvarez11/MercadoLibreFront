import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Mercado Libre | Productos',
  description: 'Explora y compra productos en Mercado Libre Colombia. Ofertas y envíos.',
  openGraph: {
    title: 'Mercado Libre | Productos',
    description: 'Explora y compra productos en Mercado Libre Colombia. Ofertas y envíos.',
    url: 'http://localhost:3001/product',
    images: [
      {
        url: 'https://http2.mlstatic.com/D_NQ_NP_2X_601857-MLA5495309220_042023-F.webp',
        width: 800,
        height: 600,
        alt: 'Mercado Libre productos',
      },
    ],
  },
};

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
