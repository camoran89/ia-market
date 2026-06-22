import { Injectable } from '@nestjs/common';
import { SubscriptionPayload } from './types/subscription-payload.type.js';
import { SubscriptionResult } from './types/subscription-result.type.js';

@Injectable()
export class SubscriptionService {
  async register(payload: SubscriptionPayload): Promise<SubscriptionResult> {
    return {
      registered: true,
      subscription: {
        vendorId: payload.vendorId ?? 'unknown-vendor',
        plan: payload.plan ?? 'standard',
        active: true,
        startedAt: new Date().toISOString()
      }
    };
  }
}
