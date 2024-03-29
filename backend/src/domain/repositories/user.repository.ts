import { UserEntity } from '../entities/user.entity';

export abstract class UserRepository {
  abstract findMany(
    results: string,
    newSeed?: string,
    gender?: string,
  ): Promise<UserEntity[]>;
  abstract findOne(email: string): Promise<UserEntity>;
}
