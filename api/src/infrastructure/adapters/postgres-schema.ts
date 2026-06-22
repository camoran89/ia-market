import { Pool } from 'pg';
import { loadQueries } from '../sql/load-queries.js';

export async function ensurePostgresSchema(pool: Pool): Promise<void> {
  const queries = await loadQueries('postgres-schema-queries.sql');
  await pool.query(queries.CREATE_USERS_TABLE);
  await pool.query(queries.CREATE_ORDERS_TABLE);
  await pool.query(queries.CREATE_CATALOG_ITEMS_TABLE);
  await pool.query(queries.CREATE_SUBSCRIPTIONS_TABLE);
}
