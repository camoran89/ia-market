import { Injectable } from '@nestjs/common';
import { SubscriptionEntity } from '../../domain/entities/subscription.entity.js';
import { SubscriptionRepository } from '../../domain/repositories/subscription.repository.js';
import { JsonFileRepositoryBase } from './json-file-repository.base.js';

@Injectable()
export class FileSubscriptionRepository extends JsonFileRepositoryBase<SubscriptionEntity> implements SubscriptionRepository {
  constructor() {
    super('subscriptions.json');
  }

  async save(subscription: SubscriptionEntity): Promise<SubscriptionEntity> {
    const subscriptions = await this.readRecords();
    subscriptions.push(subscription);
    await this.saveRecords(subscriptions);
    return subscription;
  }

  async findByVendorId(vendorId: string): Promise<SubscriptionEntity | null> {
    const subscriptions = await this.readRecords();
    return subscriptions.find(subscription => subscription.vendorId === vendorId) ?? null;
  }
}
