import { describe, expect, it } from 'vitest';
import { BuyerService } from '../../src/application/buyer.service.ts';
import { OrderService } from '../../src/application/order.service.ts';
import { OrderRepository } from '../../src/domain/repositories/order.repository.ts';
import { OrderEntity } from '../../src/domain/entities/order.entity.ts';

class StubOrderRepository implements OrderRepository {
  async save(orderData: OrderEntity) {
    return orderData;
  }

  async findByUserId(userId: string): Promise<OrderEntity[]> {
    const orders: OrderEntity[] = [
      {
        id: 'order-1',
        userId,
        vendorId: 'vendor-1',
        items: [{ productId: 'product-1', quantity: 1, unitPrice: 100 }],
        totalAmount: 100,
        status: 'pending',
        paymentStatus: 'pending',
        fulfillmentStatus: 'pending',
        createdAt: new Date().toISOString()
      }
    ];

    return orders;
  }

  async findByVendorId(vendorId: string): Promise<OrderEntity[]> {
    return [];
  }
}

describe('BuyerService', () => {
  const buyerService = new BuyerService(new OrderService(new StubOrderRepository()));

  it('creates an order through the order service', async () => {
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

    const result = await buyerService.createOrder(payload);

    expect(result).toEqual(payload);
  });

  it('lists transactions for a specific user', async () => {
    const result = await buyerService.listTransactions('user-1');

    expect(result).toHaveLength(1);
    expect(result[0].userId).toBe('user-1');
  });
});
