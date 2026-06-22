import { Inject, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { OrderRepository } from '../domain/repositories/order.repository.js';
import { OrderEntity } from '../domain/entities/order.entity.js';

@Injectable()
export class OrderService {
  constructor(@Inject(OrderRepository) private readonly orderRepository: OrderRepository) {}

  async createOrder(payload: OrderEntity) {
    const enrichedOrder: OrderEntity = {
      ...payload,
      id: payload.id ?? randomUUID(),
      createdAt: payload.createdAt ?? new Date().toISOString(),
      status: payload.status ?? 'pending',
      paymentStatus: payload.paymentStatus ?? 'pending',
      fulfillmentStatus: payload.fulfillmentStatus ?? 'pending'
    };

    return this.orderRepository.save(enrichedOrder);
  }

  async listOrdersForUser(userId: string) {
    return this.orderRepository.findByUserId(userId);
  }

  async listOrdersForVendor(vendorId: string) {
    return this.orderRepository.findByVendorId(vendorId);
  }
}
