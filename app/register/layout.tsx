
import React from "react";
import Image from "next/image";
import mercadolibreLogo from "@/app/assets/mercadolibre.png"; 

export const metadata = {
  title: "Crea tu cuenta y compra con envíos gratis",
  description: "Crea tu cuenta en Mercado Libre Colombia y comienza a comprar y vender productos de forma segura.",
  alternates: {
    canonical: "http://localhost:3000/register",
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
