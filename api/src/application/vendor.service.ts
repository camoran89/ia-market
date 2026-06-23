import { Inject, Injectable } from '@nestjs/common';
import { CatalogRepository } from '../domain/repositories/catalog.repository.js';
import { SubscriptionRepository } from '../domain/repositories/subscription.repository.js';
import { CatalogItemEntity } from '../domain/entities/catalog-item.entity.js';
import { SubscriptionEntity } from '../domain/entities/subscription.entity.js';
import { randomUUID } from 'crypto';
import { OrderRepository } from '../domain/repositories/order.repository.js';
import { PRODUCT_REPOSITORY } from '../domain/product/product-repository.token.js';
import { ProductRepository } from '../domain/product/product-repository.interface.js';
import { Product } from '../domain/product/product.entity.js';
import { CreateProductDto } from './dtos/create-product.dto.js';
import { SubscriptionPayload } from './types/subscription-payload.type.js';
import { SubscriptionResult } from './types/subscription-result.type.js';

@Injectable()
export class VendorService {
  constructor(
    @Inject(OrderRepository) private readonly orderRepository: OrderRepository,
    @Inject(CatalogRepository) private readonly catalogRepository: CatalogRepository,
    @Inject(SubscriptionRepository) private readonly subscriptionRepository: SubscriptionRepository,
    @Inject(PRODUCT_REPOSITORY) private readonly productRepository: ProductRepository,
  ) {}

  async publishCatalogItems(payload: { vendorId: string; items: Omit<CatalogItemEntity, 'id' | 'vendorId' | 'createdAt'>[] }) {
    const enriched = payload.items.map(item => ({
      ...item,
      id: randomUUID(),
      vendorId: payload.vendorId,
      createdAt: new Date().toISOString()
    }));

    const existing = await this.catalogRepository.findByVendorId(payload.vendorId);
    const preserved = existing.filter(item => !enriched.some(e => e.name === item.name && e.description === item.description));
    const result = await this.catalogRepository.save([...preserved, ...enriched]);
    return { updated: true, items: result };
  }

  async createProduct(vendorId: string, payload: CreateProductDto) {
    const product = new Product(
      null,
      payload.name,
      payload.description,
      payload.price,
      vendorId,
      payload.category,
      payload.stock,
    );
    return this.productRepository.save(product);
  }

  async listCatalog(vendorId: string) {
    return this.catalogRepository.findByVendorId(vendorId);
  }

  async listOrders(vendorId: string) {
    return this.orderRepository.findByVendorId(vendorId);
  }

  async registerSubscription(payload: SubscriptionPayload): Promise<SubscriptionResult> {
    const subscription: SubscriptionEntity = {
      id: randomUUID(),
      vendorId: payload.vendorId ?? 'unknown-vendor',
      plan: payload.plan ?? 'standard',
      active: true,
      startedAt: new Date().toISOString()
    };

    await this.subscriptionRepository.save(subscription);

    return {
      registered: true,
      subscription: {
        vendorId: subscription.vendorId,
        plan: subscription.plan,
        active: subscription.active,
        startedAt: subscription.startedAt
      }
    };
  }
}
