import { Module } from '@nestjs/common';
import { AuthModule } from '../adapters/http/auth.module.js';
import { BuyerModule } from '../adapters/http/buyer.module.js';
import { AdminModule } from '../adapters/http/admin.module.js';
import { ChatModule } from '../adapters/http/chat.module.js';
import { SearchModule } from '../adapters/http/search.module.js';
import { ReceiptModule } from '../adapters/http/receipt.module.js';
import { VendorModule } from '../adapters/http/vendor.module.js';
import { ApplicationModule } from '../application/application.module.js';
import { AppController } from '../adapters/http/app.controller.js';

@Module({
  imports: [ApplicationModule, AuthModule, BuyerModule, AdminModule, ChatModule, SearchModule, ReceiptModule, VendorModule],
  controllers: [AppController]
})
export class AppModule {}
