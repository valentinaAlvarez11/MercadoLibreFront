import type { Metadata } from "next";
import HeaderComponent from "@/components/organisms/HeaderComponent";

export const metadata: Metadata = {
  title: "Mercado Libre | Inicio",
  description: "Descubre los mejores productos, ofertas y servicios en Mercado Libre.",
  openGraph: {
    title: "Mercado Libre | Inicio",
    description: "Descubre los mejores productos, ofertas y servicios en Mercado Libre.",
    images: ["https://http2.mlstatic.com/D_NQ_NP_2X_601857-MLA5495309220_042023-F.webp"],
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
      {children}
    </main>
  );
}
