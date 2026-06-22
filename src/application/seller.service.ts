import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../domain/repositories/order.repository.js';

@Injectable()
export class SellerService {
  constructor(private readonly orderRepository: OrderRepository) {}

  async updateCatalog(payload: unknown) {
    return { updated: true, payload };
  }

  async listOrders(vendorId: string) {
    return this.orderRepository.findByVendorId(vendorId);
  }
}
