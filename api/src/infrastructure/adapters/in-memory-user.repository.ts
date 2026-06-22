import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/user.repository.js';
import { UserCredentials } from '../../domain/value-objects/user-credentials.type.js';
import { UserEntity } from '../../domain/entities/user.entity.js';

@Injectable()
export class InMemoryUserRepository implements UserRepository {
  private readonly users: UserEntity[] = [];

  async findByCredentials(payload: UserCredentials | null | undefined): Promise<UserEntity | null> {
    return this.users.find(user => user.email === payload?.email && user.password === payload?.password) ?? null;
  }

  async create(payload: UserEntity): Promise<UserEntity> {
    this.users.push(payload);
    return payload;
  }
}
