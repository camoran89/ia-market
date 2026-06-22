import { describe, expect, it } from 'vitest';
import { InMemoryOrderRepository } from '../../src/infrastructure/adapters/in-memory-order.repository.ts';
import { OrderService } from '../../src/application/order.service.ts';
import { OrderEntity } from '../../src/domain/entities/order.entity.ts';

describe('OrderService', () => {
  const repository = new InMemoryOrderRepository();
  const orderService = new OrderService(repository);

  it('creates an order with default statuses and timestamps', async () => {
    const payload: OrderEntity = {
      id: 'order-1',
      userId: 'user-1',
      vendorId: 'vendor-1',
      items: [{ productId: 'product-1', quantity: 1, unitPrice: 100 }],
      totalAmount: 100,
      status: 'pending',
      paymentStatus: 'pending',
      fulfillmentStatus: 'pending',
      createdAt: new Date().toISOString()
    };

    const result = await orderService.createOrder(payload);

    expect(result.id).toBe('order-1');
    expect(result.paymentStatus).toBe('pending');
    expect(result.fulfillmentStatus).toBe('pending');
  });

  it('returns orders filtered by user and vendor', async () => {
    await orderService.createOrder({
      id: 'order-2',
      userId: 'user-2',
      vendorId: 'vendor-2',
      items: [{ productId: 'product-2', quantity: 2, unitPrice: 50 }],
      totalAmount: 100,
      status: 'pending',
      paymentStatus: 'pending',
      fulfillmentStatus: 'pending',
      createdAt: new Date().toISOString()
    });

    const userOrders = await orderService.listOrdersForUser('user-2');
    const vendorOrders = await orderService.listOrdersForVendor('vendor-2');

    expect(userOrders.length).toBeGreaterThanOrEqual(1);
    expect(vendorOrders.length).toBeGreaterThanOrEqual(1);
    expect(userOrders[0].vendorId).toBe('vendor-2');
    expect(vendorOrders[0].userId).toBe('user-2');
  });
});
