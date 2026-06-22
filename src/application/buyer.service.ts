import { Injectable } from '@nestjs/common';
import { OrderService } from './order.service.js';
import { OrderEntity } from '../domain/entities/order.entity.js';

@Injectable()
export class BuyerService {
  constructor(private readonly orderService: OrderService) {}

  async listTransactions(userId: string) {
    return this.orderService.listOrdersForUser(userId);
  }

  async createOrder(payload: OrderEntity) {
    return this.orderService.createOrder(payload);
  }
}
