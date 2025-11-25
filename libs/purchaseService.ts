// libs/purchaseService.ts
import { apiFetch } from "./singletonFetch";

interface PurchaseItem {
  productId: number;
  quantity: number;
}

interface PurchaseResponse {
  mensaje: string;
  orden: {
    id: number;
    productId: number;
    buyerId: number;
    sellerId: number;
    quantity: number;
    totalPrice: number;
  };
  nuevoStock: number;
}

class PurchaseService {
  /**
   * Confirma la compra de un solo artículo, lo que dispara la creación de la orden
   * y el descuento de stock en el backend.
   * * @param item Objeto con el ID del producto y la cantidad a comprar.
   * @returns La respuesta de la orden creada.
   */
  async confirmPurchase(item: PurchaseItem): Promise<PurchaseResponse> {
    // La ruta /buy del backend espera { productId, quantity }
    return apiFetch('/buy', 'POST', item) as Promise<PurchaseResponse>;
  }
}

export const purchaseService = new PurchaseService();