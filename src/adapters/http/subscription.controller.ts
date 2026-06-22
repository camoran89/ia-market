import { Body, Controller, Post } from '@nestjs/common';
import { SubscriptionService } from '../../application/subscription.service.js';

@Controller('subscription')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Post('register')
  async register(@Body() payload: unknown) {
    return this.subscriptionService.register(payload);
  }
}
