import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { SubscriptionRepository } from '../../domain/repositories/subscription.repository.js';
import { SubscriptionEntity } from '../../domain/entities/subscription.entity.js';
import { loadQueries } from '../sql/load-queries.js';

@Injectable()
export class PostgresSubscriptionRepository implements SubscriptionRepository {
  private readonly queriesPromise = loadQueries('subscription-queries.sql');

  constructor(private readonly pool: Pool) {}

  async save(subscription: SubscriptionEntity): Promise<SubscriptionEntity> {
    const queries = await this.queriesPromise;
    await this.pool.query(
      queries.UPSERT_SUBSCRIPTION,
      [subscription.id, subscription.vendorId, subscription.plan, subscription.active, subscription.startedAt]
    );
    return subscription;
  }

  async findByVendorId(vendorId: string): Promise<SubscriptionEntity | null> {
    const queries = await this.queriesPromise;
    const result = await this.pool.query(queries.SELECT_SUBSCRIPTION_BY_VENDOR, [vendorId]);
    return result.rows[0] ?? null;
  }
}
