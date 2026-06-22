import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { BuyerService } from './buyer.service.js';
import { ChatService } from './chat.service.js';
import { ChatIntentService } from './chat-intent.service.js';
import { ChatReplyService } from './chat-reply.service.js';
import { SearchService } from './search.service.js';
import { ReceiptService } from './receipt.service.js';
import { SellerService } from './seller.service.js';
import { AdminService } from './admin.service.js';
import { SubscriptionService } from './subscription.service.js';
import { OrderService } from './order.service.js';
import { VendorService } from './vendor.service.js';
import { FileOrderRepository } from '../infrastructure/adapters/file-order.repository.js';
import { FileUserRepository } from '../infrastructure/adapters/file-user.repository.js';
import { FileCatalogRepository } from '../infrastructure/adapters/file-catalog.repository.js';
import { FileSubscriptionRepository } from '../infrastructure/adapters/file-subscription.repository.js';
import { OrderRepository } from '../domain/repositories/order.repository.js';
import { UserRepository } from '../domain/repositories/user.repository.js';
import { CatalogRepository } from '../domain/repositories/catalog.repository.js';
import { SubscriptionRepository } from '../domain/repositories/subscription.repository.js';

@Module({
  providers: [
    AuthService,
    BuyerService,
    ChatService,
    ChatIntentService,
    ChatReplyService,
    SearchService,
    ReceiptService,
    SellerService,
    VendorService,
    AdminService,
    SubscriptionService,
    OrderService,
    {
      provide: OrderRepository,
      useClass: FileOrderRepository
    },
    {
      provide: UserRepository,
      useClass: FileUserRepository
    },
    {
      provide: CatalogRepository,
      useClass: FileCatalogRepository
    },
    {
      provide: SubscriptionRepository,
      useClass: FileSubscriptionRepository
    }
  ],
  exports: [
    AuthService,
    BuyerService,
    ChatService,
    ChatIntentService,
    ChatReplyService,
    SearchService,
    ReceiptService,
    SellerService,
    VendorService,
    AdminService,
    SubscriptionService,
    OrderService,
    OrderRepository,
    UserRepository,
    CatalogRepository,
    SubscriptionRepository
  ]
})
export class ApplicationModule {}
