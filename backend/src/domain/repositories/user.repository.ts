import { UserEntity } from '../entities/user.entity';

export abstract class UserRepository {
  abstract findMany(
    results: number,
    newSeed?: boolean,
    gender?: string,
  ): Promise<UserEntity[]>;
}
