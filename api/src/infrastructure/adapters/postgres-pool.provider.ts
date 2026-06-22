import { Provider } from '@nestjs/common';
import { Pool } from 'pg';
import { ensurePostgresSchema } from './postgres-schema.js';

export const postgresPoolProvider: Provider = {
  provide: 'PG_POOL',
  useFactory: async () => {
    const pool = new Pool({
      host: process.env.DATABASE_HOST ?? 'postgres',
      port: Number(process.env.DATABASE_PORT ?? 5432),
      database: process.env.DATABASE_NAME ?? 'ia_marketplace',
      user: process.env.DATABASE_USER ?? 'ia_market_user',
      password: process.env.DATABASE_PASSWORD ?? 'ia_market_pass'
    });

    await ensurePostgresSchema(pool);
    return pool;
  }
};
