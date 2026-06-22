import { Inject, Injectable } from '@nestjs/common';
import { SubscriptionPayload } from './types/subscription-payload.type.js';
import { SubscriptionResult } from './types/subscription-result.type.js';
import { SubscriptionRepository } from '../domain/repositories/subscription.repository.js';
import { SubscriptionEntity } from '../domain/entities/subscription.entity.js';
import { randomUUID } from 'crypto';

@Injectable()
export class SubscriptionService {
  constructor(@Inject(SubscriptionRepository) private readonly subscriptionRepository: SubscriptionRepository) {}

  async register(payload: SubscriptionPayload): Promise<SubscriptionResult> {
    const subscription: SubscriptionEntity = {
      id: randomUUID(),
      vendorId: payload.vendorId ?? 'unknown-vendor',
      plan: payload.plan ?? 'standard',
      active: true,
      startedAt: new Date().toISOString()
    };

    await this.subscriptionRepository.save(subscription);

    return {
      registered: true,
      subscription: {
        vendorId: subscription.vendorId,
        plan: subscription.plan,
        active: subscription.active,
        startedAt: subscription.startedAt
      }
    };
  }
}
