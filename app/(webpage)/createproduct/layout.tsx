import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Mercado Libre | Crear Producto',
  description: 'Publica y vende tus productos en Mercado Libre Colombia. Fácil, rápido y seguro.',
  openGraph: {
    title: 'Mercado Libre | Crear Producto',
    description: 'Publica y vende tus productos en Mercado Libre Colombia. Fácil, rápido y seguro.',
    url: 'http://localhost:3001/createproduct',
    images: [
      {
        url: 'https://http2.mlstatic.com/D_NQ_NP_2X_601857-MLA5495309220_042023-F.webp',
        width: 800,
        height: 600,
        alt: 'Mercado Libre crear producto',
      },
    ],
  },
};

export default function CreateProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
