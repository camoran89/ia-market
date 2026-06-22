import { Module } from '@nestjs/common';
import { ReceiptController } from './receipt.controller.js';
import { ApplicationModule } from '../../application/application.module.js';

@Module({
  imports: [ApplicationModule],
  controllers: [ReceiptController]
})
export class ReceiptModule {}
