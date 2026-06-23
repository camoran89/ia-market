import 'reflect-metadata';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { INestApplication, Module } from '@nestjs/common';
import { ChatController } from '../../src/adapters/http/chat.controller.js';
import { ChatService } from '../../src/application/chat.service.js';
import { ChatIntentService } from '../../src/application/chat-intent.service.js';
import { ChatReplyService } from '../../src/application/chat-reply.service.js';
import { SearchService } from '../../src/application/search.service.js';
import { VendorService } from '../../src/application/vendor.service.js';
import { CatalogRepository } from '../../src/domain/repositories/catalog.repository.js';
import { OrderRepository } from '../../src/domain/repositories/order.repository.js';
import { SubscriptionRepository } from '../../src/domain/repositories/subscription.repository.js';
import { PRODUCT_REPOSITORY } from '../../src/domain/product/product-repository.token.js';
import { ProductRepository } from '../../src/domain/product/product-repository.interface.js';
import { InMemoryProductRepository } from '../../src/adapters/persistence/in-memory.product.repository.js';
import { CatalogItemEntity } from '../../src/domain/entities/catalog-item.entity.js';
import { SubscriptionEntity } from '../../src/domain/entities/subscription.entity.js';
import { OrderEntity } from '../../src/domain/entities/order.entity.js';

class InMemoryCatalogRepository implements CatalogRepository {
  private readonly items: CatalogItemEntity[] = [];

  async save(items: CatalogItemEntity[]): Promise<CatalogItemEntity[]> {
    this.items.splice(0, this.items.length, ...items);
    return [...this.items];
  }

  async findAll(): Promise<CatalogItemEntity[]> {
    return [...this.items];
  }

  async findByVendorId(vendorId: string): Promise<CatalogItemEntity[]> {
    return this.items.filter(item => item.vendorId === vendorId);
  }
}

class InMemoryOrderRepository implements OrderRepository {
  private readonly orders: OrderEntity[] = [];

  async save(order: OrderEntity): Promise<OrderEntity> {
    this.orders.push(order);
    return order;
  }

  async findByUserId(userId: string): Promise<OrderEntity[]> {
    return this.orders.filter(order => order.userId === userId);
  }

  async findByVendorId(vendorId: string): Promise<OrderEntity[]> {
    return this.orders.filter(order => order.vendorId === vendorId);
  }
}

class InMemorySubscriptionRepository implements SubscriptionRepository {
  private readonly subscriptions: SubscriptionEntity[] = [];

  async save(subscription: SubscriptionEntity): Promise<SubscriptionEntity> {
    this.subscriptions.push(subscription);
    return subscription;
  }

  async findByVendorId(vendorId: string): Promise<SubscriptionEntity | null> {
    return this.subscriptions.find(item => item.vendorId === vendorId) ?? null;
  }
}

@Module({
  controllers: [ChatController],
  providers: [
    ChatService,
    ChatIntentService,
    ChatReplyService,
    SearchService,
    VendorService,
    {
      provide: CatalogRepository,
      useClass: InMemoryCatalogRepository,
    },
    {
      provide: OrderRepository,
      useClass: InMemoryOrderRepository,
    },
    {
      provide: SubscriptionRepository,
      useClass: InMemorySubscriptionRepository,
    },
    {
      provide: PRODUCT_REPOSITORY,
      useClass: InMemoryProductRepository,
    },
  ],
})
class ChatTestModule {}

let app: INestApplication;

beforeAll(async () => {
  const moduleRef: TestingModule = await Test.createTestingModule({ imports: [ChatTestModule] }).compile();
  app = moduleRef.createNestApplication(new FastifyAdapter());
  await app.init();
  await app.getHttpAdapter().getInstance().ready();
});

afterAll(async () => {
  await app.close();
});

describe('Chat integration tests', () => {
  it('should process buyer chat search', async () => {
    const response = await request(app.getHttpServer())
      .post('/chat/message')
      .send({ text: 'quiero buscar un café' });

    expect(response.status).toBe(201);
    expect(response.body.intent).toBe('search');
    expect(Array.isArray(response.body.map)).toBe(true);
  });

  it('should process vendor subscription chat action', async () => {
    const response = await request(app.getHttpServer())
      .post('/chat/message')
      .send({
        text: 'registrar suscripción',
        role: 'vendor',
        vendorId: 'vendor-1',
        action: 'registerSubscription',
        plan: 'premium'
      });

    expect(response.status).toBe(201);
    expect(response.body.intent).toBe('vendorAction');
    expect(response.body.action).toBeDefined();
    expect(response.body.action.subscription).toMatchObject({
      registered: true,
      subscription: {
        vendorId: 'vendor-1',
        plan: 'premium',
        active: true,
      },
    });
  });
});
