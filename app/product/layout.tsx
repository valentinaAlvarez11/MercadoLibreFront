import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Mercado Libre | Productos',
  description: 'Explora y compra los mejores productos en Mercado Libre Colombia. Encuentra ofertas, novedades y envíos gratis.',
  keywords: ['mercado libre', 'productos', 'comprar', 'ofertas', 'envío gratis', 'novedades'],
  alternates: {
    canonical: 'http://localhost:3001/product',
  },
  openGraph: {
    title: 'Mercado Libre | Productos',
    description: 'Explora y compra los mejores productos en Mercado Libre Colombia. Encuentra ofertas, novedades y envíos gratis.',
    url: 'http://localhost:3001/product',
    siteName: 'Mercado Libre',
    images: [
      {
        url: 'https://http2.mlstatic.com/D_NQ_NP_2X_601857-MLA5495309220_042023-F.webp',
        width: 800,
        height: 600,
        alt: 'Mercado Libre productos',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mercado Libre | Productos',
    description: 'Explora y compra los mejores productos en Mercado Libre Colombia. Encuentra ofertas, novedades y envíos gratis.',
    images: ['https://http2.mlstatic.com/D_NQ_NP_2X_601857-MLA5495309220_042023-F.webp'],
    site: '@mercadolibre',
  },
};

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
