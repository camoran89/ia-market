import { Module } from '@nestjs/common';
import { BuyerController } from './buyer.controller.js';
import { ApplicationModule } from '../../application/application.module.js';

@Module({
  imports: [ApplicationModule],
  controllers: [BuyerController]
})
export class BuyerModule {}
