import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../../domain/repositories/order.repository.js';
import { OrderEntity } from '../../domain/entities/order.entity.js';
import { JsonFileRepositoryBase } from './json-file-repository.base.js';

@Injectable()
export class FileOrderRepository extends JsonFileRepositoryBase<OrderEntity> implements OrderRepository {
  constructor() {
    super('orders.json');
  }

  async save(orderData: OrderEntity): Promise<OrderEntity> {
    const orders = await this.readRecords();
    orders.push(orderData);
    await this.saveRecords(orders);
    return orderData;
  }

  async findByUserId(userId: string): Promise<OrderEntity[]> {
    const orders = await this.readRecords();
    return orders.filter(order => order.userId === userId);
  }

  async findByVendorId(vendorId: string): Promise<OrderEntity[]> {
    const orders = await this.readRecords();
    return orders.filter(order => order.vendorId === vendorId);
  }
}
