import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { BuyerService } from './buyer.service.js';
import { ChatService } from './chat.service.js';
import { ChatIntentService } from './chat-intent.service.js';
import { ChatReplyService } from './chat-reply.service.js';
import { SearchService } from './search.service.js';
import { ReceiptService } from './receipt.service.js';
import { VendorService } from './vendor.service.js';
import { AdminService } from './admin.service.js';
import { OrderService } from './order.service.js';
import { PostgresModule } from '../infrastructure/adapters/postgres.module.js';
import { PostgresOrderRepository } from '../infrastructure/adapters/postgres-order.repository.js';
import { PostgresUserRepository } from '../infrastructure/adapters/postgres-user.repository.js';
import { PostgresCatalogRepository } from '../infrastructure/adapters/postgres-catalog.repository.js';
import { PostgresSubscriptionRepository } from '../infrastructure/adapters/postgres-subscription.repository.js';
import { OrderRepository } from '../domain/repositories/order.repository.js';
import { UserRepository } from '../domain/repositories/user.repository.js';
import { CatalogRepository } from '../domain/repositories/catalog.repository.js';
import { SubscriptionRepository } from '../domain/repositories/subscription.repository.js';
import { PRODUCT_REPOSITORY } from '../domain/product/product-repository.token.js';
import { InMemoryProductRepository } from '../adapters/persistence/in-memory.product.repository.js';

@Module({
  imports: [PostgresModule],
  providers: [
    AuthService,
    BuyerService,
    ChatService,
    ChatIntentService,
    ChatReplyService,
    SearchService,
    ReceiptService,
    VendorService,
    AdminService,
    OrderService,
    {
      provide: OrderRepository,
      useClass: PostgresOrderRepository
    },
    {
      provide: UserRepository,
      useClass: PostgresUserRepository
    },
    {
      provide: CatalogRepository,
      useClass: PostgresCatalogRepository
    },
    {
      provide: SubscriptionRepository,
      useClass: PostgresSubscriptionRepository,
    },
    {
      provide: PRODUCT_REPOSITORY,
      useClass: InMemoryProductRepository,
    },
  ],
  exports: [
    AuthService,
    BuyerService,
    ChatService,
    ChatIntentService,
    ChatReplyService,
    SearchService,
    ReceiptService,
    VendorService,
    AdminService,
    OrderService,
    OrderRepository,
    UserRepository,
    CatalogRepository,
    SubscriptionRepository,
    PRODUCT_REPOSITORY,
  ],
})
export class ApplicationModule {}
