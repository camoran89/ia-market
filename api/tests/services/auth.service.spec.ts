import { describe, expect, it } from 'vitest';
import { AuthService } from '../../src/application/auth.service.ts';
import { UserRepository } from '../../src/domain/repositories/user.repository.ts';
import { UserCredentials } from '../../src/domain/value-objects/user-credentials.type.ts';
import { UserEntity } from '../../src/domain/entities/user.entity.ts';

class StubUserRepository implements UserRepository {
  private readonly users: UserEntity[] = [];

  async findByCredentials(payload: UserCredentials | null | undefined) {
    return this.users.find(user => user.email === payload?.email && user.password === payload?.password) ?? null;
  }

  async create(payload: UserEntity) {
    this.users.push(payload);
    return payload;
  }
}

describe('AuthService', () => {
  const repository = new StubUserRepository();
  const authService = new AuthService(repository);

  it('registers a new user', async () => {
    const user: UserEntity = {
      email: 'test@example.com',
      password: 'secret',
      role: 'buyer'
    };

    const result = await authService.register(user);

    expect(result).toEqual(user);
  });

  it('authenticates an existing user', async () => {
    const credentials: UserCredentials = {
      email: 'test@example.com',
      password: 'secret'
    };

    const result = await authService.authenticate(credentials);

    expect(result).not.toBeNull();
    expect(result?.email).toBe('test@example.com');
  });
});
