import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Mercado Libre | Crear Producto',
  description: 'Publica y vende tus productos en Mercado Libre Colombia. Fácil, rápido y seguro para llegar a miles de compradores.',
  keywords: ['mercado libre', 'crear producto', 'vender', 'publicar', 'ventas', 'seguridad'],
  alternates: {
    canonical: 'http://localhost:3001/createproduct',
  },
  openGraph: {
    title: 'Mercado Libre | Crear Producto',
    description: 'Publica y vende tus productos en Mercado Libre Colombia. Fácil, rápido y seguro para llegar a miles de compradores.',
    url: 'http://localhost:3001/createproduct',
    siteName: 'Mercado Libre',
    images: [
      {
        url: 'https://http2.mlstatic.com/D_NQ_NP_2X_601857-MLA5495309220_042023-F.webp',
        width: 800,
        height: 600,
        alt: 'Mercado Libre crear producto',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mercado Libre | Crear Producto',
    description: 'Publica y vende tus productos en Mercado Libre Colombia. Fácil, rápido y seguro para llegar a miles de compradores.',
    images: ['https://http2.mlstatic.com/D_NQ_NP_2X_601857-MLA5495309220_042023-F.webp'],
    site: '@mercadolibre',
  },
};

export default function CreateProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
