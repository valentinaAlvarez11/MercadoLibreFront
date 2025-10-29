// app/(webpage)/entrega/page.tsx
import type { Metadata } from 'next';
import DeliveryOptionsComponent from "@/components/organisms/DeliveryOptionsComponent";

export const metadata: Metadata = {
  title: 'Mercado Libre | Entrega',
  description: 'Opciones y tiempos de entrega para tus compras.',
  openGraph: {
    title: 'Mercado Libre | Entrega',
    description: 'Opciones y tiempos de entrega para tus compras.',
    url: 'http://localhost:3001/entrega',
  },
};

export default function EntregaPage() {
  return (
    <DeliveryOptionsComponent />
  );
}
