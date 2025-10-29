import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Mercado Libre | Detalle de Producto',
  description: 'Consulta la información, características y precio de este producto en Mercado Libre Colombia. Compra fácil y seguro.',
  keywords: ['mercado libre', 'producto', 'detalle', 'comprar', 'precio', 'características', 'envío gratis'],
  alternates: {
    canonical: 'http://localhost:3001/product/id',
  },
  openGraph: {
    title: 'Mercado Libre | Detalle de Producto',
    description: 'Consulta la información, características y precio de este producto en Mercado Libre Colombia. Compra fácil y seguro.',
    url: 'http://localhost:3001/product/id',
    siteName: 'Mercado Libre',
    images: [
      {
        url: 'https://http2.mlstatic.com/D_NQ_NP_2X_601857-MLA5495309220_042023-F.webp',
        width: 800,
        height: 600,
        alt: 'Mercado Libre detalle producto',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mercado Libre | Detalle de Producto',
    description: 'Consulta la información, características y precio de este producto en Mercado Libre Colombia. Compra fácil y seguro.',
    images: ['https://http2.mlstatic.com/D_NQ_NP_2X_601857-MLA5495309220_042023-F.webp'],
    site: '@mercadolibre',
  },
};

export default function ProductDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
