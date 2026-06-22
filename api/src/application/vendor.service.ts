import { Inject, Injectable } from '@nestjs/common';
import { CatalogRepository } from '../domain/repositories/catalog.repository.js';
import { SubscriptionRepository } from '../domain/repositories/subscription.repository.js';
import { CatalogItemEntity } from '../domain/entities/catalog-item.entity.js';
import { SubscriptionEntity } from '../domain/entities/subscription.entity.js';
import { randomUUID } from 'crypto';

@Injectable()
export class VendorService {
  constructor(
    @Inject(CatalogRepository) private readonly catalogRepository: CatalogRepository,
    @Inject(SubscriptionRepository) private readonly subscriptionRepository: SubscriptionRepository
  ) {}

  async publishCatalogItems(vendorId: string, items: Omit<CatalogItemEntity, 'id' | 'vendorId' | 'createdAt'>[]) {
    const existing = await this.catalogRepository.findByVendorId(vendorId);
    const enriched = items.map(item => ({
      ...item,
      id: randomUUID(),
      vendorId,
      createdAt: new Date().toISOString()
    }));

    return this.catalogRepository.save([...existing.filter(item => !enriched.some(e => e.id === item.id)), ...enriched]);
  }

  async listCatalog(vendorId: string) {
    return this.catalogRepository.findByVendorId(vendorId);
  }

  async registerSubscription(payload: { vendorId: string; plan: string }) {
    const subscription: SubscriptionEntity = {
      id: randomUUID(),
      vendorId: payload.vendorId,
      plan: payload.plan,
      active: true,
      startedAt: new Date().toISOString()
    };

    return this.subscriptionRepository.save(subscription);
  }
}
