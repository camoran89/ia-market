import { Inject, Injectable } from '@nestjs/common';
import { CatalogRepository } from '../domain/repositories/catalog.repository.js';
import { OrderRepository } from '../domain/repositories/order.repository.js';
import { CatalogItemEntity } from '../domain/entities/catalog-item.entity.js';
import { randomUUID } from 'crypto';

@Injectable()
export class SellerService {
  constructor(
    @Inject(CatalogRepository) private readonly catalogRepository: CatalogRepository,
    @Inject(OrderRepository) private readonly orderRepository: OrderRepository,
  ) {}

  async updateCatalog(payload: {
    vendorId: string;
    items: Omit<CatalogItemEntity, 'id' | 'vendorId' | 'createdAt'>[];
  }) {
    const enriched = payload.items.map(item => ({
      ...item,
      id: randomUUID(),
      vendorId: payload.vendorId,
      createdAt: new Date().toISOString(),
    }));

    const existing = await this.catalogRepository.findByVendorId(payload.vendorId);
    const preserved = existing.filter(
      item => !enriched.some(e => e.name === item.name && e.description === item.description),
    );
    return this.catalogRepository.save([...preserved, ...enriched]);
  }

  async listOrders(vendorId: string) {
    return this.orderRepository.findByVendorId(vendorId);
  }
}
