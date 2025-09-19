import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Mercado Libre | Login',
  description: 'Inicia sesión en Mercado Libre para acceder a tus compras, favoritos y más. Seguridad y facilidad en tu acceso.',
  keywords: ['mercado libre', 'login', 'iniciar sesión', 'compras', 'seguridad', 'usuario'],
  openGraph: {
    title: 'Mercado Libre | Login',
    description: 'Inicia sesión en Mercado Libre para acceder a tus compras, favoritos y más. Seguridad y facilidad en tu acceso.',
    url: 'http://localhost:3001/login',
    siteName: 'Mercado Libre',
    images: [
      {
        url: 'https://http2.mlstatic.com/D_NQ_NP_2X_601857-MLA5495309220_042023-F.webp',
        width: 800,
        height: 600,
        alt: 'Mercado Libre login',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mercado Libre | Login',
    description: 'Inicia sesión en Mercado Libre para acceder a tus compras, favoritos y más. Seguridad y facilidad en tu acceso.',
    images: ['https://http2.mlstatic.com/D_NQ_NP_2X_601857-MLA5495309220_042023-F.webp'],
    site: '@mercadolibre',
  },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
