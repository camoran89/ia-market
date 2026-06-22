import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { UserRepository } from '../../domain/repositories/user.repository.js';
import { UserCredentials } from '../../domain/value-objects/user-credentials.type.js';
import { UserEntity } from '../../domain/entities/user.entity.js';
import { loadQueries } from '../sql/load-queries.js';

@Injectable()
export class PostgresUserRepository implements UserRepository {
  private readonly queriesPromise = loadQueries('user-queries.sql');

  constructor(private readonly pool: Pool) {}

  async findByCredentials(payload: UserCredentials | null | undefined): Promise<UserEntity | null> {
    if (!payload) return null;
    const queries = await this.queriesPromise;
    const result = await this.pool.query(queries.SELECT_USER_BY_CREDENTIALS, [payload.email, payload.password]);
    return result.rows[0] ?? null;
  }

  async create(payload: UserEntity): Promise<UserEntity> {
    const queries = await this.queriesPromise;
    await this.pool.query(
      queries.INSERT_USER,
      [payload.email, payload.password, payload.role, payload.subscriptionActive ?? false, payload.createdAt ?? new Date().toISOString()]
    );
    return payload;
  }

  async findAll(): Promise<UserEntity[]> {
    const queries = await this.queriesPromise;
    const result = await this.pool.query(queries.SELECT_ALL_USERS);
    return result.rows;
  }
}
