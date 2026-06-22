import { Injectable } from '@nestjs/common';

@Injectable()
export class SubscriptionService {
  async register(payload: unknown) {
    return { registered: true, payload };
  }
}
