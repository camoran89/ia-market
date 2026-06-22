import { UserCredentials } from '../value-objects/user-credentials.type.js';
import { UserEntity } from '../entities/user.entity.js';

export abstract class UserRepository {
  abstract findByCredentials(payload: UserCredentials | null | undefined): Promise<UserEntity | null>;
  abstract create(payload: UserEntity): Promise<UserEntity>;
}
