import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { CatalogRepository } from '../../domain/repositories/catalog.repository.js';
import { CatalogItemEntity } from '../../domain/entities/catalog-item.entity.js';
import { loadQueries } from '../sql/load-queries.js';

@Injectable()
export class PostgresCatalogRepository implements CatalogRepository {
  private readonly queriesPromise = loadQueries('catalog-queries.sql');

  constructor(private readonly pool: Pool) {}

  async save(items: CatalogItemEntity[]): Promise<CatalogItemEntity[]> {
    const queries = await this.queriesPromise;
    const executions = items.map(item =>
      this.pool.query(
        queries.UPSERT_CATALOG_ITEM,
        [item.id, item.vendorId, item.name, item.description, item.price, item.available, item.imageUrl ?? null, item.category ?? null, item.createdAt]
      )
    );

    await Promise.all(executions);
    return items;
  }

  async findByVendorId(vendorId: string): Promise<CatalogItemEntity[]> {
    const queries = await this.queriesPromise;
    const result = await this.pool.query(queries.SELECT_CATALOG_BY_VENDOR, [vendorId]);
    return result.rows;
  }
}
