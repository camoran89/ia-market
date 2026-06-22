import { Body, Controller, Inject, Post } from '@nestjs/common';
import { SubscriptionService } from '../../application/subscription.service.js';
import { SubscriptionPayload } from '../../application/types/subscription-payload.type.js';

@Controller('subscription')
export class SubscriptionController {
  constructor(@Inject(SubscriptionService) private readonly subscriptionService: SubscriptionService) {}

  @Post('register')
  async register(@Body() payload: SubscriptionPayload) {
    return this.subscriptionService.register(payload);
  }
}
