import type { Metadata } from "next";
import HeaderComponent from "@/components/organisms/HeaderComponent";

export const metadata: Metadata = {
  title: 'Mercado Libre | Inicio',
  description: 'Descubre los mejores productos, ofertas y servicios en Mercado Libre. Compra fácil, rápido y seguro.',
  keywords: ['mercado libre', 'compras', 'productos', 'ofertas', 'envío gratis', 'más vendidos'],
  openGraph: {
    title: 'Mercado Libre | Inicio',
    description: 'Descubre los mejores productos, ofertas y servicios en Mercado Libre. Compra fácil, rápido y seguro.',
    url: 'https://www.mercadolibre.com/',
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
    title: 'Mercado Libre | Inicio',
    description: 'Descubre los mejores productos, ofertas y servicios en Mercado Libre. Compra fácil, rápido y seguro.',
    images: ['https://http2.mlstatic.com/D_NQ_NP_2X_601857-MLA5495309220_042023-F.webp'],
    site: '@mercadolibre',
  },
};

export default function WebpageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <HeaderComponent />
      { children }
    </main>
  );
}
