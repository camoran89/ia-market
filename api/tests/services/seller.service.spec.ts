import { describe, expect, it } from 'vitest';
import { SellerService } from '../../src/application/seller.service.ts';
import { OrderEntity } from '../../src/domain/entities/order.entity.ts';
import { InMemoryOrderRepository } from '../../src/infrastructure/adapters/in-memory-order.repository.ts';

const repository = new InMemoryOrderRepository();
const sellerService = new SellerService(repository);

describe('SellerService', () => {
  it('lists orders for vendor from repository', async () => {
    const order: OrderEntity = {
      id: 'order-3',
      userId: 'user-3',
      vendorId: 'vendor-3',
      items: [{ productId: 'product-3', quantity: 1, unitPrice: 35 }],
      totalAmount: 35,
      status: 'pending',
      paymentStatus: 'pending',
      fulfillmentStatus: 'pending',
      createdAt: new Date().toISOString()
    };

    await repository.save(order);

    const result = await sellerService.listOrders('vendor-3');

    expect(result).toHaveLength(1);
    expect(result[0].vendorId).toBe('vendor-3');
  });

  it('returns catalog updated payload', async () => {
    const payload = { productId: 'product-3', price: 45 };
    const result = await sellerService.updateCatalog(payload);

    expect(result.updated).toBe(true);
    expect(result.payload).toEqual(payload);
  });
});
