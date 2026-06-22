import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../domain/repositories/user.repository.js';
import { UserCredentials } from '../domain/value-objects/user-credentials.type.js';
import { UserEntity } from '../domain/entities/user.entity.js';

@Injectable()
export class AuthService {
  constructor(@Inject(UserRepository) private readonly userRepository: UserRepository) {}

  async authenticate(payload: UserCredentials) {
    return this.userRepository.findByCredentials(payload);
  }

  async register(payload: UserEntity) {
    return this.userRepository.create(payload);
  }
}
