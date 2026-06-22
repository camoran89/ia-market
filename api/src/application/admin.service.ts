import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../domain/repositories/user.repository.js';

@Injectable()
export class AdminService {
  constructor(@Inject(UserRepository) private readonly userRepository: UserRepository) {}

  async listUsers(filter: unknown) {
    const users = await this.userRepository.findAll();
    return { filter, users };
  }

  async resolveDispute(id: string, payload: unknown) {
    return { disputeId: id, resolved: true, payload };
  }
}
