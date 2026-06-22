import { SubscriptionEntity } from '../entities/subscription.entity.js';

export abstract class SubscriptionRepository {
  abstract save(subscription: SubscriptionEntity): Promise<SubscriptionEntity>;
  abstract findByVendorId(vendorId: string): Promise<SubscriptionEntity | null>;
}
