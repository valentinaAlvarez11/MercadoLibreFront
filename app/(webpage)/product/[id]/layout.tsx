import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Mercado Libre | Detalle de Producto',
  description: 'Consulta información y precio del producto. Compra fácil y segura.',
  openGraph: {
    title: 'Mercado Libre | Detalle de Producto',
    description: 'Consulta información y precio del producto. Compra fácil y segura.',
    url: 'http://localhost:3001/product/id',
    images: [
      {
        url: 'https://http2.mlstatic.com/D_NQ_NP_2X_601857-MLA5495309220_042023-F.webp',
        width: 800,
        height: 600,
        alt: 'Mercado Libre detalle producto',
      },
    ],
  },
};

export default function ProductDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
