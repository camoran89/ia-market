import { Injectable } from '@nestjs/common';

@Injectable()
export class SellerService {
  async updateCatalog(payload: unknown) {
    return { updated: true, payload };
  }

  async listOrders(vendorId: string) {
    return { vendorId, orders: [] };
  }
}
