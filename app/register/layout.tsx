
import React from "react";
import Image from "next/image";
import mercadolibreLogo from "@/app/assets/mercadolibre.png"; 

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Mercado Libre | Registro',
  description: 'Crea tu cuenta en Mercado Libre Colombia y comienza a comprar y vender productos de forma segura y rápida.',
  keywords: ['mercado libre', 'registro', 'crear cuenta', 'comprar', 'vender', 'envío gratis', 'seguridad'],
  alternates: {
    canonical: 'http://localhost:3001/register',
  },
  openGraph: {
    title: 'Mercado Libre | Registro',
    description: 'Crea tu cuenta en Mercado Libre Colombia y comienza a comprar y vender productos de forma segura y rápida.',
    url: 'http://localhost:3001/register',
    siteName: 'Mercado Libre',
    images: [
      {
        url: 'https://http2.mlstatic.com/D_NQ_NP_2X_601857-MLA5495309220_042023-F.webp',
        width: 800,
        height: 600,
        alt: 'Mercado Libre registro',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mercado Libre | Registro',
    description: 'Crea tu cuenta en Mercado Libre Colombia y comienza a comprar y vender productos de forma segura y rápida.',
    images: ['https://http2.mlstatic.com/D_NQ_NP_2X_601857-MLA5495309220_042023-F.webp'],
    site: '@mercadolibre',
  },
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="w-full bg-[#FFE600] py-3 px-4 flex items-center">
        <div className="flex items-center gap-3 max-w-6xl w-full">
          <Image
            src={mercadolibreLogo}
            alt="Mercado Libre"
            width={110}
            height={110}
            priority
            className="ml-0"
          />
        </div>
      </header>
      {children}
    </>
  );
}
