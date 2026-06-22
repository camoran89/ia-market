import { Injectable } from '@nestjs/common';
import { CatalogItemEntity } from '../../domain/entities/catalog-item.entity.js';
import { CatalogRepository } from '../../domain/repositories/catalog.repository.js';
import { JsonFileRepositoryBase } from './json-file-repository.base.js';

@Injectable()
export class FileCatalogRepository extends JsonFileRepositoryBase<CatalogItemEntity> implements CatalogRepository {
  constructor() {
    super('catalog.json');
  }

  async save(items: CatalogItemEntity[]): Promise<CatalogItemEntity[]> {
    await this.saveRecords(items);
    return items;
  }

  async findByVendorId(vendorId: string): Promise<CatalogItemEntity[]> {
    const items = await this.readRecords();
    return items.filter(item => item.vendorId === vendorId);
  }

  async findAll(): Promise<CatalogItemEntity[]> {
    return this.readRecords();
  }
}
