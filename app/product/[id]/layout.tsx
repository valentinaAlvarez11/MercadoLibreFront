import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mercado Libre | Detalle de Producto",
  description: "Consulta la información y precio de este producto en Mercado Libre Colombia.",
  openGraph: {
    title: "Mercado Libre | Detalle de Producto",
    description: "Consulta la información y precio de este producto en Mercado Libre Colombia.",
    images: ["https://http2.mlstatic.com/D_NQ_NP_2X_601857-MLA5495309220_042023-F.webp"],
  },
};

export default function ProductDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
