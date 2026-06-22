import { describe, expect, it } from 'vitest';
import { SubscriptionService } from '../../src/application/subscription.service.js';

describe('SubscriptionService', () => {
  const subscriptionService = new SubscriptionService();

  it('registers a subscription payload', async () => {
    const result = await subscriptionService.register({
      email: 'vendor@example.com',
      vendorId: 'vendor-123',
      plan: 'standard'
    });

    expect(result.registered).toBe(true);
    expect(result.subscription.vendorId).toBe('vendor-123');
    expect(result.subscription.plan).toBe('standard');
    expect(result.subscription.active).toBe(true);
  });
});
