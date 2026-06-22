import { Module } from '@nestjs/common';
import { Pool } from 'pg';
import { PostgresUserRepository } from './postgres-user.repository.js';
import { PostgresOrderRepository } from './postgres-order.repository.js';
import { PostgresCatalogRepository } from './postgres-catalog.repository.js';
import { PostgresSubscriptionRepository } from './postgres-subscription.repository.js';
import { postgresPoolProvider } from './postgres-pool.provider.js';

@Module({
  providers: [
    postgresPoolProvider,
    {
      provide: PostgresUserRepository,
      useFactory: (pool: Pool) => new PostgresUserRepository(pool),
      inject: ['PG_POOL']
    },
    {
      provide: PostgresOrderRepository,
      useFactory: (pool: Pool) => new PostgresOrderRepository(pool),
      inject: ['PG_POOL']
    },
    {
      provide: PostgresCatalogRepository,
      useFactory: (pool: Pool) => new PostgresCatalogRepository(pool),
      inject: ['PG_POOL']
    },
    {
      provide: PostgresSubscriptionRepository,
      useFactory: (pool: Pool) => new PostgresSubscriptionRepository(pool),
      inject: ['PG_POOL']
    }
  ],
  exports: [
    PostgresUserRepository,
    PostgresOrderRepository,
    PostgresCatalogRepository,
    PostgresSubscriptionRepository
  ]
})
export class PostgresModule {}
