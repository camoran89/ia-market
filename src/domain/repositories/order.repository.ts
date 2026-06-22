import { OrderEntity } from '../entities/order.entity.js';

export abstract class OrderRepository {
  abstract save(orderData: OrderEntity): Promise<OrderEntity>;
  abstract findByUserId(userId: string): Promise<OrderEntity[]>;
}
