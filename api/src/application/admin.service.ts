import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  async listUsers(filter: unknown) {
    return { filter, users: [] };
  }

  async resolveDispute(id: string, payload: unknown) {
    return { disputeId: id, resolved: true, payload };
  }
}
