import { Module } from '@nestjs/common';
import { AuthModule } from '../adapters/http/auth.module.js';
import { BuyerModule } from '../adapters/http/buyer.module.js';
import { SellerModule } from '../adapters/http/seller.module.js';
import { AdminModule } from '../adapters/http/admin.module.js';
import { ChatModule } from '../adapters/http/chat.module.js';
import { SearchModule } from '../adapters/http/search.module.js';
import { ReceiptModule } from '../adapters/http/receipt.module.js';
import { SubscriptionModule } from '../adapters/http/subscription.module.js';
import { AppController } from '../adapters/http/app.controller.js';

@Module({
  imports: [
    AuthModule,
    BuyerModule,
    SellerModule,
    AdminModule,
    ChatModule,
    SearchModule,
    ReceiptModule,
    SubscriptionModule
  ],
  controllers: [AppController]
})
export class AppModule {}
