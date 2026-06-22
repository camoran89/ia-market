import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { OrderRepository } from '../../domain/repositories/order.repository.js';
import { OrderEntity } from '../../domain/entities/order.entity.js';
import { loadQueries } from '../sql/load-queries.js';

@Injectable()
export class PostgresOrderRepository implements OrderRepository {
  private readonly queriesPromise = loadQueries('order-queries.sql');

  constructor(private readonly pool: Pool) {}

  async save(orderData: OrderEntity): Promise<OrderEntity> {
    const queries = await this.queriesPromise;
    await this.pool.query(
      queries.UPSERT_ORDER,
      [
        orderData.id,
        orderData.userId,
        orderData.vendorId,
        JSON.stringify(orderData.items),
        orderData.totalAmount,
        orderData.status,
        orderData.paymentStatus,
        orderData.fulfillmentStatus,
        orderData.createdAt,
        orderData.metadata || null
      ]
    );
    return orderData;
  }

  async findByUserId(userId: string): Promise<OrderEntity[]> {
    const queries = await this.queriesPromise;
    const result = await this.pool.query(queries.SELECT_ORDERS_BY_USER, [userId]);
    return result.rows;
  }

  async findByVendorId(vendorId: string): Promise<OrderEntity[]> {
    const queries = await this.queriesPromise;
    const result = await this.pool.query(queries.SELECT_ORDERS_BY_VENDOR, [vendorId]);
    return result.rows;
  }
}
