import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../domain/repositories/order.repository.js';
import { OrderEntity } from '../domain/entities/order.entity.js';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}

  async createOrder(payload: OrderEntity) {
    return this.orderRepository.save(payload);
  }

  async listOrdersForUser(userId: string) {
    return this.orderRepository.findByUserId(userId);
  }
}
