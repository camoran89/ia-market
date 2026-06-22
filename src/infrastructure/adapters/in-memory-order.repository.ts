import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../../domain/repositories/order.repository.js';
import { OrderEntity } from '../../domain/entities/order.entity.js';

@Injectable()
export class InMemoryOrderRepository implements OrderRepository {
  private readonly orders: OrderEntity[] = [];

  async save(orderData: OrderEntity): Promise<OrderEntity> {
    this.orders.push(orderData);
    return orderData;
  }

  async findByUserId(userId: string): Promise<OrderEntity[]> {
    return this.orders.filter(order => order.userId === userId);
  }
}
