import { Module } from '@nestjs/common';
import { SubscriptionController } from './subscription.controller.js';
import { ApplicationModule } from '../../application/application.module.js';

@Module({
  imports: [ApplicationModule],
  controllers: [SubscriptionController]
})
export class SubscriptionModule {}
