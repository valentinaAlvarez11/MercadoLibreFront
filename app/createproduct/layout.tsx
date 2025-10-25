import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mercado Libre | Crear Producto",
  description: "Publica y vende tus productos fácilmente en Mercado Libre Colombia.",
  openGraph: {
    title: "Mercado Libre | Crear Producto",
    description: "Publica y vende tus productos fácilmente en Mercado Libre Colombia.",
    images: ["https://http2.mlstatic.com/D_NQ_NP_2X_601857-MLA5495309220_042023-F.webp"],
  },
};

export default function CreateProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
