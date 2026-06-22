import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/user.repository.js';
import { UserCredentials } from '../../domain/value-objects/user-credentials.type.js';
import { UserEntity } from '../../domain/entities/user.entity.js';
import { JsonFileRepositoryBase } from './json-file-repository.base.js';

@Injectable()
export class FileUserRepository extends JsonFileRepositoryBase<UserEntity> implements UserRepository {
  constructor() {
    super('users.json');
  }

  async findByCredentials(payload: UserCredentials | null | undefined): Promise<UserEntity | null> {
    const users = await this.readRecords();
    return users.find(user => user.email === payload?.email && user.password === payload?.password) ?? null;
  }

  async create(payload: UserEntity): Promise<UserEntity> {
    const users = await this.readRecords();
    users.push(payload);
    await this.saveRecords(users);
    return payload;
  }
}
