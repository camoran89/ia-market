import { CatalogItemEntity } from '../entities/catalog-item.entity.js';

export abstract class CatalogRepository {
  abstract save(items: CatalogItemEntity[]): Promise<CatalogItemEntity[]>;
  abstract findByVendorId(vendorId: string): Promise<CatalogItemEntity[]>;
  abstract findAll(): Promise<CatalogItemEntity[]>;
}
