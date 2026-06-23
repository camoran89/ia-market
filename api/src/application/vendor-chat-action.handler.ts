import { VendorService } from './vendor.service.js';
import { VendorChatPayload } from './types/vendor-chat-payload.type.js';

export async function handleVendorAction(
  vendorService: VendorService,
  payload: VendorChatPayload,
) {
  if (!payload.vendorId) {
    return { error: 'vendorId is required for vendor actions' };
  }

  switch (payload.action) {
    case 'createProduct':
      if (!payload.product) {
        return { error: 'product payload is required to create a product' };
      }
      return { product: await vendorService.createProduct(payload.vendorId, payload.product) };

    case 'publishCatalog':
      if (!payload.catalogItems) {
        return { error: 'catalogItems payload is required to publish catalog' };
      }
      return { catalog: await vendorService.publishCatalogItems({ vendorId: payload.vendorId, items: payload.catalogItems }) };

    case 'registerSubscription':
      if (!payload.plan) {
        return { error: 'plan is required to register subscription' };
      }
      return { subscription: await vendorService.registerSubscription({ vendorId: payload.vendorId, plan: payload.plan }) };

    default:
      return { hint: 'Por favor especifica si deseas crear un producto, publicar catálogo o registrar una suscripción.' };
  }
}
