import { Module } from '@nestjs/common';
import { SellerController } from './seller.controller.js';
import { ApplicationModule } from '../../application/application.module.js';

@Module({
  imports: [ApplicationModule],
  controllers: [SellerController]
})
export class SellerModule {}
